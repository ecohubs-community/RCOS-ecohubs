# Role Registry

- **Layer:** 5 — Operations & Coordination
- **Status:** Stub — not yet adopted
- **RCOS reference:** §7.1, §7.6

---

## Overview

:::rcos{clauses="7.1.1, 7.1.2, 7.1.4, 7.7.1"}
:::

:::rationale{title="Why require every responsibility to have a named role?"}
Ongoing responsibilities without explicit roles become invisible labor — done by whoever notices, resented silently, and impossible to hand over. Making every ongoing responsibility a named, accountable role is what prevents the community from running on the unpaid goodwill of a few members.
:::

This registry defines all recognized roles within EcoHubs. Roles are either **operational** (carrying delegated authority per the Decision Matrix) or **functional** (contribution-scoped, no special governance authority beyond Full Member rights).

All operational roles are currently held by the founding member (Stefan) as a transitional necessity during the early phase of the community. The community actively seeks to distribute these roles as more members join. One person may hold multiple roles simultaneously.

> **"In good standing"** means a Full Member who has met their participation expectations in the last 6 months and is not currently subject to an active accountability process or conflict review under Layer 4.

> This registry defines the specific operational roles that replace the "Admin" placeholder. The Authority Registry (Layer 2) and the Decision Matrix (Layer 2) have been updated to reference these roles directly.

---

## Summary Table

| Role | Type | Current Holder |
|---|---|---|
| Membership Admin | Operational | Stefan (founding member) |
| Finance Steward | Operational | Stefan (founding member) |
| Infrastructure Steward | Operational | Stefan (founding member) |
| Communications Steward | Operational | Stefan (founding member) |
| Facilitator | Functional | Stefan (founding member) |
| Community Connector | Functional | Vacant |
| Content Creator | Functional | Vacant |
| Blueprint Steward | Functional | Stefan (founding member) |
| Digital Builder | Functional | Stefan (founding member) |
| Strategy & Initiatives Facilitator | Functional | Vacant |
| Research Steward | Functional | Vacant |
| Regenerative Workshop Curator | Functional | Vacant |

---

## Operational Roles

:::rcos{clauses="7.1.2, 7.1.3"}
:::

:::rationale{title="Why define accountability for delegated authority?"}
Operational roles carry real power — they can act without a community vote within their scope. That power only stays safe if each role has a clear accountability mechanism: who can raise concerns, how review happens, and how a role can be reassigned when trust breaks.
:::

Operational roles carry delegated authority to act within explicitly defined limits without a Full Member vote, as defined in the Decision Matrix (Layer 2). All operational role holders are accountable to Full Members collectively. Any Full Member may raise a concern about how a role is being performed; reassignment requires a Strategic vote.

---

### Membership Admin

:::rcos{clauses="7.1.2, 7.1.3"}
:::

:::rationale{title="Why a dedicated membership role?"}
The membership lifecycle is the community's front door and its exit. If it runs informally, applications stall, trial periods drift, and exits become messy. A single accountable holder keeps the lifecycle fair, visible, and timely.
:::

- **Purpose:** Ensure the membership lifecycle operates smoothly, fairly, and in compliance with Layer 1 protocols.
- **Scope of responsibility:** Application processing, onboarding flow management, exit processing, Membership State Registry, Safe Proposer access for new members.
- **Decision authority:** All Operational membership decisions as defined in the Decision Matrix; no authority over Strategic or Constitutional decisions.
- **Interfaces:** Finance Steward (Safe access), Infrastructure Steward (platform access management), Facilitator (conflict-related exits).
- **Eligibility criteria:** Full Member in good standing.
- **Term / rotation:** Ongoing until vacated or reassigned.
- **Appointment process:** Currently held by founding member; transfer via Strategic vote to appoint a new holder.
- **Review and removal:** Any Full Member may raise a concern; reassignment requires a Strategic vote.
- **Handover:** Outgoing holder must ensure the Membership State Registry is current, active onboarding cases are documented, and platform admin access is transferred to the incoming holder.

---

### Finance Steward

:::rcos{clauses="7.1.2, 7.1.3"}
:::

:::rationale{title="Why a dedicated finance role?"}
Treasury integrity depends on someone being accountable for it — not just for signing transactions, but for making sure money flows are visible to members who are entitled to see them. Without a named holder, treasury transparency quietly decays.
:::

