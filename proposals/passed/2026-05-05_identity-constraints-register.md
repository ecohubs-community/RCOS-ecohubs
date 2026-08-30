---
title: "EcoHubs Identity Constraints Register"
date: 2026-06-03
status: passed
layers: [0]
decision_type: constitutional
vote_result: "Supermajority (≥⅔ of votes cast) met"
summary: "Adopts eight identity constraints (IC-001 to IC-008) across governance, economic, ecological, and structural/cultural domains, each with a defined enforcement pathway."
---

# Proposal: EcoHubs Identity Constraints Register

- **Status:** Passed
- **Submitted:** 2026-05-05
- **Submitted by:** Stefan (founding member)
- **Decision type:** Constitutional
- **Authorized decision path:** Decision Matrix (Layer 2) — "Primary purpose, scope, invariant, or identity constraint changes" → Constitutional; all Full Members; ecohubsOS vote + 30-day ratification; supermajority (≥⅔)

---

## Summary

Adopts eight identity constraints declaring the non-negotiable boundaries on participation, behavior, and governance that define what EcoHubs is and is not. Each constraint carries a defined enforcement pathway; constraints may not be enforced implicitly or informally.

## Affected Layers and Artifacts

- Layer 0 — `layers/0-identity/04-identity-constraints-register.md`

## Change Type

- [x] Permanent rule change
- [ ] Time-bounded experiment

## Adopted Content

### Governance Constraints

Constraints on how authority is held and exercised within EcoHubs.

| ID | Constraint | Enforcement mechanism |
|---|---|---|
| IC-001 | Members must not act in ways that concentrate power, extract value, or cause harm to people, land, or the community's governance integrity. | Accountability Protocol (Layer 4); any member may raise a concern via the Conflict Resolution Ladder |
| IC-002 | No member, founder, or role may claim authority that is not explicitly granted through the governance system. | Authority Registry (Layer 2) defines all granted authority; any undeclared authority claim is invalid by construction and subject to the Accountability Protocol |

### Economic Constraints

Constraints on how EcoHubs and its mechanisms may be used economically.

| ID | Constraint | Enforcement mechanism |
|---|---|---|
| IC-003 | EcoHubs may not be used as a vehicle for speculative financial gain — internal economic mechanisms exist to recognize contribution, not generate profit. | Treasury Ruleset and Internal Economy Protocol (Layer 3); any proposal to create speculative financial mechanisms is invalid under this constraint; Full Members may veto via re-vote |

### Ecological Constraints

Constraints on EcoHubs' relationship with ecosystems and biodiversity.

| ID | Constraint | Enforcement mechanism |
|---|---|---|
| IC-004 | EcoHubs and its communities must not cause sustained net harm to local ecosystems, land, or biodiversity — practices that degrade the conditions for life are incompatible with the primary purpose. | **Partial.** Behavioral/governance enforcement: any member may raise a concern via the Conflict Resolution Ladder; proposals visibly degrading ecosystems may be objected to via re-vote. Measurable threshold for "sustained net harm" in a networked community context is deferred. |
| IC-005 | Ecological impact must be considered in all significant resource, land, and infrastructure decisions. | **Partial.** Process requirement: all Strategic and Constitutional decisions affecting resources, land, or infrastructure must include an ecological impact statement; omission is grounds for a re-vote request. Criteria for what constitutes a "significant" decision are deferred. |

### Structural and Cultural Constraints

Constraints on EcoHubs' identity as a non-ideological, pluralistic structure.

| ID | Constraint | Enforcement mechanism |
|---|---|---|
| IC-006 | The structural layer of EcoHubs — its governance, membership, and operating system — must remain non-ideological and non-normative. It provides scaffolding, not a prescribed way of living. | Any proposal embedding ideological requirements in RCOS Core or governance artifacts is invalid under this constraint; reinforced by Invariant INV-004 |
| IC-007 | No specific belief system, spirituality, culture, or political ideology may be required as a condition of membership or participation. | Membership Agreement (Layer 1) must not list ideological conditions; any enforcement of such conditions is subject to the Accountability Protocol |
| IC-008 | Diversity of approaches to regenerative living is a feature, not a problem — the structure exists to enable this diversity, not constrain it. | Any governance action that systematically excludes members based on their approach to regenerative living is subject to the Conflict Resolution Ladder |

