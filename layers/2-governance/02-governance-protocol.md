# Governance Protocol

- **Layer:** 2 — Governance & Decision Logic
- **Status:** Stub — not yet adopted
- **RCOS reference:** §4.5, §4.6, §4.7

> Defines the full lifecycle of a collective decision — from proposal submission to documentation and appeal.

---

## Proposal Submission

:::rcos{clauses="4.5.1, 4.5.2"}
:::

:::rationale{title="Why formalize how proposals enter the system?"}
A decision process that accepts proposals informally — a message, a verbal suggestion, a founder's idea — has no reliable way to tell what is actually on the table. Requiring a standard submission format, filing location, and mandatory content fields means every proposal arrives with the same information, visible to everyone, traceable from day one.
:::

- **Operational decisions** do not require a proposal — the relevant operational role holder executes within delegated limits per the Role Registry (Layer 5)
- **Strategic and Constitutional decisions:** Any Full Member may submit a proposal directly on ecohubsOS using the predefined proposal template (see [Missing Technical Implementations](../../resources/missing-technical-implementations.md))
- Every proposal must include: summary of the change, affected layers and artifacts, decision type, rationale, risks and mitigations, rollback plan, and proposed effective date
- Decision type must be declared in the proposal; if unclear, defaults to the higher-impact type
- **Withdrawal:** A proposer may withdraw their proposal at any point before the ecohubsOS vote opens by notifying the community via Discord or forum. Once the vote has opened, withdrawal is not possible.

## Review and Deliberation

:::rcos{clauses="4.5.1, 4.5.2"}
:::

:::rationale{title="Why enforce a minimum deliberation window?"}
Rushed votes favor whoever is already paying attention and disadvantage everyone else. A mandatory deliberation period, tied to the weight of the decision, gives members time to read, respond, and surface concerns before the vote opens — so the vote reflects considered judgment, not speed of reaction.
:::

- Deliberation happens in the community Discord ("#💬-discussions" channel) before and during the ecohubsOS vote window
- **Minimum deliberation period before a vote opens:**
  - Strategic: 5 days
  - Constitutional: 15 days
- Members are encouraged to raise concerns during deliberation to avoid the need for re-votes after the fact

## Decision Execution

:::rcos{clauses="4.5.1, 4.5.4"}
:::

:::rationale{title="Why tie execution to the record?"}
A passed proposal that never reaches the affected artifact is a decision in name only — the rules on the ground still say what they said before. Binding execution to a concrete artifact update and version-history entry closes the gap between what was decided and what is actually in force.
:::

- On **passing:** the proposer or Membership Admin adds the proposal file to `proposals/passed/` in this repository and applies the change to the affected artifact(s) in `layers/`; `layers/6-evolution/02-version-history.md` is updated
- On **rejection:** the proposal file is added to `proposals/rejected/` for archive
- Artifact updates must reflect the adopted decision accurately and completely

## Documentation and Publication

:::rcos{clauses="4.5.4"}
:::

:::rationale{title="Why document every outcome, including rejections?"}
Keeping a record of only the decisions that passed erases the reasoning history — members lose track of what was already considered and rejected, and the same debates get re-litigated indefinitely. Archiving both passed and rejected proposals, with a time bound and a verifiable decision record, preserves institutional memory and makes the governance system auditable.
:::

- All passed and rejected proposals are filed in this repository within 7 days of the vote closing
- The ecohubsOS vote link is included in the proposal file as the decision record
- Version history is updated with every passed proposal

## Appeal and Review

:::rcos{clauses="4.5.2, 4.6.2"}
:::

:::rationale{title="Why make re-votes possible but bounded?"}
A governance system with no appeal route hardens mistakes into permanent rules; one with unlimited informal appeal paths never settles anything. Allowing any Full Member to trigger a re-vote — but only with a written, reasoned objection raising something not already addressed — keeps the system self-correcting without turning every decision into a standing referendum.
:::

- Any Full Member may trigger a re-vote on any passed decision by submitting a written, reasoned objection via the community forum or Discord
- The objection must raise a consideration that was not addressed during deliberation
- A re-vote is held using the same ecohubsOS mechanism and threshold as the original decision
- There is no limit on how many times a decision can be re-voted, but repeated frivolous re-vote requests may themselves be subject to a governance review

## Conflict Between Decisions

:::rcos{clauses="4.5.3"}
:::

:::rationale{title="Why predefine conflict resolution?"}
When two decisions point in different directions, someone has to choose which one counts — and if that choice is made ad hoc, it reduces to whoever has the authority or energy to enforce their reading. A fixed precedence rule (higher type wins; more recent wins at the same type) resolves conflicts mechanically, without a judgment call.
:::

- If two decisions conflict, the higher-impact decision type prevails (Constitutional > Strategic > Operational)
- If two decisions of the same type conflict, the more recent decision prevails unless the earlier decision explicitly locked future changes
- Conflicts must be surfaced via the community forum; resolution follows the standard proposal process

## Safeguards and Failure Modes

:::rcos{clauses="4.6.1, 4.6.2, 4.6.3"}
:::

:::rationale{title="Why plan for governance failure up front?"}
Every governance system fails somewhere — captured by a subgroup, frozen by informal vetoes, drifted by a role holder who quietly expanded their remit. Naming the specific failure modes in advance, wiring in challenge routes that cannot be retaliated against, and requiring a formal review when failures accumulate, is what keeps governance from slowly hollowing out while no one is watching.
:::

- **Power concentration:** All decisions above Operational level require a Full Member vote; no individual or role has unilateral authority beyond the delegated operational role limits defined in the Role Registry (Layer 5)
- **Informal vetoes:** Only written, reasoned objections submitted via the defined process may trigger a re-vote; social pressure or private objections have no governance weight
- **Decision capture:** ecohubsOS voting is open to all Full Members simultaneously; no quorum requirement beyond votes cast (any participation level is valid)
- **Founder/role entrenchment:** No role grants permanent authority; all roles are defined in the Role Registry with explicit terms and removal processes; founders hold no special governance authority beyond their membership state
- **Challenge without retaliation:** Any member raising a re-vote request or governance concern is protected by the anti-retaliation provisions in Layer 4
- **Persistent failure trigger:** Three or more governance failures within a 6-month period (decisions made outside the matrix, re-votes triggered by process failures, blocked escalations) must trigger a Constitutional review of the governance system

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Constitutional
- **Version:** <version>
- **Decision record:** <link to decision record>