- **Purpose:** Maintain transparency and compliance over the community treasury.
- **Scope of responsibility:** Safe multi-sig management, declared treasury account records, spending compliance, treasury reporting for non-Safe accounts.
- **Decision authority:** Operational treasury administration within the spending limit defined in the Decision Matrix (currently €0 — no unilateral spending authority); all expenditure requires a Strategic vote until a threshold is adopted.
- **Interfaces:** Membership Admin (Safe Proposer access for new members), Full Members (treasury visibility), Infrastructure Steward (platform cost tracking).
- **Eligibility criteria:** Full Member in good standing.
- **Term / rotation:** Ongoing until vacated or reassigned.
- **Appointment process:** Currently held by founding member; transfer via Strategic vote to appoint a new holder.
- **Review and removal:** Any Full Member may raise a concern; reassignment requires a Strategic vote.
- **Handover:** Outgoing holder must transfer Safe signing authority, provide a current treasury summary, and document all active declared accounts to the incoming holder.

---

### Infrastructure Steward

:::rcos{clauses="7.1.2, 7.1.3"}
:::

:::rationale{title="Why a dedicated infrastructure role?"}
Platforms, credentials, and integrations are the invisible scaffolding the rest of the community depends on. When they break, they break everything. A named holder keeps access, uptime, and platform changes from being handled "whenever someone has time."
:::

- **Purpose:** Keep EcoHubs platforms running, accessible, and aligned with community governance.
- **Scope of responsibility:** ecohubsOS (os.ecohubs.community) and all integrations (Safe, Offcoin, Puckstack, Discord, Flarum), ecohubs.community, rcos.ecohubs.community, platform credentials and access permissions, technical implementation tracking.
- **Decision authority:** All Operational platform and infrastructure changes as defined in the Decision Matrix; structural platform changes require a Strategic vote.
- **Interfaces:** Digital Builder (feature development), Membership Admin (member access provisioning), Finance Steward (platform costs), Blueprint Steward (RCOS artifact hosting).
- **Eligibility criteria:** Full Member in good standing; sufficient technical capability to manage the platforms.
- **Term / rotation:** Ongoing until vacated or reassigned.
- **Appointment process:** Currently held by founding member; transfer via Strategic vote to appoint a new holder.
- **Review and removal:** Any Full Member may raise a concern; reassignment requires a Strategic vote.
- **Handover:** Outgoing holder must document all platform credentials, transfer admin access, and brief the incoming holder on any active technical issues or pending implementations.

---

### Communications Steward

:::rcos{clauses="7.1.2, 7.1.3"}
:::

:::rationale{title="Why a dedicated communications role?"}
Communications is where the community meets the world — and where drift from values shows up first. A named holder ensures announcements, brand use, and social channels stay coherent with what the community actually stands for, rather than drifting with whoever posted last.
:::

- **Purpose:** Ensure EcoHubs communicates consistently, transparently, and in line with community values across internal and public channels.
- **Scope of responsibility:** Newsletters and announcements, internal communications (Discord, forum), social media accounts, brand compliance.
- **Decision authority:** All Operational communications and routine channel changes as defined in the Decision Matrix; partnerships and brand-use decisions require a Strategic vote.
- **Interfaces:** Content Creator (content pipeline), Community Connector (external communications), Blueprint Steward (public-facing RCOS content), Full Members (announcements and updates).
- **Eligibility criteria:** Full Member in good standing.
- **Term / rotation:** Ongoing until vacated or reassigned.
- **Appointment process:** Currently held by founding member; transfer via Strategic vote to appoint a new holder.
- **Review and removal:** Any Full Member may raise a concern; reassignment requires a Strategic vote.
- **Handover:** Outgoing holder must transfer access to all social media accounts and communication tools, and brief the incoming holder on active campaigns or scheduled communications.

---

## Functional Roles

:::rcos{clauses="7.1.1, 7.1.2"}
:::

:::rationale{title="Why separate functional from operational roles?"}
Not every contribution needs delegated authority — most work is about doing, not deciding. Functional roles name contribution scopes without bundling in governance power, so members can opt into work without an authority transfer, and so the governance system stays clear about who can act on behalf of the community.
:::

Functional roles define a member's contribution scope. They carry no delegated governance authority beyond Full Member rights. Any Full Member may take on a functional role by declaring it to the Membership Admin; no vote is required. Roles may be vacated at any time by notifying the Membership Admin.

---

### Facilitator

:::rcos{clauses="7.1.2"}
:::

:::rationale{title="Why a Facilitator role?"}
Meetings and conflicts need someone holding the container who isn't a party to the content. Naming this role — and defining a substitute when the Facilitator is a party — keeps facilitation from becoming either invisible labor or an accidental power base.
:::

