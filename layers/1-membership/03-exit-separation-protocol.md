# Exit & Separation Protocol

- **Layer:** 1 — Membership System
- **Status:** Stub — not yet adopted
- **RCOS reference:** §3.6, §3.7, §3.8

---

## Voluntary Exit

:::rcos{clauses="3.6.1, 3.6.2, 3.6.4"}
:::

:::rationale{title="Why make leaving frictionless?"}
A community that is hard to leave is not a community — it is a trap. Voluntary exit must be available at all times, without interrogation, notice periods, or punishment, because the right to withdraw consent is what makes every other act of consent real. Retaining contribution history separately ensures that leaving does not erase the work the person did.
:::

- Any Trial Member, Full Member, or Standby Member may exit at any time (reason optional)
- Exit may be requested through ecohubsOS or by email to a steward or admin; a self-service exit form in ecohubsOS is not yet implemented — see [missing-technical-implementations.md](../../resources/missing-technical-implementations.md)
- No notice period required; if the member holds a role, they are asked to consider a handover where appropriate
- Access is revoked within 24 hours of admin confirmation
- Contribution and governance history is retained; XP and ECO balances are cleared — see Records Retained on Exit below
- Membership state transitions to Exited Member
- Exit is recorded in ecohubsOS with a timestamp and the recorded reason, which the member may request

## Forced Exit

:::rcos{clauses="3.6.3, 3.6.4"}
:::

:::rationale{title="Why gate removal behind Layer 4?"}
Removal is the sharpest power the community holds over a person. If it can be exercised by anyone with enough social pull, membership is worthless. Requiring a concluded Layer 4 accountability decision — with written reasons, a notification, and a minimum re-application window — turns removal from an act of power into an act of governance that can be reviewed and contested.
:::

- Forced exit may only result from a concluded Layer 4 accountability process with a documented decision
- The decision is taken by Full Members as a Strategic decision per the Decision Matrix (Layer 2); no steward, admin, or role holder may remove a member unilaterally
- The case is put to the community as a written summary prepared by the steward who opened it. Detailed evidence, statements, and the identity of anyone harmed remain with the stewards and are not disclosed to voters — the confidentiality boundaries in the Conflict Resolution Ladder apply
- The affected member must be notified in writing with the reason and decision record reference before access is revoked
- Access is revoked within 24 hours of the decision being finalised
- Accounts on platforms related to ecohubsOS (Discord, Notion, Puckstack, etc.) may be deleted or blocked depending on the severity of the decision and platform capabilities
- Contribution and governance history is retained; XP and ECO balances are cleared — see Records Retained on Exit below
- Membership state transitions to Exited Member
- The member may not reapply for a period defined in the accountability decision (minimum 6 months)
- The decision record is retained permanently; access to it is governed by the privacy rules in the Conflict Resolution Ladder

## Suspension (Standby)

:::rcos{clauses="3.7.1, 3.7.2, 3.7.3"}
:::

:::rationale{title="Why suspension needs bounds before it needs uses?"}
A suspension state without limits becomes a soft exit with none of the due process a real removal requires — someone loses their rights and nobody ever has to decide anything. Bounding it in three directions closes that: a protective suspension expires unless the community acts, a paused membership expires unless the member returns, and only a Full Member vote can turn either into a removal. That is what separates protecting the community from quietly disposing of a person.
:::

The community's temporary status under §3.7 is **Standby**. A Standby Member holds the rights and obligations set out in the Membership State Registry. Standby is entered in three ways:

**1. Standby upon request.** A Trial or Full Member may ask to pause their membership — illness, life events, capacity — for a defined period of up to 12 months. The pause is granted by a steward and requires no justification beyond the request. *Not yet implemented in ecohubsOS: currently requested by email or Discord and applied by a steward.*

**2. Standby after inactivity.** Where recorded participation lapses beyond the threshold for the member's state — 3 months for a Trial Member, 6 months for a Full Member — the transition to Standby is proposed to a steward with the elapsed time and the threshold as evidence. Warnings are drafted to the member 14 and 7 days before the threshold. **No timer moves a member to Standby automatically**; a steward reviews and applies each one, and may dismiss it, in which case the timer keeps running and a fresh review appears later.

