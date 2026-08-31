# Missing Technical Implementations

Features and flows required for full RCOS compliance that are not yet implemented in ecohubsOS or related platforms. Each item references the artifact that requires it.

**Owner:** Infrastructure Steward / Digital Builder  
**Review cadence:** Quarterly

---

## 8. Proposal template (ecohubsOS voting app)

**Required by:** Layer 2 — Governance Protocol (Proposal Submission)  
**Priority:** High

A predefined proposal template must be available in the ecohubsOS voting app so all Strategic and Constitutional proposals follow a consistent, auditable format. The template must include fields for:
- Summary of the change
- Affected layers and artifacts (with links to this repository)
- Decision type (Strategic / Constitutional)
- Rationale
- Risks and mitigations
- Rollback plan
- Proposed effective date

---

## 7. Voluntary exit request flow in ecohubsOS

**Required by:** Layer 1 — Exit & Separation Protocol (Voluntary Exit)  
**Priority:** High

Offboarding itself is implemented (`executeExit`), but only stewards and admins can trigger it. A member has no self-service route to request their own exit. Required:
- Exit request form with an optional reason field
- A message asking the member to consider doing a handover if they hold any roles
- On submission: notify admin via email with member name, reason (if provided), and any roles held
- Admin panel: show a confirm-exit button for the admin to finalise the exit within 24 hours
- On confirmation: run the existing exit service, transition state to Exited Member, send exit confirmation email to the member

---

## 2. Artifact links in onboarding flow

**Required by:** Layer 1 — Onboarding Protocol (Step 1)  
**Priority:** High

The onboarding flow in ecohubsOS must include direct links to all Layer 0–6 artifacts so members can review them before consenting. Currently no such links exist in the onboarding UI.

Required: add links to the RCOS artifact repository (this repo) at the start of the onboarding flow, with a checklist confirming the member has reviewed them.

---

## 4. Onboarding reminder emails and expiry notifications

**Required by:** Layer 1 — Onboarding Protocol (Trial and Evaluation)  
**Priority:** High

The following automated emails must be sent during the onboarding window:
- **Day 7:** Reminder that onboarding is incomplete; link to resume
- **Day 15:** Warning that the grace period has started; member has 15 days remaining before automatic exit; note that failure to complete results in a 6-month re-application block
- **Day 30:** Exit triggered — notification sent to the member explaining the exit reason and the 6-month re-application block

---

## 5. 6-month re-application block after rejection or incomplete onboarding exit

**Required by:** Layer 1 — Onboarding Protocol (Admission Criteria, Trial and Evaluation)  
**Priority:** High

Members who are rejected via an ecohubsOS vote or exited due to incomplete onboarding must be blocked from re-applying for 6 months. Required:
- Record rejection/exit date and reason in ecohubsOS
- Block re-submission of application form for 6 months from that date
- Display a clear message if a blocked applicant attempts to re-apply

---

## 6. Onboarding expiry actions in ecohubsOS admin panel

**Required by:** Layer 1 — Onboarding Protocol (Trial and Evaluation)  
**Priority:** High

At 30 days post-vote-approval with incomplete onboarding, the admin panel must surface:
- A button to trigger immediate member exit
- A button to grant a one-time 30-day extension

---

## 3. Explicit in-app consent to Membership Agreement and Layer 0 identity constraints

**Required by:** Layer 1 — Onboarding Protocol (Step 2), Membership Agreement  
**Priority:** High

The onboarding flow must include an explicit, recorded consent step where the member acknowledges:
- The Membership Agreement (Layer 1)
- The Layer 0 identity constraints and invariants

Currently there is no consent gate in the ecohubsOS onboarding UI. Required: a consent checkbox or confirmation step with a timestamp, linked to the specific artifact versions in force at the time of onboarding.

---

## 9. ECO expiration / decay mechanism

**Required by:** Layer 3 — Internal Economy Protocol (Internal Units, Accumulation Constraints)  
**Priority:** Medium

Consider designing and implementing an expiration or decay mechanism for ECO to prevent passive accumulation by inactive members and keep the unit meaningful as a contribution signal. Design questions to resolve first:
- Should ECO expire after a fixed period (e.g. 12 months of inactivity)?
- Should it decay gradually or expire in full?
- Should expired ECO be redistributed, burned, or simply zeroed?
- Should the mechanism trigger only when ECO has real utility (unlocks, access, etc.)?

This is a design decision before a technical one — open a governance proposal once the future utility of ECO is clearer.

---

## 10. Standby upon a member's own request

**Required by:** Layer 1 — Exit & Separation Protocol (Suspension), Membership Agreement (Extended absence)  
**Priority:** High

A member may pause their membership for up to 12 months. ecohubsOS reaches `standby` only through a steward-resolved inactivity review or a disciplinary case — there is no member-initiated route. Required:
- A "pause my membership" action available to Trial and Full Members, with an optional reason and an intended return date
- Steward confirmation, then the existing standby status and reactivation flow apply unchanged
- Contribution expectations paused for the duration; the 12-month standby cap continues to run

---

## 11. Removal vote must use the Strategic decision threshold

**Required by:** Layer 1 — Exit & Separation Protocol (Forced Exit); Layer 2 — Decision Matrix  
**Priority:** High

The Decision Matrix classifies membership forced exit as a **Strategic** decision: minimum 5-day deliberation period, 7-day vote window, simple majority. The disciplinary case flow in ecohubsOS currently creates the removal proposal with the **Operational** configuration (3-day vote, no deliberation period), which is the correct threshold for membership admission and reactivation but not for ending a membership.

Required: case proposals must be created with the Strategic decision type. Reactivation proposals correctly stay Operational.

**Note:** this is a governance decision as much as a technical one — either the implementation moves to Strategic, or the Decision Matrix is amended. It should not be left divergent.

---

## 12. Steward-review deadline for an inconclusive case

**Required by:** Layer 1 — Exit & Separation Protocol (Suspension — Bounds and review); RCOS §3.7.2  
**Priority:** Medium

Where a removal vote is inconclusive — including where nobody votes — the case moves to `needs_review` and the member stays suspended. Nothing currently bounds how long that lasts, which leaves a suspension that is neither time-bounded nor self-resolving.

Required: a 14-day deadline on `needs_review` cases, surfaced to stewards as it approaches, after which the suspension lapses and the member is restored to their previous state.

---

## 13. Maximum trial duration review

**Required by:** Layer 1 — Onboarding Protocol (Trial and Evaluation); RCOS §3.3.2, §3.3.4  
**Priority:** Medium

The trial state ends on reaching Level 1, with no upper bound in the implementation. The Onboarding Protocol sets a maximum trial duration of 12 months, extendable once by 6 months, after which exit is initiated.

Required: a review raised to the Membership Admin at 12 months of Trial Member state, with an extend action and an exit action — following the same "propose to a human, never auto-execute" pattern as the inactivity timers.

---

## Resolved

### 1. Member exit flow in ecohubsOS — resolved 2026-08-31

**Was required by:** Layer 1 — Exit & Separation Protocol, Membership State Registry

Implemented as `executeExit`, the single offboarding path, triggered by a steward resolving a membership review or by a community decision on a disciplinary case. It sets the membership status to Exited, removes all role groups, deactivates the identity-provider account, revokes active sessions, unsubscribes the member from the newsletter, removes the Discord member role, removes the member from the public listing, and deletes the Offcoin member record so a returning member re-enters at zero. Each external step is best-effort and reported to the acting steward.

Member-initiated exit requests remain open — see item 7.
