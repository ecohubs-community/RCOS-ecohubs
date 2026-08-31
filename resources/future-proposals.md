# Future Proposals

Governance and design decisions that are deferred — either because they depend on conditions not yet met, require more community input before drafting, or are optional under RCOS and not urgently needed.

**Owner:** Blueprint Steward / Membership Admin  
**Review cadence:** Reviewed at each Reflection & Learning meeting; priorities updated as community context changes

---

## High Priority

### Treasury Spending Thresholds

**Deferred until:** First community funds received in the treasury  
**Required by:** Layer 3 — Treasury Ruleset (§5.3.3); currently Finance Steward has €0 unilateral spending authority  
**What to define:** Explicit spending tiers (e.g. Operational threshold ≤ €X, Strategic for larger amounts), authorized role/body, escalation path, and treasury transparency reporting cadence  
**Layers affected:** Layer 2 (Decision Matrix), Layer 3 (Treasury Ruleset)  
**RCOS requirement:** REQUIRED — spending authority must be explicitly bounded by thresholds

---

## Medium Priority

### ECO Accumulation Limits and Decay Mechanism

**Deferred until:** ECO utility is better defined  
**Required by:** Layer 3 — Internal Economy Protocol (§5.2.4, §5.4.2); currently non-transferability is the only accumulation-limiting mechanism  
**What to define:** Whether ECO should expire after inactivity, decay gradually, or have a hard cap; redistribution or burn mechanism; technical feasibility in Offcoin  
**Trigger:** When ECO utility expands beyond Puckstack permissions, or when accumulation disparities become visible  
**Layers affected:** Layer 3 (Internal Economy Protocol — Internal Units, Accumulation Constraints)  
**RCOS requirement:** REQUIRED to define at least one accumulation-limiting mechanism; non-transferability currently satisfies the minimum. Additional mechanisms would strengthen compliance with §5.4.4 (concentration risk indicators).  
**See also:** [missing-technical-implementations.md](missing-technical-implementations.md) — item 9

### Economic Concentration Risk Indicators

**Deferred until:** Multiple members and meaningful ECO/XP balances exist  
**Required by:** §5.4.4 — MUST define reviewable indicators of economic concentration risk and an explicit adjustment mechanism  
**What to define:** Simple indicators (e.g., if one member holds >50% of total ECO supply, a review is triggered automatically at the next Reflection & Learning meeting); adjustment pathway (Strategic vote to tighten constraints)  
**RCOS requirement:** REQUIRED

### Per-Commons Resource Maintenance Obligations

**Deferred until:** First governance adoption cycle  
**Required by:** §5.1.4 — for each commons resource, maintenance obligations must be explicit  
**What to define:** Who is responsible for maintaining each resource (platform uptime, content accuracy, backups); what the maintenance obligation consists of; frequency  
**RCOS requirement:** REQUIRED (partially addressed — stewards are named but obligations not listed per-resource)  
**Where to add:** Internal Economy Protocol resource table (add "Maintenance obligations" column)

---

## Low Priority / Optional

### Consent-Based Decision Making for Strategic Decisions

**Deferred until:** Community is large enough to benefit from non-majority processes  
**Required by:** Not a MUST requirement — §4.2.2 says decision mechanisms MAY include consent-based methods  
**What to define:** Consent process for Strategic decisions as an alternative to simple majority vote; objection handling rules  
**Blocker:** Requires ecohubsOS to support consent-based voting, or a modified proposal workflow  
**Layers affected:** Layer 2 (Decision Matrix, Governance Protocol)  
**RCOS requirement:** OPTIONAL

### Ecological Identity Constraint Enforcement Mechanism

**Deferred until:** First community partners or pilot projects engaged  
**Required by:** §2.4.3 — identity constraints MUST be testable and enforceable through defined processes  
**What to define:** Measurable criteria for what constitutes "sustained net harm to local ecosystems"; enforcement pathway for the EcoHubs network context (as a steward of the standard, not an operator of physical land); how the Layer 4 accountability process would handle an ecological harm concern  
**RCOS requirement:** REQUIRED (partially addressed — behavioral constraints enforced via Layer 4; ecological constraints lack a defined enforcement mechanism)

---

## Resolved

### Suspended Member State — resolved 2026-08-31

**Was deferred until:** ecohubsOS supports differentiated access control
**RCOS requirement:** OPTIONAL — §3.7 says "MAY define"
**Resolution:** The blocker is gone. ecohubsOS implements a distinct `standby` membership status with its own access rules: a standby member reaches a gated reactivation screen instead of the desktop, cannot vote or propose, and can request reactivation by a community vote. Standby is now defined as a membership state in the Membership State Registry and governed by the Suspension (Standby) section of the Exit & Separation Protocol, covering all three entry routes (own request, inactivity, protective suspension pending a community decision), the time bounds required by §3.7.2, and the anti-substitution rule required by §3.7.3.
**Remaining technical gaps:** Standby upon a member's own request, the 14-day steward-review deadline for an inconclusive case, and the decision threshold used for removal votes — see [missing-technical-implementations.md](missing-technical-implementations.md)

### Substitution of Participation Rule — resolved 2026-08-31

**Was deferred until:** First governance adoption cycle
**Required by:** §3.5.3 — substitution of participation must be explicitly governed
**Resolution:** "Substitution of Participation" added to the Membership Agreement. Work on a task may be delegated, including to a non-member, but the personal acts of membership — voting, authoring proposals, consenting to the agreement, taking part in a conflict process, exercising role authority — may never be. Substituted work discharges the task without counting toward the delegating member's own participation, XP and ECO follow whoever did the work and only where they are a member, and a Trial Member cannot reach Level 1 on work done by someone else. Unit attribution is mirrored in the Internal Economy Protocol.
