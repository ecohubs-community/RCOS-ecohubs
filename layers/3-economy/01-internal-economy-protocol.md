# Internal Economy Protocol

- **Layer:** 3 — Economic & Resource System
- **Status:** Stub — not yet adopted
- **RCOS reference:** §5.1, §5.2, §5.4, §5.5

---

## Commons vs. Private Classification

:::rcos{clauses="5.1.1, 5.1.2, 5.1.3, 5.1.4, 5.1.5, 5.6.2"}
:::

:::rationale{title="Why classify every resource?"}
Unclassified resources are where quiet privatization happens — someone starts treating a shared asset as personal, or a private asset gets quietly absorbed into community obligations, and by the time anyone notices the norm has shifted. Explicit classification, with stewards and transfer rules named up front, makes any change to that status a visible governance act rather than a creeping fact.
:::

| Resource                                          | Classification | Steward                                        | Access rules                                                                | Transfer constraints                                         |
| ------------------------------------------------- | -------------- | ---------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------ |
| RCOS specification and artifacts (this repo)      | Commons        | Blueprint Steward                              | Public read; Full Members write via governance process                      | Cannot be privatised; forks permitted                        |
| Shared treasury (Safe multi-sig)                  | Commons        | Finance Steward                                | Transparent to all Full Members (real-time via Safe)                        | Governed by Treasury Ruleset                                 |
| ecohubsOS (os.ecohubs.community)                  | Commons        | Infrastructure Steward                         | Full Members; public-facing features open                                   | Cannot be sold or privatised without Constitutional decision |
| EcoHubs website (ecohubs.community)               | Commons        | Infrastructure Steward                         | Public read; Infrastructure Steward and Communications Steward write        | Cannot be sold without Constitutional decision               |
| RCOS hosted website (rcos.ecohubs.community) | Commons        | Infrastructure Steward / Blueprint Steward     | Public read; Blueprint Steward writes; Infrastructure Steward manages       | Cannot be sold without Constitutional decision               |
| Brand, domain names, social media accounts        | Commons        | Communications Steward                         | Communications Steward manages; Full Members may contribute via defined process | Cannot be transferred without Constitutional decision     |

> Any unclassified resource must not be allocated, encumbered, monetized, or transferred until classification is completed.

## Recognized Contribution Categories

:::rcos{clauses="5.2.1, 5.2.3, 5.6.3"}
:::

:::rationale{title="Why name the kinds of work that count?"}
If the community never says out loud which kinds of work it depends on, the invisible work — care, facilitation, moderation, stewardship — stays invisible, and the people doing it burn out or leave. Enumerating categories converts "someone just does this" into recognized labour the system has to account for.
:::

