# Operations Manual

- **Layer:** 5 — Operations & Coordination
- **Status:** Stub — not yet adopted
- **RCOS reference:** §7.1, §7.3, §7.4, §7.5, §7.6

---

## Core Operational Processes

:::rcos{clauses="7.3.4, 7.7.2, 7.6.3"}
:::

:::rationale{title="Why document critical processes?"}
If a process only lives in one person's head, the community depends on that person showing up — forever. Writing the critical processes down, with named owners, is what converts private knowledge into a community asset that survives handovers, absences, and exits.
:::

| Process | Who | Detail |
|---|---|---|
| Member onboarding | Membership Admin | Processes application, triggers trial period, monitors the 30-day onboarding window and the trial period; Full Member status is granted automatically on reaching Level 1 — see Onboarding Protocol (Layer 1) |
| Member exit | Membership Admin | Processes voluntary exit request or forced exit per Layer 4 outcome — see Exit & Separation Protocol (Layer 1) |
| Proposal publication | Proposing member + Membership Admin | Proposing member submits the proposal in the ecohubsOS voting app; Membership Admin adds proposal file to `proposals/passed/` or `proposals/rejected/` within 7 days of vote conclusion; affected artifacts updated within 7 days — see Governance Protocol (Layer 2) |
| Contribution recording | Member (self-reported) / Puckstack (automatic) | Structured contributions credited automatically via Puckstack/Offcoin; informal contributions self-reported in ecohubsOS — see Internal Economy Protocol (Layer 3) |
| Weekly meeting | Facilitator | Publishes agenda in Discord ≥24 hours in advance; posts meeting notes in Discord after the meeting; action items tracked until resolved |
| Treasury management | Finance Steward | Ensures all Full Members have Safe Proposer access; publishes fiat account summaries at least every 6 months if the account does not support direct member access — see Treasury Ruleset (Layer 3) |
| Platform access review | Infrastructure Steward | Reviews platform permissions quarterly; revokes access for exited members within 24 hours |

## Temporary and Ad-Hoc Responsibilities

:::rcos{clauses="7.1.5, 7.1.4, 7.7.1"}
:::

:::rationale{title="Why cap temporary responsibilities?"}
Ad-hoc tasks quietly calcify into permanent unpaid jobs — usually on whoever said yes once. A hard time-box and a forced review make the difference between "I covered for a week" and "apparently this is my role now."
:::

When a task or responsibility is assigned temporarily (e.g. covering for an absent role holder, handling a one-off project), it must be:
- Explicitly time-bounded from the outset (a specific end date or completion condition must be stated)
- Documented as a temporary assignment (in Discord or the relevant task tool) at the time of assignment
- Reviewed before the end date; if the need continues beyond the original scope, the responsibility must be formally assigned through the Role Registry process

No temporary or ad-hoc responsibility may persist beyond 90 days without being converted into a formally defined role or terminated. If a temporary responsibility has no owner after its end date, it lapses — it does not transfer implicitly to any other member or role.

---

## Role and Domain Interfaces

:::rcos{clauses="7.6.3, 7.3.4"}
:::

:::rationale{title="Why map handoffs explicitly?"}
Most operational failures happen not inside a role but between roles — at the boundaries where work moves from one owner to the next. Naming the handoffs turns invisible dependencies into reviewable ones, and prevents "I thought you had it" failures.
:::

| From | To | Handoff |
|---|---|---|
| Membership Admin | Finance Steward | New member requires Safe Proposer access |
| Membership Admin | Infrastructure Steward | New or exiting member requires platform access changes |
| Content Creator | Communications Steward | Content ready for publication or social media |
| Digital Builder | Infrastructure Steward | New features ready for deployment |
| Research Steward | Blueprint Steward | Research findings for framework consideration |
| Blueprint Steward | Facilitator | Workshop content or agenda input |
| Any role holder | Facilitator | Agenda items for community meetings |

## Workload Boundaries

:::rcos{clauses="7.4.1, 7.4.2, 7.4.3, 7.7.3"}
:::

