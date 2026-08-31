# Onboarding Protocol

- **Layer:** 1 — Membership System
- **Status:** Stub — not yet adopted
- **RCOS reference:** §3.2, §3.3, §3.8

---

## Admission Criteria

:::rcos{clauses="3.2.3, 3.2.4"}
:::

:::rationale{title="Why write down who gets in?"}
Admission is the moment a stranger becomes bound by — and protected by — the community's rules. If the criteria are informal, the decision collapses into whoever happens to like the applicant. Written criteria make admission a governance act, not a social favor, and make rejection defensible on grounds the community can point to.
:::

1. _Alignment with the primary purpose and Layer 0 identity constraints_
2. _Willingness to actively contribute in at least one recognized category_
3. _No prior forced exit, rejection, or incomplete-onboarding exit within the last 6 months_
4. _Completion of the application form in good faith — no misrepresentation_

## Commitment Levels

:::rationale{title="Why name the levels people can actually commit to?"}
The failure mode in intentional communities is not people who don't care — it is people who are emotionally interested and operationally unreliable, because the only offer on the table was all of it. Naming the smaller ways of belonging lowers the performance pressure at the door: an applicant can see the whole range before they commit, and a member can say "this month I'm an Explorer, next month I can take tasks" without that being a failure. None of it is a membership state, and that separation is what keeps it honest.
:::

The following levels describe **how much someone is currently able to commit**. They are shown during the application phase and revisited in buddy conversations, so applicants and members can be realistic about their capacity without that being read as a judgment on them.

| Level | Commitment |
|---|---|
| Audience | Reads content |
| Explorer | Joins Discord |
| Participant | Attends calls and events |
| Contributor | Completes tasks |
| Collaborator | Joins working groups |
| Steward | Holds a trusted community role |
| Member | Takes part in governance |

> These levels are **descriptive, self-declared, and confer no rights or obligations**. They are not membership states and never substitute for one. Rights and obligations follow only from the membership state recorded in ecohubsOS, as defined in the Membership State Registry. "Steward" and "Member" appear here as everyday descriptions of the formal role and state defined in that registry — being described as either confers nothing on its own.

## Onboarding Steps

:::rcos{clauses="3.2.1, 3.2.2"}
:::

:::rationale{title="Why make the process a fixed sequence?"}
Consent to governance only means something if the member has actually seen the governance. A fixed sequence — review, consent, technical setup — ensures every member crossed the same threshold in the same order, so nobody slips into rights without having encountered the constraints that come with them.
:::

1. _Review all Layer 0–6 artifacts and this onboarding protocol (link provided in ecohubsOS)_
2. _Explicitly consent to the Membership Agreement and Layer 0 identity constraints (in-app consent)_
3. _Link Offcoin/Puckstack account (contribution tracking and task management)_
4. _Join Discord via ecohubsOS invite displayed in onboarding (unlocks member-only channels and speaking rights in meetings)_
5. _Optionally set up MetaMask wallet and request Safe Proposer status (required only for treasury / on-chain governance — voting itself happens inside ecohubsOS and does not require a wallet)_
6. _Onboarding completion recorded in ecohubsOS — the member holds Trial Member state, with access to ecohubsOS, member-only Discord channels, the newsletter, and Puckstack tasks_

## Initial Membership State

:::rcos{clauses="3.1.2, 3.1.4"}
:::

:::rationale{title="Why assign a state at each step?"}
Between "applicant approved" and "fully integrated" there is a real gap — permissions, access, and expectations all change. Declaring the exact state a new member holds at each step removes ambiguity about what they can do right now, and prevents unintentional grants of rights before the obligations that pay for them have been taken on.
:::

- On vote approval: **Trial Member**
- On reaching Offcoin Level 1: **Full Member** (automatic, applied by ecohubsOS on the level-up event)

Completing the onboarding steps does not by itself grant Full Member state. Onboarding opens the door to participation; **contribution is what carries a member through it.** Level 1 is reached by doing the things a Trial Member is asked to do — working on tasks, joining meetings, taking part in community discussion — so the grant of voting rights and the demonstration of participation are the same event rather than two unconnected ones.

## Trial and Evaluation

:::rcos{clauses="3.3.1, 3.3.2, 3.3.3, 3.3.4"}
:::

:::rationale{title="Why bound the trial period?"}
An unbounded trial is a second-class membership that never ends — all obligations, fewer rights. Fixing the setup window, the criterion for transition, and the outer limit forces a decision point rather than letting someone sit indefinitely in a state that cannot vote. It prevents the trial state from becoming a permanent holding pen, in either direction.
:::

**Onboarding window (technical setup)**

- **Duration:** 30 days total from vote approval — a 15-day initial period to complete all onboarding steps, followed by a 15-day grace period if the initial period expires without completion
- **Grace period:** If onboarding is not completed after 15 days, a 15-day grace period begins and a notification is sent to the member
- **Failure to complete:** After 30 days total without completion, the exit process is triggered
- **Extension:** A Trial Member may request a one-time 30-day extension; available as a manual action in ecohubsOS
- **Re-application block:** Members exited due to incomplete onboarding may not reapply for 6 months

**Trial evaluation (transition to Full Member)**

- **Evaluation criterion:** Reaching Offcoin Level 1 through recognized contribution and participation — working on tasks, joining meetings, taking part in Discord discussions
- **Transition decision:** Automatic on reaching Level 1; no additional vote is required. Promotion is applied by ecohubsOS on the Offcoin level-up event
- **Rights during probation:** As defined for Trial Member in the Membership State Registry — full participation access, read-only access to the Voting app, no voting or proposal rights
- **Inactivity:** 3 months without recorded participation moves a Trial Member to Standby, confirmed by a steward — see the Exit & Separation Protocol
- **Maximum trial duration:** 12 months from admission. A Trial Member who is still participating but has not reached Level 1 within that period is reviewed by the Membership Admin together with the member, who either grants a single 6-month extension or initiates the exit process. The trial state must not persist beyond 18 months in any case

## Completion Record

:::rcos{clauses="3.2.2"}
:::

:::rationale{title="Why keep the record permanent?"}
The completion record is the evidence that a member consented to a specific version of the rules on a specific date. Losing or editing it would make it impossible to answer, months or years later, "what exactly did they agree to?" — which is the only question that matters when a dispute arrives.
:::

Onboarding completion is recorded automatically in ecohubsOS upon completion of all steps, including a timestamp and the artifact versions consented to. This record is permanent and retained even after exit.

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Strategic
- **Version:** <version>
- **Decision record:** <link to decision record>
