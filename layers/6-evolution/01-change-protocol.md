# Change Protocol

- **Layer:** 6 — Evolution & Adaptation
- **Status:** Stub — not yet adopted
- **RCOS reference:** §8.1, §8.5, §8.6

---

## How Changes Are Proposed

:::rcos{clauses="8.1.1, 8.1.3, 8.6.3, 8.8.1"}
:::

:::rationale{title="Why require a structured proposal?"}
A change that arrives as a vague idea in chat cannot be evaluated, challenged, or rolled back later. Forcing every proposal through the same minimum shape — affected artifacts, rationale, risks, rollback — turns an opinion into a reviewable artifact and makes it impossible to slip a rule change past the community by accident.
:::

Any Full Member may propose a change to any RCOS artifact. Proposals are submitted via the ecohubsOS voting app first (per the Governance Protocol, Layer 2) — not as repository PRs. After the vote concludes, the Membership Admin adds the proposal file to the repository. Every proposal must include:

- Summary of the change
- Affected layers and artifacts (with links)
- Decision type (Operational / Strategic / Constitutional)
- Rationale
- Risks and mitigations
- Rollback plan
- Proposed effective date

## How Proposals Are Classified

:::rcos{clauses="8.1.2, 8.1.4"}
:::

:::rationale{title="Why classify by impact?"}
Not every change deserves the same friction. Typo fixes should not need a supermajority; constitutional shifts should not pass quietly. Mapping proposals to decision types — and defaulting unclear cases upward — makes the cost of a change proportional to its blast radius and protects Layer 0 from being eroded through small moves.
:::

- **Operational:** wording corrections, formatting, and minor content updates to artifacts — no vote required; executed by Membership Admin within delegated limits
- **Strategic:** changes to Layer 1–5 content that affect member rights, processes, or structures
- **Constitutional:** changes to Layer 0 (purpose, scope, invariants, or identity constraints) or to the governance system itself (Layer 2)

> If classification is unclear, it defaults to the higher-impact type.

## Review and Deliberation

:::rcos{clauses="8.1.2, 8.7.1"}
:::

:::rationale{title="Why enforce minimum deliberation windows?"}
Without a floor on deliberation time, any change can be rushed through on a slow day when few members are paying attention. Mandatory minimums — longer for higher-impact changes — guarantee that members who are travelling, ill, or simply busy still get a real chance to read, object, or show up.
:::

- **Operational:** no deliberation required
- **Strategic:** minimum 5-day deliberation period; deliberation happens in Discord or forum; a Governance meeting may be called per the meeting template (Layer 5)
- **Constitutional:** minimum 15-day deliberation period; deliberation in Discord and forum; a Governance meeting is strongly recommended; 30-day ratification period after the vote passes

## Adoption and Publication

:::rcos{clauses="8.2.1, 8.2.2, 8.2.5, 8.6.3"}
:::

:::rationale{title="Why fixed publication steps?"}
A vote that passes but is never written down is the same as no vote at all — and worse, it creates a gap where whoever remembers the outcome gets to define it. Tight, ordered publication steps close that gap and make "what was adopted" a matter of record, not of memory.
:::

When a proposal passes:
1. Membership Admin adds the proposal file to `proposals/passed/` within 7 days
2. Affected artifacts in `layers/` are updated within 7 days
3. `layers/6-evolution/02-version-history.md` is updated to record the change
4. Status fields in affected artifacts are updated from *Stub — not yet adopted* to *Active — adopted <YYYY-MM-DD>*

## Version Numbering

:::rcos{clauses="8.2.1, 8.2.3"}
:::

:::rationale{title="Why tie the major version to compliance, not to decision weight?"}
A version number is a claim about the state of the system, not a tally of how much governance activity has happened. If every constitutional decision bumped the major version, EcoHubs would reach v4.0 while still failing the standard it claims to implement — the number would signal maturity the artifacts do not have. Reserving v1.0 for the moment RCOS-Core compliance is actually achieved makes the version honest: anyone can read it as "this implementation is complete" or "this implementation is still being assembled", without cross-checking the compliance checklist.
:::

Each adopted change increments the version recorded in the Version History. The MAJOR version tracks RCOS-Core compliance, not the weight of any single decision.

**While on 0.x — not yet RCOS-Core compliant:**

| Change type | Increment | Example |
|---|---|---|
| Constitutional | MINOR | v0.3 → v0.4 |
| Strategic | MINOR | v0.4 → v0.5 |
| Operational | PATCH | v0.4 → v0.4.1 |

The adoption that achieves RCOS-Core compliance — every mandatory artifact adopted and every open content gap in `compliance/checklist.md` closed — is recorded as **v1.0**.

