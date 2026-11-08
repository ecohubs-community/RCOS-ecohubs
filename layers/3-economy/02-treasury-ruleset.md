# Treasury Ruleset

- **Layer:** 3 — Economic & Resource System
- **Status:** Stub — not yet adopted
- **RCOS reference:** §5.3, §5.5

---

## Treasury Scope

:::rcos{clauses="5.3.1, 5.5.4"}
:::

:::rationale{title="Why draw a hard line around treasury funds?"}
Without an explicit boundary, any money flowing near the community — a founder's personal card, a side account, an informal reimbursement pool — can drift into being treated as community money, with all the obligations that entails. Naming exactly which accounts are treasury and which are not protects both the community and the individuals paying out of pocket.
:::

The shared treasury consists of all funds held in the Safe multi-sig wallet and any additional accounts explicitly declared as community treasury accounts via Strategic decision (e.g. a fiat bank account for grant receipt). Only funds explicitly received in the name of EcoHubs and deposited into a declared treasury account are community funds. Operational costs currently covered personally by the founding member are not treasury funds and carry no community obligation or repayment claim.

> Any new treasury account (fiat or otherwise) must be declared and approved via a Strategic decision before funds are received into it.

## Income Sources

:::rcos{clauses="5.3.2, 5.5.4"}
:::

:::rationale{title="Why route all income through one declared list?"}
Every income source carries strings — reporting requirements, expectations, dependency risks. If income channels can open informally, those strings get attached before the community has had a chance to weigh them. One declared list, changed only through Strategic decisions, keeps the community's obligations under its own control.
:::

All income streams must align with the External Income Interfaces defined in the Internal Economy Protocol. Current income: none — all operational costs are covered personally by the founding member.

Potential future income interfaces: grants and foundations, Web3 ecosystem funding, partnerships, paid services (tooling, onboarding support, educational programs). Any new income interface must be approved via a Strategic decision before funds are received or commitments made.

## Spending Authority

:::rcos{clauses="5.3.3, 5.5.4, 5.7.1"}
:::

:::rationale{title="Why spell out thresholds in a table?"}
When spending authority is vague, two failure modes appear: either every small decision escalates and nothing gets done, or a single steward quietly accumulates discretion no one ever voted to grant them. A table of amounts, decision types, and authorized bodies removes the ambiguity and makes unauthorized spending immediately visible.
:::

| Amount | Decision Type | Authorized Body | Mechanism |
|---:|---|---|---|
| Up to delegated limit (currently €0) | Operational | Finance Steward | Delegated — not currently active |
| Any amount above delegated limit | Strategic | Full Members | ecohubsOS vote |
| Multi-year contracts, debt, or structural financial obligations | Constitutional | Full Members | ecohubsOS vote + supermajority + 30-day ratification |

> Spending thresholds will be defined via a future Strategic proposal once community funds exist. See [Future Proposals](../../resources/future-proposals.md).

## Transparency and Reporting

:::rcos{clauses="5.3.4, 5.3.5, 5.5.4, 5.6.1"}
:::

:::rationale{title="Why make transparency the default, not a feature?"}
Opacity in a treasury compounds: one missing disclosure invites another, and before long members can no longer verify whether the community's money is being handled as they agreed. Making real-time visibility the baseline — and requiring any exception to be named, justified, and time-bounded — keeps audit within reach of every member, not just stewards.
:::

**Safe multi-sig (primary treasury):** All Full Members hold at minimum Proposer access on the Safe, giving them real-time visibility of the balance and transaction history via safe.global at any time. No periodic reporting obligation is required for Safe funds.

**Fiat or other declared accounts:** If the account supports multi-user read access, Full Members must be granted it. If not, Finance Steward publishes a balance and transaction summary to Full Members at least every 6 months.

All spending decisions must reference the linked governance record (ecohubsOS vote or delegated decision log).

## Reserve, Risk, and Debt Constraints

:::rcos{clauses="5.3.6, 5.5.4"}
:::

:::rationale{title="Why block debt and long-term obligations by default?"}
Debt and recurring commitments bind the community beyond the people currently in it — future members inherit the obligations. Forbidding them unless a Strategic vote explicitly authorizes keeps long-term constraints from being entered into casually, and preserves the option to stay lightweight.
:::

- **Debt:** No debt may be incurred without a Strategic vote
- **Long-term obligations:** No recurring costs or contracts may be entered without a Strategic vote
- **Contingency reserve:** A reserve target will be defined via proposal once community funds exist
- **Off-treasury instruments:** No financial instruments (loans, investments, guarantees) may be used without a Strategic vote

## Conflict-of-Interest Rules

:::rcos{clauses="5.4.3, 5.5.4"}
:::

:::rationale{title="Why ban self-approval outright?"}
Even well-intentioned people unconsciously tilt decisions toward their own interests; a rule that requires disclosure and abstention removes the judgment call and the social pressure to "trust someone." Self-approval of spending is the single most common way small governance systems quietly lose integrity, so the rule is stated bluntly.
:::

- A requester may not approve their own spending request
- Any member with a direct financial interest in a spending decision must declare it and abstain from the vote
- Finance Steward may not authorize any treasury spending unilaterally while the delegated limit is €0

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Strategic
- **Version:** <version>
- **Decision record:** <link to decision record>
