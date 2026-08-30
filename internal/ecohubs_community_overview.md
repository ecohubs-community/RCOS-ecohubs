# EcoHubs Community Overview

> Context document for RCOS application — describes EcoHubs as it currently operates across the dimensions that RCOS addresses.

---

## What EcoHubs Is

EcoHubs is an **online-first collaborative community** building an open-source standard for regenerative intentional communities. It is not currently a single physical community — it is a distributed network of people co-designing the structural foundations that make community living survivable and replicable.

Its primary deliverable is **RCOS (Regenerative Community Operating System)**, a formal, layered specification that EcoHubs is developing and testing through real community practice. EcoHubs is simultaneously the community _producing_ RCOS and an early-stage community _applying_ it.

The initiative operates across two planes:

- **Digital layer** — an online collaborative space where members across the world shape the RCOS Standard, govern the community, and coordinate work.
- **Physical layer** — emerging pilot communities that apply the RCOS Standard on actual land. The first pilot is active in Ecuador.

---

## Origin and Mission

EcoHubs emerged from research into why intentional communities fail. The working finding: **80–90% of intentional communities collapse**, and almost never because of bad intentions. They fail because of implicit structure — unwritten norms enforced as rules, invisible labor, charisma-based authority, and conflicts avoided until they become existential.

The response was not to build one more community with good values, but to **build the structural layer** that any regenerative community needs regardless of its values: a formal, versioned, auditable operating system.

EcoHubs' stated mission:

> To provide a working model for belonging — tested in real conditions and shared openly so others don't have to start from zero.

This positions EcoHubs as both a **community** and a **commons** — a shared infrastructure project that any future regenerative community can fork, adapt, and contribute back to.

### Core Claims

- The future will not be built by centralized systems or ideological shortcuts, but by people who choose to live together with intention, responsibility, and care.
- Small, locally rooted communities connected through shared values are more resilient than large centralized solutions.
- Diversity strengthens systems; failure is a teacher; learning must be continuous.

---

## Current State

As of early 2026:

| Metric                 | Value                                        |
| ---------------------- | -------------------------------------------- |
| Active members         | 16                                           |
| Countries represented  | 11                                           |
| Languages spoken       | 7                                            |
| XP co-created          | 1,300+                                       |
| Active physical pilots | 1 (Ecuador, week 6 of RCOS Standard application) |
| Phase                  | Phase 1 — Community Formation                |

### Phase Roadmap

| Phase                 | Focus                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| **Phase 1 (current)** | Gather first 500 aligned founding members; co-create RCOS Standard foundation; align values          |
| **Phase 2**           | Refine the RCOS Standard; launch full DAO governance; develop tooling                                    |
| **Phase 3**           | Apply the RCOS Standard in pilot communities; document and publish learnings; enable network replication |

---

## Values and Principles

EcoHubs is deliberately non-ideological at the structural level — it does not prescribe a political, spiritual, or cultural system. Its values operate as **design constraints**, not beliefs.

### Foundational Values

- **Regeneration over sustainability** — improving conditions of life, not just maintaining them
- **Cooperation over competition**
- **Shared responsibility over delegated authority**
- **Transparency over control**
- **Lived experience over theory**
- **Curiosity over certainty**

### What EcoHubs Rejects

- Extractive economics
- Rigid hierarchies
- Charisma-based authority
- Solutions that scale without regard for context
- Utopian assumptions that good values make structure unnecessary

### Transformation Frame

EcoHubs frames its work as replacing specific failure conditions with designed alternatives:

| Status quo condition                  | EcoHubs alternative                      |
| ------------------------------------- | ---------------------------------------- |
| Loneliness and disconnection          | Neighbors who know your name             |
| Extractive agriculture                | Land cared for by those who live on it   |
| Abstract work disconnected from place | Work that serves people you know         |
| Distant, unaccountable decisions      | Decisions made by the people they affect |
| School as economic preparation        | Learning integrated into life            |
| Imposed monoculture                   | Plural, locally adapted                  |
| Long supply chains                    | Closed loops, local resilience           |
| System too rigid to heal              | Small enough to actually change          |

---

## Membership

### Current Structure

Membership is **application-based and values-aligned**, not payment-based. There is no cost to apply or join. Applicants are evaluated on alignment with regenerative values, willingness to actively contribute, and emotional maturity for collaborative living.

### Application Process

1. Applicant submits a detailed application (40+ fields) covering values, experience, contribution areas, languages, location, and collaboration style.
2. Application is reviewed by the admin team; an AI-assisted recommendation may assist review.
3. A governance proposal is created in ecohubsOS (the internal voting app).
4. Existing Full Members vote (Approve / Reject / Needs Review) within a defined window.
5. Applicant receives email notification of the decision.

### Membership States (as currently implemented)

| State            | Description                                 |
| ---------------- | ------------------------------------------- |
| Applicant        | Submitted application, awaiting vote        |
| Proposal created | ecohubsOS vote is live                      |
| Approved         | Passed community vote, onboarding initiated |
| Rejected         | Not admitted at this time                   |

