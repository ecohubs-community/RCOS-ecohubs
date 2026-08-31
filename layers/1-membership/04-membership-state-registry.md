# Membership State Registry

- **Layer:** 1 — Membership System
- **Status:** Stub — not yet adopted
- **RCOS reference:** §3.1, §3.7, §3.8

---

## Defined Membership States

:::rcos{clauses="3.1.1, 3.1.2, 3.1.3, 3.1.4, 3.1.5, 3.7.1"}
:::

:::rationale{title="Why a single table of states?"}
Rights and obligations scattered across documents drift apart. Collecting every state, its rights, its obligations, and its transitions into one table makes the membership system auditable at a glance — you can see every door into and out of the community, and what each one grants. If two documents ever disagree, this registry is the tiebreaker.
:::

| State | Rights | Obligations | Entry condition | Exit condition |
|---|---|---|---|---|
| Applicant | Access to public EcoHubs information and the application process; access to public Discord channels; may join public calls as listener and request permission to speak; right to a decision within the defined application vote period; right to withdraw at any time | Honest and complete application submission | Completed application submitted via ecohubs.community; no prior forced exit, rejection, or incomplete-onboarding exit within the last 6 months (see Onboarding Protocol) | Application approved by ecohubsOS vote → Trial Member; application rejected or withdrawn → no membership state is granted (the application record is retained and the 6-month re-application block applies to a rejection) |
| Trial Member | Access to ecohubsOS; member-only Discord channels; newsletter; may claim and create tasks in Puckstack; may earn XP and ECO; read-only access to the Voting app (may watch decisions, may not vote or propose); buddy call with an assigned buddy; right to exit at any time; right to due process before any forced exit or suspension | Complete all onboarding steps within the onboarding window (see Onboarding Protocol); contribute and participate until Level 1 is reached — working on tasks, joining meetings, taking part in Discord discussions; adhere to all Layer 0 identity constraints and invariants | Application approved by ecohubsOS vote | Reaching Offcoin Level 1 → Full Member (automatic); onboarding window expires without completion → exit (see Onboarding Protocol); 3 months without recorded participation → Standby Member (steward-confirmed); maximum trial duration reached without Level 1 → extension or exit (see Onboarding Protocol); voluntary exit → Exited Member; disciplinary case opened → Standby Member pending the community decision |
| Full Member | Voting rights per the Decision Matrix; may create Operational proposals; full access to ecohubsOS; access to all member-only Discord channels and speaking rights in calls; may earn XP/ECO and claim tasks; may hold roles (defined in Layer 5); access to all community artifacts and records; may request access to blog writing, newsletter writing, social media posting, and blueprint administration; may host buddy calls with Trial Members; may request Steward status on reaching Level 3; right to propose changes via the governance process; right to raise a conflict without retaliation; right to request Standby; right to exit at any time; right to due process before any forced exit, suspension, or access restriction | Meet minimum participation expectations (see Membership Agreement); adhere to all Layer 0 identity constraints and invariants; contribute in at least one recognized category; participate in conflict resolution processes when required; do not exercise authority beyond what is explicitly assigned | Reaching Offcoin Level 1 as a Trial Member (applied automatically on the Offcoin level-up event) | Voluntary exit → Exited Member; Standby upon request → Standby Member; 6 months without recorded participation → Standby Member (steward-confirmed); disciplinary case opened → Standby Member pending the community decision; forced exit via Layer 4 due process → Exited Member |
| Standby Member | Gated ecohubsOS access limited to the reactivation screen; right to submit a reactivation request with a reason, decided by a community vote; access to public Discord channels and public calls as listener; retention of contribution history and balances; right to be informed in writing of the reason for standby; right to exit at any time; right to due process before any forced exit | None while on standby, other than adherence to the Layer 0 identity constraints when interacting in public channels | Own request (Trial or Full Member); steward-confirmed after the inactivity threshold for the member's state; automatic protective suspension when a steward opens a disciplinary case (see Exit & Separation Protocol) | Reactivation approved by community vote → returns to the state held before standby; voluntary exit → Exited Member; disciplinary case decided against the member → Exited Member; 12 months on standby → exit proposed to a steward → Exited Member |
| Exited Member | Access to public Discord channels and public calls (listener); may request permission to speak in public calls; may re-apply as an Applicant subject to any re-application block; right to have the recorded exit reason disclosed to them | None; must not misrepresent former membership status; adhere to Layer 0 identity constraints when interacting in public channels | Exit process completed — voluntary, following an expired onboarding or standby period, or by a community decision under Layer 4 | May re-enter as an Applicant through a new application; re-entry begins at Trial Member with XP and ECO balances reset to zero |