### Enforcement Principles

Identity constraints MUST be testable and enforceable through defined processes, and MUST NOT be enforced implicitly or informally.

| Constraint | Enforcement status | Notes |
|---|---|---|
| IC-001 | Enforceable | Via Layer 4 Accountability Protocol |
| IC-002 | Enforceable | Via Authority Registry (Layer 2) + Layer 4 |
| IC-003 | Enforceable | Via Layer 3 artifacts + re-vote mechanism |
| IC-004 | Partial | Behavioral enforcement defined; measurable threshold deferred |
| IC-005 | Partial | Process requirement defined; "significance" threshold deferred |
| IC-006 | Enforceable | Via Layer 0 Invariant INV-004 + proposal invalidity |
| IC-007 | Enforceable | Via Membership Agreement (Layer 1) + Layer 4 |
| IC-008 | Enforceable | Via Layer 4 Conflict Resolution Ladder |

### Changes to the Register

Identity constraints may only be added, modified, or removed through a Constitutional decision (≥⅔ supermajority + 30-day ratification period), as defined in the Decision Matrix (Layer 2) and the Change Protocol (Layer 6). Any change must be recorded in the Version History (Layer 6).

## Rationale

RCOS-Core §2.4 requires identity constraints to be declared and, per §2.4.3, to be testable and enforceable through defined processes rather than enforced implicitly. Writing a constraint with no route to act on it creates the appearance of accountability without the substance. Each constraint here names the artifact and process through which a violation is raised.

## Risks and Mitigations

- **Risk:** IC-004 and IC-005 are adopted with only partial enforcement — no measurable threshold exists for "sustained net harm" or for what makes a decision "significant". **Mitigation:** Both are fully enforceable as a basis for raising a conflict and objecting to a proposal; the numerical threshold cannot be defined without operational data and is tracked as a deferred governance task in `resources/future-proposals.md`. This is recorded as an open §2.4.3 gap in the compliance checklist.
- **Risk:** IC-006 to IC-008 could be read as forbidding any shared values. **Mitigation:** The constraints bind the *structural* layer only — governance, membership, and the operating system — not what individual members or communities choose to practise.

## Transition and Migration Plan

No migration required. Status changes from *Draft — not yet adopted* to *Active — adopted 2026-07-03*. Existing artifacts already reference the register (Purpose Charter cross-references it in place of an inline identity-constraints section).

## Rollback Plan

Rollback requires a further Constitutional decision removing or amending specific constraints. Rollback trigger: a ratified finding that a constraint is unenforceable in practice or in irreconcilable conflict with an invariant.

## Effective Date

2026-07-03 (end of the 30-day ratification period following the vote close)

## Review Date (if experiment or time-bounded)

N/A — but the deferred IC-004 / IC-005 thresholds remain open items tracked in `resources/future-proposals.md`.

---

## Decision Record

- **Vote outcome:** Passed
- **Proposal created:** 2026-05-05 10:40:30
- **Vote closed:** 2026-06-03 10:40:30
- **Ratification period:** 30 days from vote close, per Decision Matrix (Layer 2)
- **Effective / adopted:** 2026-07-03
- **Decision type:** Constitutional
- **Mechanism:** ecohubsOS vote
- **Decision record:** [/proposals/passed/2026-05-05_identity-constraints-register](/proposals/passed/2026-05-05_identity-constraints-register)
- **Signatories / vote count:** Supermajority (≥⅔ of votes cast) met; per-member tally recorded on the ecohubsOS proposal page