| Category                      | Examples                                                                                                                                                                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Knowledge & Research**      | Writing RCOS artifacts, research into community models, documentation, translation                                                                                                        |
| **Technical Development**     | ecohubsOS development, website development, tooling, infrastructure maintenance                                                                                                           |
| **Governance & Coordination** | Facilitating and organizing internal meetings, reviewing proposals, onboarding new members, running votes, member coordination (helping members find tasks they'd like to participate in) |
| **Community Building**        | Outreach, welcoming new members, moderating channels, hosting public calls, facilitating meetings to support other communities in applying RCOS                                           |
| **Creative & Communication**  | Content creation, social media, design, writing for public channels                                                                                                                       |
| **Care & Support**            | Emotional support, conflict facilitation, wellbeing check-ins                                                                                                                             |
| **Stewardship**               | Maintaining shared resources, monitoring platforms, managing external services                                                                                                            |
| **Informal Participation**    | Active Discord/forum engagement, attending calls, feedback on proposals                                                                                                                   |

## Contribution Recognition Mechanism

:::rcos{clauses="5.2.2, 5.2.5"}
:::

:::rationale{title="Why pin down how recognition actually works?"}
Without a defined mechanism, "who gets credit" becomes a matter of who is loudest or closest to whoever decides. Specifying what qualifies, how it's recorded, who validates, and how to dispute it turns recognition into something a member can actually rely on — and blocks recognition from silently mutating into governance influence.
:::

- **What qualifies:** Any activity falling into one of the recognized categories above; informal participation counts at the member's own declaration
- **How contributions are recorded:**
  - Structured: automatically via Puckstack task completion → XP/ECO credited via Offcoin
  - Informal/other: self-reported by the member in ecohubsOS or Discord; no validation required for informal participation
- **Who validates:** Structured contributions validated automatically by Puckstack/Offcoin; significant contributions (e.g. major artifacts, facilitation work) may be nominated by any member for additional XP via the Membership Admin
- **Effect on access/privileges:** XP is a membership-state signal as well as a balance: reaching Level 1 transitions a Trial Member to Full Member and with it grants voting rights (see Onboarding Protocol, Layer 1). Beyond that transition, recognition grants no governance rights other than those the member's state already defines, and ECO grants none at all. Because XP carries this weight, reward grants by stewards are capped, attributed to the granting steward with a reason, and published — see Contribution Recognition above and the Role Registry (Layer 5)
- **Substituted work:** Units follow the person who performed the work, and only where that person is a member. Work done on a member's behalf earns that member nothing — see Substitution of Participation in the Membership Agreement (Layer 1)
- **Dispute:** Any member may contest a contribution record within 30 days; disputes resolved by Membership Admin with right of appeal to Full Members

## Internal Units

:::rcos{clauses="5.2.4, 5.2.5"}
:::

:::rationale{title="Why define XP and ECO this precisely?"}
Internal units tend to grow powers no one voted for — decay, caps, transferability, governance weight — unless each property is nailed down in writing. Listing issuance, transfer rules, privacy, and explicit non-governance status makes the units tools of recognition rather than quiet shadow currencies.
:::

Two internal units are in use: **XP** (experience points) and **ECO** (community currency). Both are tracked via Offcoin / ecohubsOS.

| Property | XP | ECO |
|---|---|---|
| **Purpose** | Activity and progress indicator | Contribution recognition; may unlock certain Puckstack permissions |
| **Issuance** | Automatic via Puckstack task completion; manual via Membership Admin for nominated informal contributions | Same as XP |
| **Transferability** | Non-transferable between members | Non-transferable between members; not traded on external markets |
| **Expiration / decay** | None currently | None currently — see [Missing Technical Implementations](../../resources/missing-technical-implementations.md) |
| **Hard cap** | None currently | None currently |
| **Future utility** | N/A | TBD — further utility to be defined via future proposals |
| **Fraud prevention** | Self-reported contributions subject to community review; dispute mechanism as defined in Contribution Recognition Mechanism | Same as XP |
| **Privacy** | Balances visible to all Full Members in ecohubsOS | Balances visible to all Full Members in ecohubsOS |

> ECO and XP do not grant governance rights beyond what the membership state defines (see §5.2.5).

## Accumulation Constraints

:::rcos{clauses="5.4.1, 5.4.2, 5.4.3, 5.4.4, 5.6.4"}
:::

:::rationale{title="Why constrain accumulation at all?"}
Any internal unit that can pile up without limit eventually becomes leverage — a few members with large balances gain informal sway the governance system never granted them. Stating accumulation rules explicitly, even when the current rule is "none yet," keeps the question open and forces a visible decision before concentration becomes a structural problem.
:::

- No hard cap on XP or ECO currently — accumulation is unlimited
- Neither unit can be converted into governance authority or used to bypass the Decision Matrix
- Accumulation limits and decay mechanisms are deferred as a future proposal; see [Future Proposals](../../resources/future-proposals.md)

## External Income Interfaces

:::rcos{clauses="5.3.2"}
:::

:::rationale{title="Why require approval before money arrives?"}
Once funds are in hand, the conversation shifts from "should we accept this?" to "what do we do with it?" — and the conditions attached to the income (grant terms, partnership obligations, service commitments) are often already locked in. Requiring a Strategic decision before any new income channel opens keeps the community in control of what it takes on.
:::

- **Current:** No external income; all operational costs are covered by the founding member as personal contributions
- **Potential future interfaces:** Grants and foundations, Web3 ecosystem funding, partnerships, paid services (tooling, onboarding support, educational programs)
- **Rule:** Any new external income interface must be declared and approved via a Strategic decision before funds are received or commitments made

## Dispute Resolution for Economic Records

:::rationale{title="Why time-box economic disputes?"}
Contribution and balance records accumulate fast; if disputes could be raised indefinitely, the ledger would never settle and every historical credit would stay contestable. A 30-day window with a named resolver and an appeal path gives members a real chance to correct errors without leaving the whole economic history perpetually unstable.
:::

Any member may contest a contribution record or internal unit balance within 30 days of the record being created. See Contribution Recognition Mechanism above for the full dispute process. Appeals beyond Admin resolution are handled by Full Members via the governance process (Layer 2).

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Strategic
- **Version:** <version>
- **Decision record:** <link to decision record>
