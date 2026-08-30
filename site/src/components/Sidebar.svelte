<script lang="ts">
  type NavArtifact = { href: string; title: string };
  type NavLayer = {
    number: number;
    slug: string;
    title: string;
    href: string;
    artifacts: NavArtifact[];
  };

  type Props = { pathname?: string; layers?: NavLayer[] };
  let { pathname = "", layers = [] }: Props = $props();

  let layersOpen = $state(pathname.startsWith("/layers"));
  let proposalsOpen = $state(pathname.startsWith("/proposals"));

  // Layers whose artifact list is expanded. The layer containing the current
  // page starts open so the active artifact is visible on load.
  let openLayers = $state<Record<string, boolean>>(
    Object.fromEntries(
      layers.map((layer) => [
        layer.slug,
        pathname === layer.href || pathname.startsWith(`${layer.href}/`),
      ]),
    ),
  );

  function toggleLayer(slug: string) {
    openLayers = { ...openLayers, [slug]: !openLayers[slug] };
  }

  // Following a layer link also reveals its artifacts. Expanding here rather
  // than waiting for the next page keeps the list open during navigation.
  function onLayerClick(slug: string) {
    openLayers = { ...openLayers, [slug]: true };
    onLinkClick();
  }

  let drawerOpen = $state(false);
  let isMobile = $state(false);
  let hamburgerEl: HTMLButtonElement | undefined = $state();
  let drawerEl: HTMLElement | undefined = $state();

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  function openDrawer() {
    drawerOpen = true;
  }
  function closeDrawer() {
    drawerOpen = false;
  }

  function onLinkClick() {
    if (isMobile) closeDrawer();
  }

  $effect(() => {
    const mql = window.matchMedia("(max-width: 767.99px)");
    const update = () => {
      isMobile = mql.matches;
      if (!isMobile) drawerOpen = false;
    };
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  });

  $effect(() => {
    if (!isMobile) return;
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeDrawer();
          hamburgerEl?.focus();
        }
      };
      window.addEventListener("keydown", onKey);
      const firstLink = drawerEl?.querySelector<HTMLElement>("a, button");
      firstLink?.focus();
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  });
</script>

