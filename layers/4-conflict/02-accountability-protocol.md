# Accountability Protocol

- **Layer:** 4 — Conflict, Repair & Accountability
- **Status:** Stub — not yet adopted
- **RCOS reference:** §6.4, §6.5

---

## Triggers

:::rcos{clauses="6.4.1, 6.5.4"}
:::

:::rationale{title="Why enumerate what starts an accountability check?"}
If accountability checks only happen when someone feels strongly enough to push, they become political. Naming the exact triggers — inactivity, breach, invariant violation, referral — means the process starts from a condition anyone can verify, not from a judgement about a person.
:::

An accountability check is initiated when:

1. A member has not made a recognized contribution in six consecutive months (per the Membership Agreement)
2. A member has breached a Membership Agreement obligation
3. A member has violated a Layer 0 identity constraint or invariant
4. A referral is made from the Conflict Resolution Ladder (Step 3 or above)

## Investigation and Review

:::rcos{clauses="6.4.2, 6.4.3, 6.4.6, 6.5.4"}
:::

:::rationale{title="Why graduate the response by severity?"}
Treating a missed contribution the same as an invariant violation either crushes minor cases with heavy process or lets serious ones slip through a private chat. Graduated pathways — soft check-in, medium written notice, direct escalation for serious breaches — match response weight to breach weight and keep repair the default where repair is still possible.
:::

> **Breach severity guidance:** A breach is **medium** if it involves non-compliance with a Membership Agreement obligation (e.g. participation expectations, notification requirements, or process obligations) without threatening member safety or community integrity. A breach is **serious** if it involves a Layer 0 invariant violation, a credible safety concern, persistent bad-faith conduct, or any action that fundamentally undermines the governance system.

- **Inactivity (soft breach):** Membership Admin contacts the member privately. The member has 30 days to respond. If no response: exit is triggered per the Exit & Separation Protocol. If the member responds and commits to re-engagement: outcome documented and monitored for 3 months.
- **Obligation breach (medium):** Membership Admin contacts the member privately with a written notice of the concern. Member has 30 days to respond and address the breach. If resolved privately: written record kept by Membership Admin. If unresolved: escalated to Conflict Resolution Ladder Step 3.
- **Serious breach / invariant violation:** Membership Admin may escalate directly to Conflict Resolution Ladder Step 4 or 5, bypassing the private check-in.

## Due Process Guarantees

:::rcos{clauses="6.4.2, 6.4.4, 6.5.4"}
:::

:::rationale{title="Why spell out notice, response, and appeal rights?"}
Accountability without due process is just punishment with paperwork. A member facing a sanction needs to know the concern, have real time to respond, and have somewhere to appeal to — otherwise the Membership Admin's word is final by default, which concentrates power exactly where it should not concentrate.
:::

- **Right to notice:** The member is notified in writing of the concern before any review or sanction begins
- **Right to respond:** Minimum 30 days to respond to any accountability check
- **Right to appeal:** Any Membership Admin decision may be appealed to Full Members via the governance process (Strategic vote)

## Anti-Retaliation Protections

:::rcos{clauses="6.3.2, 6.5.4"}
:::

:::rationale{title="Why protect participants explicitly?"}
If raising a concern or giving information can cost a member standing, relationships, or access, people will stay silent and the accountability system collapses in practice. Naming retaliation as itself a trigger makes the cost of suppression higher than the cost of reporting.
:::

Any member who raises an accountability concern, participates in a review, or provides information in good faith is protected from retaliation. Retaliation against a member for participating in any part of this process is itself an accountability trigger.

## Sanction and Repair Options

:::rcos{clauses="6.4.1, 6.4.2, 6.4.3, 6.4.5, 6.4.6, 6.5.4"}
:::

:::rationale{title="Why pre-define the menu of sanctions?"}
Ad-hoc sanctions invented mid-process reflect whoever is loudest in the room, not what the breach warrants. A fixed menu — with preconditions, authorized body, and appeal path for each — keeps responses proportional, prevents informal exclusion from becoming the default punishment, and makes it obvious when a sanction is out of scope for the body applying it.
:::

> Repair-oriented responses are preferred over punitive ones except in safety-critical cases.
> Sanctions must be proportional, time-bounded where applicable, documented, and never applied through informal exclusion or social pressure.

| Type | Preconditions | Authorized body | Appealable? |
|---|---|---|---|
| Private check-in / reminder | Inactivity or minor breach | Membership Admin | Yes — to Full Members |
| Written warning | Unresolved obligation breach after check-in | Membership Admin | Yes — to Full Members |
| Temporary access restriction | Safety-critical situation only; must be reviewed within 14 days | Membership Admin | Yes — to Full Members |
| Forced exit | Serious or unresolved breach, or Full Member decision | Full Members (Strategic vote) | Yes — via re-vote mechanism |

## Conditions for Restoring Rights

:::rcos{clauses="6.4.3, 6.4.4"}
:::

:::rationale{title="Why make restoration conditions explicit?"}
If there is no defined path back, every sanction becomes effectively permanent and every exit becomes a life sentence. Explicit restoration conditions signal that accountability is about repair where repair is possible, and they prevent post-hoc gatekeeping about whether someone is "really" welcome back.
:::

- **After voluntary exit:** re-application per Onboarding Protocol; no automatic rights restoration
- **After forced exit:** minimum 6-month re-application block; re-application subject to standard admission process
- **After temporary access restriction:** rights restored upon Membership Admin confirmation of resolution (within 14 days of restriction being imposed)

## Coordination with Layer 1

:::rcos{clauses="6.4.4, 6.5.4"}
:::

:::rationale{title="Why tie this to the Exit & Separation Protocol?"}
Exit rules live in Layer 1 for a reason — they govern who is and is not a member. If accountability actions created their own parallel exit path, there would be two sets of rules, two sets of records, and a loophole for skipping due process. One canonical exit protocol closes that gap.
:::

All forced exits and temporary access restrictions must follow the Exit & Separation Protocol (Layer 1). A temporary access restriction does not constitute exit and does not trigger the 6-month re-application block unless a forced exit is subsequently voted by Full Members.

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Strategic
- **Version:** <version>
- **Decision record:** <link to decision record>
