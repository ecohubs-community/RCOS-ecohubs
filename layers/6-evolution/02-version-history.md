# Version History

- **Layer:** 6 — Evolution & Adaptation
- **Status:** Active — updated with each adopted change
- **RCOS reference:** §8.2, §8.6

> This is the authoritative human-readable record of all adopted changes to EcoHubs' RCOS implementation. The currently active version is the most recent entry at the top of this file. Superseded rules remain accessible via git history.

---

:::rcos{clauses="8.2.1, 8.2.2, 8.2.3, 8.2.4, 8.2.5, 8.6.4, 8.7.2"}
:::

:::rationale{title="Why record every adopted change?"}
Governance that cannot point to "what changed, when, and why" is indistinguishable from governance by whoever speaks loudest. A single append-only ledger of adopted changes — with the superseded versions preserved in git — makes the current state of the rules unambiguous and gives members, auditors, and future stewards a way to reconstruct the path that got us here.
:::

## Current Version: v0.4 — Identity Constraints Register Adopted

- **Effective date:** 2026-07-03
- **Decision record:** [proposals/passed/2026-05-05_identity-constraints-register.md](/proposals/passed/2026-05-05_identity-constraints-register)
- **Decision type:** Constitutional
- **Mechanism:** ecohubsOS vote — opened 2026-05-05, closed 2026-06-03, supermajority (≥⅔ of votes cast) met; 30-day ratification period ended 2026-07-03
- **Summary:** Identity Constraints Register adopted. IC-001 through IC-008 are in force across governance, economic, ecological, and structural/cultural domains, each with a defined enforcement pathway. IC-004 and IC-005 are adopted with partial enforcement — behavioral and process enforcement are defined; measurable thresholds for "sustained net harm" and "significant decision" remain deferred.
- **Layers affected:** 0
- **Artifacts changed:** `layers/0-identity/04-identity-constraints-register.md` (Draft → Active)
- **Migration notes:** None. The Purpose Charter's cross-reference to this register now points at adopted content.

---

## v0.3 — Invariants Register Adopted

- **Effective date:** 2026-07-03
- **Decision record:** [proposals/passed/2026-05-05_invariants-register.md](/proposals/passed/2026-05-05_invariants-register)
- **Decision type:** Constitutional
- **Mechanism:** ecohubsOS vote — opened 2026-05-05, closed 2026-06-03, supermajority (≥⅔ of votes cast) met; 30-day ratification period ended 2026-07-03
- **Summary:** Invariants Register adopted. INV-001 through INV-006 are in force and may not be overridden by any decision, role, process, or emergency measure. Where an invariant conflicts with any other rule, the invariant prevails.
- **Layers affected:** 0 (binding across all layers)
- **Artifacts changed:** `layers/0-identity/03-invariants-register.md` (Stub → Active)
- **Migration notes:** None. All existing artifacts were already drafted consistently with these invariants; no rule required amendment on adoption.

---

## v0.2 — Scope Declaration Adopted

- **Effective date:** 2026-07-03
- **Decision record:** [proposals/passed/2026-05-05_scope-declaration.md](/proposals/passed/2026-05-05_scope-declaration)
- **Decision type:** Constitutional
- **Mechanism:** ecohubsOS vote — opened 2026-05-05, closed 2026-06-03, supermajority (≥⅔ of votes cast) met; 30-day ratification period ended 2026-07-03
- **Summary:** Scope Declaration adopted. Seven in-scope assets, seven decision domains, and eight activities are now under community governance; five areas are explicitly out of scope. Anything not declared in-scope is out of scope by default.
- **Layers affected:** 0
- **Artifacts changed:** `layers/0-identity/02-scope-declaration.md` (Stub → Active)
- **Migration notes:** In-scope asset 5 was voted as `blueprint.ecohubs.community`. The site has since been renamed to `rcos.ecohubs.community`; the artifact records the current name. This is a rename of the same governed asset, not a change of scope.

---

## v0.1 — Purpose Charter Adopted

- **Effective date:** 2026-07-03
- **Decision record:** [proposals/passed/2026-05-05_purpose-charter.md](/proposals/passed/2026-05-05_purpose-charter)
- **Decision type:** Constitutional
- **Mechanism:** ecohubsOS vote — opened 2026-05-05, closed 2026-06-03, supermajority (≥⅔ of votes cast) met; 30-day ratification period ended 2026-07-03
- **Summary:** Purpose Charter adopted — the first ratified artifact in this repository. The primary purpose, three secondary purposes, and four non-goals are in force. The primary purpose may now only be changed by a further Constitutional decision with a 30-day ratification period.
- **Layers affected:** 0
- **Artifacts changed:** `layers/0-identity/01-purpose-charter.md` (Stub → Active)
- **Migration notes:** None — first adopted rule set. No prior rules were in force to migrate from.

---

## v0.0 — Repository Initialized

- **Effective date:** 2026-04-21
- **Decision record:** N/A — initial scaffold
- **Decision type:** N/A
- **Mechanism:** N/A
- **Summary:** Repository structure initialized. All artifact files are stubs — no layer is yet compliant. No rules are in force.
- **Layers affected:** All (scaffold only)
- **Artifacts changed:** All files created as stubs
- **Migration notes:** None — initial state

---

_New entries are prepended above this line._