- **Purpose:** Hold space for productive conversations, workshops, and collaborative processes — internally, externally, and in support of communities applying RCOS.
- **Scope of responsibility:** Internal meetings and workshops, external RCOS sessions, blueprint workshops, and default conflict facilitation per Layer 4.
- **Decision authority:** Full Member rights only.
- **Interfaces:** All roles (internal facilitation), external communities (RCOS sessions), Blueprint Steward (blueprint workshops), Layer 4 conflict parties (conflict facilitation).
- **Eligibility criteria:** Full Member; facilitation experience preferred.
- **Term / rotation:** Ongoing until vacated.
- **Appointment process:** Currently held by founding member; any Full Member may take on this role by declaring it to Membership Admin.
- **Review and removal:** Role may be vacated at any time; if the Facilitator is a party to a conflict, a substitute is appointed per the Conflict Resolution Ladder (Layer 4).
- **Handover:** Brief incoming holder on any active facilitation commitments or ongoing conflict processes.

> The Facilitator role is the default conflict Facilitator per the Conflict Resolution Ladder (Layer 4). If the Facilitator is a party to a conflict, a substitute is appointed per Layer 4.

---

### Community Connector

:::rcos{clauses="7.1.2"}
:::

:::rationale{title="Why a Community Connector role?"}
Relationships across communities don't maintain themselves. Naming this role makes the work of building and sustaining the wider web legible — rather than leaving it to whoever happens to be extroverted that month.
:::

- **Purpose:** Grow and strengthen the web of relationships between EcoHubs members, communities, and aligned organizations.
- **Scope of responsibility:** External relationship cultivation, cross-community representation, member-to-member connection support.
- **Decision authority:** Full Member rights only.
- **Interfaces:** Communications Steward (external communications), Facilitator (cross-community sessions), Strategy & Initiatives Facilitator (partnership proposals).
- **Eligibility criteria:** Full Member.
- **Term / rotation:** Ongoing until vacated.
- **Appointment process:** Any Full Member may take on this role by declaring it to Membership Admin.
- **Review and removal:** Role may be vacated at any time by notifying Membership Admin.
- **Handover:** Document active relationships and ongoing outreach to the incoming holder.

---

### Content Creator

:::rcos{clauses="7.1.2"}
:::

:::rationale{title="Why a Content Creator role?"}
The community's story gets told whether or not anyone is in charge of telling it. Naming this role makes narrative work visible and handover-able, rather than depending on whoever is currently inspired.
:::

- **Purpose:** Bring EcoHubs' shared vision to life through stories, articles, and content that resonates with the wider world.
- **Scope of responsibility:** Articles, long-form content, social media content, narrative work for public channels.
- **Decision authority:** Full Member rights only.
- **Interfaces:** Communications Steward (publication and social channels), Blueprint Steward (RCOS narrative), Community Connector (external audiences).
- **Eligibility criteria:** Full Member.
- **Term / rotation:** Ongoing until vacated.
- **Appointment process:** Any Full Member may take on this role by declaring it to Membership Admin.
- **Review and removal:** Role may be vacated at any time by notifying Membership Admin.
- **Handover:** Hand over any scheduled or in-progress content to Communications Steward or incoming holder.

---

### Blueprint Steward

:::rcos{clauses="7.1.2"}
:::

:::rationale{title="Why a Blueprint Steward role?"}
RCOS only stays useful if someone is tracking how the framework meets practice and where it needs to evolve. A named holder is what keeps the governance system from ossifying into rules no one reviews.
:::

- **Purpose:** Maintain the coherence and continuous improvement of the RCOS framework as EcoHubs applies and learns from it.
- **Scope of responsibility:** RCOS improvement proposals, artifact version awareness, framework support for other communities.
- **Decision authority:** Full Member rights only; RCOS layer changes require a Strategic vote per the Decision Matrix.
- **Interfaces:** Facilitator (blueprint workshops), Research Steward (evidence-based improvements), Infrastructure Steward (artifact hosting), Full Members (governance proposals).
- **Eligibility criteria:** Full Member; deep familiarity with the RCOS specification.
- **Term / rotation:** Ongoing until vacated.
- **Appointment process:** Currently held by founding member; any Full Member may take on this role by declaring it to Membership Admin.
- **Review and removal:** Role may be vacated at any time by notifying Membership Admin.
- **Handover:** Brief incoming holder on active proposals, known gaps, and current artifact version status.

---

### Digital Builder