**3. Protective suspension pending a community decision.** Only a steward or admin may open a disciplinary case. Opening one moves the member to Standby immediately and opens the removal decision to the community in the same act — the suspension never exists without a route out of it. This is protective and reversible; it is not the removal.

### Bounds and review

- **A protective suspension is bounded by the decision it accompanies.** It ends when the vote closes: a decision against removal restores the member to the state they held before the suspension, automatically and without a further request
- **An inconclusive decision must not become a holding pen.** Where the vote is inconclusive — including where nobody votes — the member remains suspended and the case passes to steward review, which must be concluded within 14 days. If it is not, the suspension lapses and the member is restored to their previous state. Silence must never remove anyone, and it must never suspend anyone indefinitely either
- **A steward who opened a case in error may withdraw it at any time**, which restores the member's previous state and withdraws the vote
- **A case may not be reopened on the same facts.** Successive suspensions must not be used to extend a suspension past its bound or to substitute for a removal decision the community declined to make
- **Maximum time on Standby is 12 months**, whichever route was taken to get there. At that point an exit is proposed to a steward for decision; it is not applied automatically
- **A member may not be suspended and left without recourse:** every Standby Member is told in writing why they are on standby, and every Standby Member other than one under an open case may request reactivation

### Reactivation

- A Standby Member signing in reaches a reactivation screen rather than the desktop, and may submit a request with a reason
- The request is decided by a vote of active members (Operational threshold — 3-day vote window, simple majority — per the Decision Matrix, the same threshold used for membership admission)
- An approved request restores the state held before standby. A rejected request may be resubmitted after 30 days
- Where nobody votes, the request is routed to steward review rather than refused — an absence of votes is not a decision about a person
- The member cannot vote on their own reactivation, and the reasons given by voters are not disclosed to them
- A member under an open disciplinary case cannot request reactivation; the community is already deciding

## Asset, Role, and Responsibility Separation

:::rcos{clauses="3.6.5"}
:::

:::rationale{title="Why enumerate separation steps?"}
When someone leaves, every unclosed thread — a role nobody vacated, a wallet key still active, a task still assigned — becomes a live attack surface or an operational gap. A checklist forces these threads to be closed deliberately, not discovered months later when something breaks or someone abuses access they no longer should have.
:::

The following separation steps apply to both voluntary and forced exits:

- Any roles held must be vacated and documented in the Role Registry
- Ongoing tasks claimed in Puckstack must be released or handed over
- Safe wallet co-signer or Proposer status must be removed
- All administrative access to platforms (ecohubsOS, Discord, social media, Notion, Puckstack, etc.) must be revoked
- Outstanding obligations (incomplete tasks, financial commitments) must be resolved or transferred before exit is finalised where possible

ecohubsOS performs the following automatically on exit: membership status set to Exited, all role groups removed, the identity-provider account deactivated, active sessions revoked, newsletter unsubscribed, Discord member role removed, and the member removed from the public listing. Each step is reported to the acting steward so an incomplete revocation is visible and can be completed by hand.

## Records Retained on Exit

:::rcos{clauses="3.6.4"}
:::

:::rationale{title="Why keep the history but not the balance?"}
The community's record of what happened belongs to the community — decisions, votes, and who did what have to survive any individual's departure or the audit trail becomes unreliable. A balance is a different thing: it is a live claim on standing inside the community, and carrying it across a departure would mean a returning member re-enters partway up a ladder they left. History is evidence; balance is position.
:::

**Retained:** the membership event log (every state change, with reason and acting steward), reward grants with the granting steward and reason, proposals and votes, the onboarding completion record including the artifact versions consented to, decision records from any Layer 4 process, and task history in Puckstack.

**Cleared:** XP and ECO balances. The member's Offcoin record is deleted on exit, so a person who re-applies re-enters as a Trial Member at zero. Re-entry is a new membership, not a resumption of the previous one.

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Strategic
- **Version:** <version>
- **Decision record:** <link to decision record>