<div class="mobile-bar">
  <a href="/" class="mobile-brand" aria-label="Home">
    <img src="/logo.webp" alt="" width="32" height="32" />
    <span>EcoHubs</span>
  </a>
  <button
    bind:this={hamburgerEl}
    type="button"
    class="hamburger"
    aria-expanded={drawerOpen}
    aria-controls="primary-nav"
    aria-label={drawerOpen ? "Close navigation" : "Open navigation"}
    onclick={() => (drawerOpen ? closeDrawer() : openDrawer())}
  >
    {#if drawerOpen}
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    {:else}
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    {/if}
  </button>
</div>

{#if drawerOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="backdrop" onclick={closeDrawer} aria-hidden="true"></div>
{/if}

<nav
  bind:this={drawerEl}
  id="primary-nav"
  aria-label="Primary"
  class="sidebar"
  class:drawer-open={drawerOpen}
  aria-hidden={isMobile && !drawerOpen}
>
  <a href="/" class="brand" aria-label="Home" onclick={onLinkClick}>
    <img src="/logo.webp" alt="" class="brand-mark" width="40" height="40" />
    <span class="brand-stack">
      <span class="brand-text">EcoHubs</span>
      <span class="brand-sub">Community · RCOS</span>
    </span>
  </a>

  <ul class="nav-list">
    <li>
      <a
        href="/"
        class="nav-link"
        class:active={isActive("/")}
        onclick={onLinkClick}>Home</a
      >
    </li>

    <li>
      <button
        type="button"
        class="nav-link nav-group"
        aria-expanded={layersOpen}
        onclick={() => (layersOpen = !layersOpen)}
      >
        <span>RCOS Artifacts</span>
        <span class="chevron" class:open={layersOpen}>▸</span>
      </button>
      {#if layersOpen}
        <ul class="nav-sublist">
          <li>
            <a
              href="/layers"
              class="nav-sublink"
              class:active={pathname === "/layers"}
              onclick={onLinkClick}>Overview</a
            >
          </li>
          {#each layers as layer (layer.slug)}
            <li>
              <div class="nav-subrow">
                <a
                  href={layer.href}
                  class="nav-sublink"
                  class:active={pathname === layer.href}
                  class:within={isActive(layer.href)}
                  onclick={() => onLayerClick(layer.slug)}
                >
                  <span class="num">{layer.number}</span>
                  {layer.title}
                </a>
                {#if layer.artifacts.length > 0}
                  <button
                    type="button"
                    class="sub-toggle"
                    aria-expanded={!!openLayers[layer.slug]}
                    aria-label={`${openLayers[layer.slug] ? "Collapse" : "Expand"} ${layer.title} artifacts`}
                    onclick={() => toggleLayer(layer.slug)}
                  >
                    <span class="chevron" class:open={openLayers[layer.slug]}
                      >▸</span
                    >
                  </button>
                {/if}
              </div>
              {#if openLayers[layer.slug] && layer.artifacts.length > 0}
                <ul class="nav-sublist nav-sublist-deep">
                  {#each layer.artifacts as artifact (artifact.href)}
                    <li>
                      <a
                        href={artifact.href}
                        class="nav-sublink nav-leaf"
                        class:active={pathname === artifact.href}
                        onclick={onLinkClick}>{artifact.title}</a
                      >
                    </li>
                  {/each}
                </ul>
              {/if}
            </li>
          {/each}
        </ul>
      {/if}
    </li>

    <li>
      <button
        type="button"
        class="nav-link nav-group"
        aria-expanded={proposalsOpen}
        onclick={() => (proposalsOpen = !proposalsOpen)}
      >
        <span>Proposals</span>
        <span class="chevron" class:open={proposalsOpen}>▸</span>
      </button>
      {#if proposalsOpen}
        <ul class="nav-sublist">
          <li>
            <a
              href="/proposals/passed"
              class="nav-sublink"
              class:active={isActive("/proposals/passed")}
              onclick={onLinkClick}>Passed</a
            >
          </li>
          <li>
            <a
              href="/proposals/rejected"
              class="nav-sublink"
              class:active={isActive("/proposals/rejected")}
              onclick={onLinkClick}>Rejected</a
            >
          </li>
          <li>
            <a
              href="/proposals/future"
              class="nav-sublink"
              class:active={isActive("/proposals/future")}
              onclick={onLinkClick}>Future</a
            >
          </li>
        </ul>
      {/if}
    </li>

    <li>
      <a
        href="/compliance"
        class="nav-link"
        class:active={isActive("/compliance")}
        onclick={onLinkClick}>Compliance</a
      >
    </li>

    <li>
      <a href="/#faq" class="nav-link" onclick={onLinkClick}>FAQ</a>
    </li>
  </ul>

  <div class="sidebar-footer">
    <a href="https://rcos.ecohubs.community" target="_blank" rel="noopener"
      >RCOS framework ↗</a
    >
  </div>
</nav>

<style>
  .mobile-bar {
    display: none;
  }

  .sidebar {
    position: sticky;
    top: 0;
    height: 100dvh;
    width: var(--sidebar-width);
    flex-shrink: 0;
    padding: 1.25rem 1rem;
    border-right: 1px solid var(--color-border);
    background: var(--color-surface);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    color: var(--color-text);
    text-decoration: none;
    padding: 0.25rem 0.5rem;
  }
  .brand-mark {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: contain;
    flex-shrink: 0;
  }
  .brand-stack {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }
  .brand-text {
    font-family: var(--font-serif);
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: -0.01em;
  }
  .brand-sub {
    font-size: 0.72rem;
    color: var(--color-text-muted);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-top: 0.15rem;
  }

  .nav-list,
  .nav-sublist {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    flex: 1;
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
    padding: 0.4rem 0.6rem;
    border-radius: var(--radius-sm);
    color: var(--color-text);
    text-decoration: none;
    font-size: 0.92rem;
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
  }
  .nav-link:hover {
    background: var(--color-surface-muted);
    color: var(--color-text);
  }
  .nav-link.active {
    background: var(--color-surface-muted);
    color: var(--color-primary);
    font-weight: 600;
  }

  .chevron {
    transition: transform 150ms ease;
    font-size: 1.5rem;
    color: var(--color-text-muted);
    line-height: 19px;
  }
  .chevron.open {
    transform: rotate(90deg);
  }

  .nav-sublist {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    margin: 0.15rem 0 0.25rem 0.4rem;
    padding-left: 0.5rem;
    border-left: 1px solid var(--color-border);
  }

  .nav-sublist-deep {
    margin: 0.1rem 0 0.3rem 0.6rem;
    padding-left: 0.55rem;
  }

  .nav-subrow {
    display: flex;
    align-items: center;
    gap: 0.15rem;
  }
  .nav-subrow .nav-sublink {
    flex: 1;
    min-width: 0;
  }

  .nav-sublink {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 0.6rem;
    border-radius: var(--radius-sm);
    color: var(--color-text-muted);
    text-decoration: none;
    font-size: 0.88rem;
  }
  .nav-sublink:hover {
    background: var(--color-surface-muted);
    color: var(--color-text);
  }
  .nav-sublink.within {
    color: var(--color-text);
  }
  .nav-sublink.active {
    color: var(--color-primary);
    font-weight: 600;
  }

  .nav-leaf {
    font-size: 0.83rem;
    line-height: 1.35;
    padding: 0.3rem 0.55rem;
  }

  .sub-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    color: var(--color-text-muted);
    cursor: pointer;
  }
  .sub-toggle:hover {
    background: var(--color-surface-muted);
    color: var(--color-text);
  }
  .sub-toggle .chevron {
    font-size: 1rem;
    line-height: 1;
  }
  .num {
    display: inline-block;
    width: 1.1rem;
    font-variant-numeric: tabular-nums;
    color: var(--color-text-muted);
    font-size: 0.78rem;
  }

  .sidebar-footer {
    font-size: 0.82rem;
    padding: 0.5rem 0.6rem;
    border-top: 1px solid var(--color-border);
    padding-top: 0.75rem;
  }
  .sidebar-footer a {
    color: var(--color-text-muted);
    text-decoration: none;
  }
  .sidebar-footer a:hover {
    color: var(--color-primary);
  }

  @media (max-width: 767.99px) {
    .mobile-bar {
      position: sticky;
      top: 0;
      z-index: 30;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      padding: 0.6rem 0.9rem;
      background: var(--color-surface);
      border-bottom: 1px solid var(--color-border);
    }
    .mobile-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-text);
      text-decoration: none;
      font-family: var(--font-serif);
      font-weight: 700;
      font-size: 1.05rem;
    }
    .mobile-brand img {
      width: 1.8rem;
      height: 1.8rem;
      object-fit: contain;
    }
    .hamburger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      background: transparent;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      color: var(--color-text);
      cursor: pointer;
    }
    .hamburger:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background: rgb(0 0 0 / 40%);
      z-index: 40;
    }

    .sidebar {
      position: fixed;
      inset: 0 auto 0 0;
      height: 100dvh;
      width: min(85vw, 20rem);
      z-index: 50;
      transform: translateX(-100%);
      transition: transform 200ms ease;
      border-right: 1px solid var(--color-border);
      box-shadow: 0 0 0 transparent;
    }
    .sidebar.drawer-open {
      transform: translateX(0);
      box-shadow: 0 20px 40px -10px rgb(0 0 0 / 30%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sidebar {
      transition: none;
    }
  }
</style>