:::rcos{clauses="7.1.2"}
:::

:::rationale{title="Why a Digital Builder role?"}
Platform features and tooling are downstream of RCOS requirements — someone has to build them. Naming the role separates doing the building from running the infrastructure, so both responsibilities have an owner.
:::

- **Purpose:** Build and maintain the digital infrastructure that powers the EcoHubs ecosystem.
- **Scope of responsibility:** ecohubsOS development, open-source tools, technical implementation of RCOS artifact requirements.
- **Decision authority:** Full Member rights only; structural platform changes require a Strategic vote.
- **Interfaces:** Infrastructure Steward (deployment and operations), Blueprint Steward (technical RCOS requirements), Strategy & Initiatives Facilitator (product roadmap).
- **Eligibility criteria:** Full Member; sufficient technical capability for the work undertaken.
- **Term / rotation:** Ongoing until vacated.
- **Appointment process:** Currently held by founding member; any Full Member may take on this role by declaring it to Membership Admin.
- **Review and removal:** Role may be vacated at any time by notifying Membership Admin.
- **Handover:** Document active development work, open issues, and access credentials to the incoming holder or Infrastructure Steward.

---

### Strategy & Initiatives Facilitator

:::rcos{clauses="7.1.2"}
:::

:::rationale{title="Why facilitate strategy instead of owning it?"}
Strategic direction belongs to Full Members collectively — but someone has to help translate shared intent into concrete, coordinated plans. This role does that work without concentrating strategic authority in any one person.
:::

- **Purpose:** Help translate community vision and values into structured, actionable plans and initiatives — without holding unilateral strategic authority.
- **Scope of responsibility:** Strategic planning facilitation, initiative proposals and roadmaps, cross-role coordination for active initiatives.
- **Decision authority:** Full Member rights only; all strategic direction requires Full Member decision via the governance process.
- **Interfaces:** All roles (initiative coordination), Full Members (proposals and roadmaps), Facilitator (planning sessions).
- **Eligibility criteria:** Full Member.
- **Term / rotation:** Ongoing until vacated.
- **Appointment process:** Any Full Member may take on this role by declaring it to Membership Admin.
- **Review and removal:** Role may be vacated at any time by notifying Membership Admin.
- **Handover:** Document active initiatives, open proposals, and in-progress roadmaps to the incoming holder.

---

### Research Steward

:::rcos{clauses="7.1.2"}
:::

:::rationale{title="Why a Research Steward role?"}
Without someone whose job it is to bring in evidence, the community improves itself only from its own experience — which is a narrow sample. This role connects EcoHubs to the wider body of work on regenerative community.
:::

- **Purpose:** Ground EcoHubs' work in evidence by investigating regenerative models and contributing knowledge that improves the community and the RCOS framework.
- **Scope of responsibility:** Regenerative community research, community analysis, accessible research summaries.
- **Decision authority:** Full Member rights only.
- **Interfaces:** Blueprint Steward (framework improvements), Strategy & Initiatives Facilitator (evidence-based planning), Facilitator (workshop content).
- **Eligibility criteria:** Full Member.
- **Term / rotation:** Ongoing until vacated.
- **Appointment process:** Any Full Member may take on this role by declaring it to Membership Admin.
- **Review and removal:** Role may be vacated at any time by notifying Membership Admin.
- **Handover:** Share active research notes and in-progress summaries with the incoming holder.

---

### Regenerative Workshop Curator

:::rcos{clauses="7.1.2"}
:::

:::rationale{title="Why a Workshop Curator role?"}
A curated workshop directory only exists if someone is curating it. This role turns "we should list good workshops somewhere" into an actual, maintained resource with a named owner.
:::

- **Purpose:** Build a curated ecosystem of in-person regenerative workshops hosted by land stewards and community practitioners.
- **Scope of responsibility:** Host identification and outreach, workshop creation guidance, curated workshop directory on the EcoHubs website.
- **Decision authority:** Full Member rights only.
- **Interfaces:** Communications Steward (directory publication and promotion), Community Connector (host relationships), Infrastructure Steward (website updates).
- **Eligibility criteria:** Full Member.
- **Term / rotation:** Ongoing until vacated.
- **Appointment process:** Any Full Member may take on this role by declaring it to Membership Admin.
- **Review and removal:** Role may be vacated at any time by notifying Membership Admin.
- **Handover:** Transfer all host contact records, active onboarding cases, and directory access to the incoming holder.

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Strategic
- **Version:** <version>
- **Decision record:** <link to decision record>