> No individual may hold multiple membership states simultaneously.  
> No rights or obligations may be assumed outside of the individual's current membership state.

## Roles Layered on Membership State

:::rcos{clauses="3.1.4, 3.1.5"}
:::

:::rationale{title="Why roles are not membership states"}
Steward and Admin change what a person is authorized to do, not what they are as a member. Keeping them out of the state column is what makes "no individual may hold multiple membership states simultaneously" true rather than aspirational: a Steward is a Full Member holding a role, and losing the role leaves an ordinary Full Member behind rather than an undefined status. It also keeps authority where RCOS puts it — assigned, scoped, and revocable through Layers 2 and 5.
:::

Steward and Admin are **roles held on top of Full Member state**, not separate membership states. They are defined and revoked through the Role Registry (Layer 5) and the Authority Registry (Layer 2). The additional rights they carry are delegated authority, explicitly assigned — not rights assumed outside the holder's membership state.

| Role | Additional rights | Additional obligations | Entry condition | Exit condition |
|---|---|---|---|---|
| Steward | May create Strategic and Constitutional proposals; access to the Member Onboarding app; may grant XP and ECO rewards within the defined caps; may open a disciplinary case (which suspends the member pending a community decision); may hold advisory meetings | Regular contribution and participation; bring proposals to a vote; act within the scope defined in the Role Registry | Reaching Level 3 makes a Full Member eligible to **request** Steward; granting is never automatic and requires approval | Returns to Full Member upon request or on removal of the role; Standby or exit as for any Full Member |
| Admin | Full access to administrative apps; may grant rewards; may create any proposal type; manages platform and identity administration | Regular contribution and participation; bring proposals to a vote; act within the scope defined in the Role Registry | Holding the Steward role and completing a technical knowledge-transfer session with an existing Admin; granted out of band, never automatically | Returns to Steward or Full Member upon request or on removal of the role; Standby or exit as for any Full Member |

## Technical Notes

:::rationale{title="Why record what the system actually does?"}
An artifact that describes a system the software does not implement is worse than no artifact — it tells members they have protections and guarantees that nothing enforces. These notes record what ecohubsOS actually does today, so the gap between the written rule and the running system is visible rather than assumed away.
:::

**How state is represented.** ecohubsOS holds one membership status per member — `active`, `standby`, or `exited` — combined with an identity-provider role group. Trial Member is the *absence* of a role group, so role and status can never contradict each other. Where a member holds several groups, the highest wins. Status is evaluated before role, so an exited member whose groups were removed cannot fall back to Trial Member access.

**Promotion is automatic; demotion is not.** Reaching Level 1 grants the Member group automatically on the Offcoin level-up event. Every downgrade — Trial or Full Member to Standby, Standby to Exited — is raised as a review for a steward to decide and apply. No timer changes a membership on its own.

**Participation signals.** Participation is recorded from: sign-in, onboarding steps, XP earned, Puckstack activity, votes cast, proposals authored, buddy calls, and manual entries logged by a steward. Contribution that the system cannot observe — meeting attendance, Discord discussion, work done outside Puckstack — counts toward participation only when a steward logs it or it results in an XP award.

**Exit is implemented.** `executeExit` is the single offboarding path, triggered by a steward resolving a membership review or by a community decision on a disciplinary case. It sets the membership status to `exited`, removes all role groups and deactivates the identity-provider account, revokes active sessions, unsubscribes the member from the newsletter, removes the Discord member role, and removes the member from the public listing. Each external step is best-effort and reported back to the acting steward, so an incomplete revocation is visible rather than silent.

**What is retained, and what is not.** Governance and contribution *history* is retained: the membership event log, reward grants with the granting steward and reason, proposals and votes, the onboarding completion record, and task history in Puckstack. **XP and ECO balances are not retained** — the member's Offcoin record is deleted on exit, so a returning member re-enters at Trial Member with zero balances, consistent with re-application being a new entry rather than a resumption.

**Live state assignments.** This document defines what the states mean; ecohubsOS holds who is in which state today. The definitions stay stable and governable while the assignments change as people join, pause, and leave.

**Not yet implemented.** Standby upon a member's own request, a self-service exit request, and the onboarding-window expiry actions are not yet available in ecohubsOS — see [missing-technical-implementations.md](../../resources/missing-technical-implementations.md).

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Strategic
- **Version:** <version>
- **Decision record:** <link to decision record>