Note: The current states map roughly to RCOS Layer 1 but have not yet been formally specified with explicit rights, obligations, and transition rules per RCOS requirements.

### Onboarding Workflow

Once approved, members move through a structured 5-step onboarding in the ecohubsOS dashboard:

1. **Account setup** — ecohubsOS account created (all voting happens here; no wallet required)
2. **Offcoin/Puckstack linking** — Connect contribution tracking and task management identity
3. **Discord integration** — Join community chat; verified via OAuth
4. **Forum account** — Join the Flarum-based community discussion space
5. **Safe proposal** (optional) — Request to be added as member or proposer on the community multi-sig wallet

### Who Joins

The community currently attracts: permaculturists, community builders, systems thinkers, developers, designers, facilitators, educators, and people seeking meaningful belonging. Roles span a wide range: builders, listeners, writers, organizers, carers, translators, teachers.

---

## Governance

### Governance Model

EcoHubs operates as a **DAO (Decentralized Autonomous Organization)** using blockchain-based tooling to ensure transparent, participatory decision-making. The stated principle is that authority is structural, distributed, and written down — not derived from charisma or seniority.

### Current Governance Stack

| Tool                        | Purpose                                                           |
| --------------------------- | ----------------------------------------------------------------- |
| **ecohubsOS voting**        | Internal voting for membership and content decisions; no wallet required |
| **Safe (multi-sig wallet)** | Executing governance decisions; treasury management               |
| **ecohubsOS**               | Dashboard for managing proposals, applications, and member status |
| **Flarum forum**            | Asynchronous discussion and deliberation                          |
| **Discord**                 | Real-time communication and announcements                         |

### Decision Scope (current practice)

Governance currently handles:

- **Membership admission** — vote per applicant in ecohubsOS
- **Content publication** — blog articles proposed and voted on before publishing
- **Treasury transactions** — executed via Safe multi-sig requiring multiple signers

Operational and strategic decision-making beyond these three areas is not yet formally structured with a Decision Matrix or Governance Protocol per RCOS Layer 2 requirements.

### Authority Model

- No individual holds unilateral authority by default
- The community's Safe wallet requires multiple owners to execute transactions
- Members can be added as Safe owners (full authority) or proposers (delegated, limited authority)
- Voting rights follow membership state (Full Member), not wallet or token holdings

---

## Economic and Resource System

### Contribution Recognition

EcoHubs uses two internal units to make contribution visible:

| Unit                       | Description                                                      |
| -------------------------- | ---------------------------------------------------------------- |
| **XP (Experience Points)** | Activity and progress indicator; tracks participation and growth |
| **ECO tokens**             | Community currency earned through contributions                  |

These are tracked via the **Offcoin** integration in ecohubsOS. Both units are:

- Internal only — not traded on open markets
- Non-speculative — explicitly not positioned as investment assets
- Designed to make labor and care visible, not to generate profit

Recognized contribution types include:

- Labor (construction, maintenance, food production)
- Care (childcare, elder care, conflict support)
- Knowledge (training, documentation, facilitation)
- Stewardship (resource maintenance, procurement oversight)
- Administrative and coordination work

### Treasury

The shared treasury is managed via the **Safe multi-sig wallet**, requiring multiple co-signers to execute transactions. Transparency of treasury state to all members is an expressed value, though the formal treasury ruleset and spending authority thresholds have not yet been fully specified as RCOS artifacts.

### External Funding Sources

Intended funding:

- Grants and foundations
- Web3 ecosystem funding
- Private partnerships
- Future revenue from tools, educational programs, and onboarding support (while maintaining regenerative principles)

### Economic Philosophy

EcoHubs aims for a **closed-loop local economy** in physical hubs: small businesses serving local community members, permaculture-based food systems, and reduced dependency on global supply chains. The XP/ECO system is designed as the accounting layer that makes this visible and honest.

---

## Operations and Coordination

### Task Management

Members coordinate work through **Puckstack**, a task management platform integrated into ecohubsOS. Members can browse available tasks, claim them, and track contributions. Task completion feeds into XP and ECO tracking.

### Communication

| Channel          | Use                                                          |
| ---------------- | ------------------------------------------------------------ |
| **Discord**      | Real-time community chat; admin notifications; announcements |
| **Flarum forum** | Deeper asynchronous discussion and deliberation              |
| **Newsletter**   | Field notes, new RCOS Standard chapters, event invitations       |
| **Weekly sync**  | Weekly sync calls for coordination and decision-making       |
| **ecohubsOS**    | Governance and onboarding coordination                       |

### Documentation and Knowledge

The RCOS Standard is hosted at `rcos.ecohubs.community` and is developed as a collaborative knowledge base. Blog content is managed via Ghost CMS with a community proposal-and-vote publication workflow.

### Role and Responsibility Structure

Role structure is currently informal — the community is in early formation and most explicit role definitions exist in the technical infrastructure (admin vs. member access, Safe owner vs. proposer) rather than in formal governance artifacts. A full Role Registry per RCOS Layer 5 has not yet been established.