:::rationale{title="Why make workload limits explicit?"}
Unbounded coordination load is the default failure mode of volunteer communities — it quietly burns out the most committed members until they leave. Explicit, reviewable limits make capacity a shared concern rather than a private burden.
:::

- **Meeting load:** One weekly community meeting, 90 minutes maximum. Extraordinary meetings may be called by any Full Member but should be the exception.
- **Role load:** No formal cap currently. Role holders are responsible for flagging overload at any community meeting or in Discord. Any overload concern must be addressed within 14 days; roles may be redistributed via the governance process.
- **Response time expectations:** Non-urgent async messages (Discord, forum): 72 hours. Urgent operational matters: 24 hours. Safety-critical matters: as soon as possible.
- **Renegotiation and relief:** Any role holder may request redistribution of responsibilities at any community meeting. The community seeks a solution within 14 days.

## Operational Continuity

:::rcos{clauses="7.5.1, 7.5.2, 7.5.3"}
:::

:::rationale{title="Why plan for continuity now?"}
A community that depends on one irreplaceable person is one illness, one conflict, or one exit away from collapse. Naming the single points of failure — honestly — and building handover into every role is what keeps the community surviving its founders.
:::

- **Current state:** All operational roles are held by the founding member (Stefan). This is an acknowledged single point of failure; active recruitment of role holders is ongoing to reduce concentration.
- **Handover mechanisms:** Handover requirements for each role are defined in the Role Registry (Layer 5). Handover must be completed before a role is vacated.
- **Continuity review cadence:** Operational continuity is reviewed quarterly at a Reflection & Learning meeting, or at any community meeting when a role change occurs.

## Information Flow and Anti-Gatekeeping

:::rcos{clauses="7.3.5, 7.7.4, 7.3.2"}
:::

:::rationale{title="Why treat information access as a governance issue?"}
Whoever controls access to information controls the community, whether they mean to or not. Making access rules explicit — and disallowing sole points of access — is what prevents informal gatekeepers from accumulating the kind of power the governance system is supposed to check.
:::

- All governance decisions (passed and rejected proposals) are filed in this repository and are accessible to all Full Members
- Meeting notes are published in Discord within 48 hours of each meeting and are accessible to all Full Members
- Membership state and role assignment information is maintained in ecohubsOS and accessible to all Full Members (individual states visible to the member and Membership Admin; aggregate member list visible to all Full Members)
- Contribution records are accessible in ecohubsOS to all Full Members
- Any Full Member may request access to any document they are entitled to see under the access rules in this manual; requests must be responded to within 72 hours
- If a role holder controls access to information that other members are entitled to receive, they may not withhold or delay it; doing so is an accountability trigger under Layer 4
- No role or individual may be the sole point of access for information required by other role holders to perform their responsibilities

---

## Documentation Locations and Update Procedures

:::rcos{clauses="7.3.1, 7.3.2, 7.3.3"}
:::

:::rationale{title="Why name where every document lives?"}
If no one can say where the canonical version of something lives, there is no canonical version. Naming the location, owner, and review cadence for each document type is what makes the community's memory auditable rather than folkloric.
:::

| Document type | Location | Owner | Review cadence |
|---|---|---|---|
| RCOS artifacts | `layers/` in this repo | Blueprint Steward / Membership Admin | Per change protocol (Layer 6) |
| Member registry | ecohubsOS | Membership Admin | Ongoing |
| Meeting notes | Discord (dedicated channel) | Facilitator | After each meeting |
| Governance proposals (passed) | `proposals/passed/` in this repo | Membership Admin | Within 7 days of vote |
| Governance proposals (rejected) | `proposals/rejected/` in this repo | Membership Admin | Within 7 days of vote |
| Contribution records | ecohubsOS / Offcoin | Member (self-reported) / Puckstack (auto) | Ongoing |
| Missing technical implementations | `resources/missing-technical-implementations.md` | Infrastructure Steward / Digital Builder | Quarterly |
| Future proposals | `resources/future-proposals.md` | Blueprint Steward / Membership Admin | As needed |

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Strategic
- **Version:** <version>
- **Decision record:** <link to decision record>
