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

### Substitution of Participation Rule

**Deferred until:** First governance adoption cycle  
**Required by:** §3.5.3 — substitution of participation (outsourcing contributions to non-members) must be explicitly governed  
**What to define:** Whether members may have third parties perform contributions on their behalf; if yes, under what conditions; whether such contributions count toward participation expectations  
**RCOS requirement:** REQUIRED — currently unaddressed in any artifact  
**Where to add:** Membership Agreement or Internal Economy Protocol

### Per-Commons Resource Maintenance Obligations

**Deferred until:** First governance adoption cycle  
**Required by:** §5.1.4 — for each commons resource, maintenance obligations must be explicit  
**What to define:** Who is responsible for maintaining each resource (platform uptime, content accuracy, backups); what the maintenance obligation consists of; frequency  
**RCOS requirement:** REQUIRED (partially addressed — stewards are named but obligations not listed per-resource)  
**Where to add:** Internal Economy Protocol resource table (add "Maintenance obligations" column)

---

## Low Priority / Optional

### Suspended Member State

**Deferred until:** ecohubsOS supports differentiated access control  
**Required by:** §3.7 (MAY) — temporary suspension states are optional under RCOS  
**What to define:** Formal suspension state with time bounds and review process; access limitations during suspension; distinction from temporary access restriction (Layer 4 measure)  
**Context:** Discussed during the Layer 1 definition process. Intended to let members temporarily pause membership (illness, life events, or a conflict under review in Layer 4) without fully exiting, with a duration cap of up to 12 months, renewable once.  
**Proposed rights during suspension:** Access to public Discord channels and public calls (listener); access to personal ecohubsOS profile; right to request reinstatement at any time  
**Proposed obligations during suspension:** None, other than adherence to the Layer 0 identity constraints  
**Blocker:** ecohubsOS has no technical differentiation between Full Member and Suspended Member — Discord permissions, voting eligibility, and platform access would each need to support a distinct suspended state  
**Layers affected:** Layer 1 (Membership State Registry, Membership Agreement, Exit & Separation Protocol)  
**RCOS requirement:** OPTIONAL — §3.7 says "MAY define"  
**See also:** Exit & Separation Protocol notes this as not yet technically feasible

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