**From v1.0 onward:**

| Change type | Increment | Example |
|---|---|---|
| Constitutional | MAJOR | v1.2 → v2.0 |
| Strategic | MINOR | v1.2 → v1.3 |
| Operational | PATCH | v1.2 → v1.2.1 |

Version numbers are not skipped or reserved. A rejected proposal consumes no version.

## Rejection

:::rcos{clauses="8.2.2, 8.2.4"}
:::

:::rationale{title="Why archive rejected proposals?"}
Rejected ideas carry as much signal as accepted ones — they show what the community considered and declined. Keeping rejections filed and accessible prevents the same proposal from reappearing under a new name every six months and gives future members a view of the paths not taken.
:::

When a proposal is rejected:
1. Membership Admin adds the proposal file to `proposals/rejected/` within 7 days
2. No artifact changes are made
3. The re-vote mechanism applies if new information emerges (per the Decision Matrix, Layer 2)

## Transition and Migration

:::rcos{clauses="8.5.1, 8.5.2"}
:::

:::rationale{title="Why protect existing rights during transitions?"}
If new rules could silently rewrite existing agreements, membership would be meaningless — what you signed up for could be changed out from under you. Explicit transition rules guarantee that rights are not reduced retroactively and that people operating under the old rules are given time and notice before the ground shifts.
:::

When a rule change affects existing roles, agreements, or records:
- Existing role holders are notified of any changes to their scope before the change takes effect
- Existing members' rights may not be reduced without their consent or a Constitutional vote
- Records that predate the change are not retroactively altered unless explicitly part of the proposal
- A transition period may be defined in the proposal itself

## Rollback

:::rcos{clauses="8.1.5, 8.5.1"}
:::

:::rationale{title="Why make rollback symmetrical with adoption?"}
A change that cannot be undone through the same path that created it is a trap. Requiring rollback to use the original decision type keeps the door open for correction without letting a single member quietly reverse a community-level decision by calling it a "fix."
:::

Any passed decision can be reversed through the same process as the original decision. Any Full Member may trigger a re-vote by submitting a written reasoned objection that was not considered during the original deliberation (per the Decision Matrix, Layer 2). Rollback uses the same decision type as the original decision.

## Emergency Changes

:::rcos{clauses="8.5.3"}
:::

:::rationale{title="Why allow emergency changes at all?"}
Some harms unfold faster than a vote can be convened. A narrow, well-guarded emergency path lets the community respond to genuine safety or platform failures without handing anyone a general-purpose override. The mandatory report, review, and ratification-or-rollback cycle is what keeps emergency powers from becoming ordinary powers.
:::

An emergency operational change may be made by Membership Admin only if all of the following conditions are met:

1. Immediate action is required to prevent safety harm or platform failure
2. A Full Member vote cannot be convened in time
3. The change does not override a Layer 0 invariant

Emergency changes must be:
- Reported to all Full Members within 48 hours
- Reviewed at the next community meeting
- Ratified via the appropriate decision type within 30 days, or automatically rolled back

## Experiments

:::rcos{clauses="8.3.1, 8.3.2, 8.3.3, 8.3.4, 8.3.5, 8.7.3"}
:::

:::rationale{title="Why treat experiments as a distinct mechanism?"}
The community needs a way to try new things without having to permanently adopt them to test them. Experiments create that space — but only if they are time-bounded, labeled, and auto-expiring. Without those guardrails, an "experiment" becomes the fastest way to install a permanent rule with no real deliberation.
:::

Any Full Member may propose a time-bounded experiment via Strategic decision. Every experiment must define:
- Scope (what is being tried and what it affects)
- Duration (maximum 90 days)
- Review checkpoints within the experiment duration (at minimum one midpoint check-in)
- Success and failure criteria
- Rollback conditions and rollback process
- Authorized decision path for starting, extending, modifying, or terminating the experiment

Experiments expire automatically at the end of their defined duration unless explicitly renewed via a new proposal. Renewal requires a new Strategic vote. Results and learnings are recorded in the Learning Log (`layers/6-evolution/03-learning-log.md`).

All artifacts affected by an experiment MUST be explicitly labeled as experimental for the duration.

**Safety suspension:** If an experiment introduces a credible safety risk, coercion, or sustained harm, the Membership Admin may suspend the experiment immediately as an emergency protective action. The suspension must be reported to all Full Members within 48 hours and reviewed at the next community meeting. Post-hoc ratification or rollback follows the emergency change process above.

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Constitutional
- **Version:** <version>
- **Decision record:** <link to decision record>