---

## Technology Infrastructure (ecohubsOS)

ecohubsOS is the community's **operating dashboard** — an integrated platform that centralizes membership management, governance participation, task tracking, contribution accounting, and onboarding.

### Architecture

| Layer                 | Technology                                            |
| --------------------- | ----------------------------------------------------- |
| Frontend              | Svelte 5 / SvelteKit                                  |
| Database              | SQLite with Drizzle ORM                               |
| Authentication        | Authentik (SSO/OAuth) + better-auth                   |
| Governance            | ecohubsOS voting app, Safe (Protocol Kit + API Kit)   |
| Contribution tracking | Offcoin SDK                                           |
| Tasks                 | Puckstack                                             |
| Forum                 | Flarum                                                |
| Blog                  | Ghost CMS                                             |
| Communication         | Discord (OAuth + webhooks), Nodemailer                |

### Design Philosophy

The platform is built on explicit commitments to avoid extractive design patterns:

- **No engagement loops** — No streaks, no algorithmic notifications; community is the reason to return
- **Privacy by design** — No third-party tracking, no ad market data flows; data lives within the community
- **Open source** — Platform is auditable and forkable; communities can take the technology with them if they grow beyond ecohubs
- **Offline-first life** — The screen is the smallest possible bridge; real work happens face-to-face

### Member Profile Data

Member profiles capture:

- Display name, biography, location, languages spoken
- Contribution areas and projects
- XP and ECO balance
- Wallet addresses and Safe membership
- Onboarding completion status
- Public visibility preferences

---

## The RCOS Standard

The RCOS Standard is EcoHubs' full Regenerative Community Operating System. EcoHubs is both the steward of this standard and its primary test case.

The 7-layer structure:

| Layer       | Domain                                                                                 |
| ----------- | -------------------------------------------------------------------------------------- |
| **Layer 0** | Purpose & Scope — why the community exists, what it governs, non-negotiable invariants |
| **Layer 1** | Membership — joining, participating, changing states, and exiting with dignity         |
| **Layer 2** | Governance — who decides what, on whose behalf, how authority stays reviewable         |
| **Layer 3** | Economy & Resources — how value flows, how labor is seen, how commons is protected     |
| **Layer 4** | Conflict & Accountability — repair, holding each other, avoiding quiet exclusion       |
| **Layer 5** | Operations — daily coordination that doesn't burn out the people carrying it           |
| **Layer 6** | Evolution — how the whole system changes safely and in the open                        |

Optional domain modules extend the core for specific contexts: permaculture, education, housing, energy, land commons, alternative economies, and others.

The RCOS Standard is described as a **living body of knowledge** — open, modular, and shaped by real-world practice. Its goal is to reduce repeated failure, accelerate community learning, and provide a shared foundation that communities can fork and adapt.

---

## Network Model

EcoHubs is designed as a **distributed network**, not a single community:

- **Local** — each hub is rooted in a place, adapted to its culture and climate
- **Connected** — hubs share patterns, failures, and tools through the shared RCOS Standard
- **Replicable** — forkable rather than franchised; every hub stays its own place

The stated strategy is not replacement of existing systems through revolution, but a quiet reduction of dependency on them — community by community — until a different way of life becomes accessible and replicable at scale.

---

## RCOS-Relevant Context

The following observations describe where EcoHubs currently stands relative to the RCOS layers — not as a compliance audit, but as context for applying RCOS systematically.

**What exists explicitly:**

- A stated primary purpose and set of values
- An application-based membership process with a defined workflow
- Governance tooling (ecohubsOS voting, Safe multi-sig) for specific decisions
- A contribution recognition system (XP/ECO via Offcoin)
- A task and coordination layer (Puckstack, Discord, Flarum)
- Onboarding workflow with defined steps
- A change/versioning framework implicit in the RCOS Standard development process

**What is present informally but not yet specified as explicit artifacts:**

- Membership rights and obligations per state
- A formal Decision Matrix covering all decision types
- A complete Governance Protocol (proposal lifecycle, deliberation, documentation)
- A formal Authority Registry with explicit scope and limits per role
- A Treasury Ruleset with spending thresholds and conflict-of-interest rules
- A Resource Registry classifying commons vs. private
- A Conflict Resolution Ladder and Accountability Protocol
- A Role Registry with defined responsibilities, terms, and review mechanisms
- A formal Change Protocol and Version History for the community's own rules
- A Learning Log for failures and adaptations

**Structural patterns already aligned with RCOS principles:**

- Explicit beats implicit (stated value; partially implemented)
- Authority made structural rather than charismatic (DAO design intention)
- Contribution visibility and honest accounting (XP/ECO system)
- Transparency as default (open governance, published treasury)
- Pre-commitment to conflict handling (RCOS Standard content; not yet a formal artifact for ecohubs-the-community)
- Modular design (optional modules planned; core layers stable)

The Ecuador pilot is ecohubs' first formal test of the RCOS Standard in physical conditions, producing real learnings that feed back into the specification.
