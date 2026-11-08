# Conflict Resolution Ladder

- **Layer:** 4 — Conflict, Repair & Accountability
- **Status:** Stub — not yet adopted
- **RCOS reference:** §6.1, §6.2, §6.3, §6.5

---

## Conflict Classification

:::rcos{clauses="6.1.1, 6.1.2, 6.1.3, 6.1.4, 6.1.5, 6.5.3"}
:::

:::rationale{title="Why classify conflicts at all?"}
Without named classes, every dispute gets treated the same — or worse, treated differently based on who is involved. Explicit classes set the entry point, the response window, and the documentation burden up front, so safety-critical matters cannot be quietly routed through a friendly chat and minor friction cannot be weaponized into a formal review.
:::

| Class | Entry criteria | Entry point | Initial response window | Documentation |
|---|---|---|---|---|
| **Interpersonal** | Member-to-member friction, communication issues, personal disagreements | Step 1 | Facilitator acknowledgement within 5 days if escalation is requested | None required until Step 3 |
| **Role-based** | Disputes about how a role was performed, task scope disagreements | Step 2 | Facilitator acknowledgement within 5 days of request | None required until Step 3 |
| **Structural** | Disputes about whether a governance process was followed correctly | Step 2 | Facilitator acknowledgement within 5 days of request | None required until Step 3 |
| **Ethical / obligation breach** | Breach of Membership Agreement obligations or Layer 0 principles (non-severe) | Step 3 | Facilitator written acknowledgement within 3 days | Written record from intake |
| **Safety-critical** | Credible safety risk, coercion, abuse, or threats | Step 4 (bypasses Steps 1–3) | Facilitator or Membership Admin acknowledgement within 24 hours; immediate protective action permitted | Written record from intake; immediate action permitted |

> Safety-critical conflicts override participation rights, role continuity, and operational convenience.
> The initial response window is measured from the point at which the party requests escalation (for Steps 1–3) or reports the issue (for safety-critical). The Facilitator acknowledges receipt and confirms the next step — this does not require immediate resolution.

## Resolution Ladder Steps

:::rcos{clauses="6.2.1, 6.2.2, 6.2.3, 6.2.4, 6.2.5, 6.5.3"}
:::

:::rationale{title="Why a stepped ladder instead of a single process?"}
Most conflict is low-stakes and best resolved between the people involved; forcing everything into formal review would kill trust and flood the governance system. A ladder matches process weight to dispute weight — private conversation first, facilitated dialogue next, written record only when needed, governance vote only when all else fails. It also makes escalation a structural right, not a favour granted by whoever holds social power.
:::

1. **Direct conversation** — Parties attempt to resolve privately between themselves. No facilitator involved. 14-day window. If resolved: no record required. If unresolved or either party requests escalation: move to Step 2.

2. **Facilitated dialogue** — Either party requests facilitated dialogue via the Facilitator (Admin). Facilitator hosts one or more conversations. Confidential: parties and Facilitator only. 14-day window. If resolved: brief written record kept by Facilitator. If unresolved: move to Step 3.

3. **Accountability intake** — Facilitator opens a formal written record. Parties submit written statements (optional but encouraged). Facilitator reviews and may propose a resolution. Confidential. 21-day window. If resolved: written record of outcome kept by Facilitator. If unresolved: move to Step 4.

4. **Accountability review** — Structured review led by Facilitator. Both parties have a full opportunity to present their position. Facilitator issues a written recommendation. Confidential. 21-day window. If all parties accept: outcome implemented and record kept. If not accepted or forced exit is required: move to Step 5.

5. **Governance decision** — Minimum necessary information is disclosed to Full Members; parties are notified before disclosure. Full Members deliberate (minimum 5 days) and vote in the ecohubsOS voting app. Strategic decision threshold.

6. **Separation process** — If Full Members vote for forced exit: coordinated with the Exit & Separation Protocol (Layer 1). Minimum 6-month re-application block applies.

## Non-Response, Withdrawal, and Deadlock

:::rcos{clauses="6.2.5, 6.1.5, 6.2.3"}
:::

:::rationale{title="What stops a process from being killed by silence?"}
The easiest way to defeat any accountability process is to ignore it. If non-response, withdrawal, or deadlock leaves the matter frozen, the party on the receiving end of harm carries the cost of the inaction. Explicit rules for each failure mode convert silence into a documented escalation trigger rather than a veto.
:::

**If a party does not respond within the defined window:**
- The Facilitator sends one written follow-up notice, giving the non-responding party 5 additional days
- If still no response: the Facilitator may escalate to the next step, treating non-response as non-resolution
- The non-responding party is notified that escalation has occurred

**If a party withdraws mid-process:**
- The withdrawing party notifies the Facilitator in writing (or the Facilitator documents the withdrawal if verbal)
- The other party may choose to close the process or request that the Facilitator issue a written summary of the outstanding concern
- If the outstanding concern constitutes an accountability matter, it may be escalated to the Accountability Protocol regardless of withdrawal

**Deadlock (all resolution attempts exhausted):**
- If Steps 1–4 are exhausted without resolution and both parties confirm they cannot reach agreement, the Facilitator escalates to Step 5 (Governance decision)
- The Facilitator documents the deadlock in writing, noting which steps were attempted and why they did not produce resolution

**Procedural failure review:**
- If a party believes a step of this process was not followed correctly (e.g., wrong escalation, breach of confidentiality, missed timeline), they may raise a procedural objection in writing to the Facilitator or, if the Facilitator is implicated, directly to the Membership Admin
- Procedural failures are logged and reviewed at the next Reflection & Learning meeting; persistent procedural failures trigger a review of this artifact under the Change Protocol

---

## Facilitator Selection and Replacement

:::rcos{clauses="6.2.3, 6.3.1, 6.3.3, 6.5.3"}
:::

:::rationale{title="Why name how the Facilitator is chosen or replaced?"}
A facilitator who is implicated in the conflict — or socially aligned with one party — cannot hold the process fairly, no matter how good their intentions. Naming selection and replacement rules up front means the affected party does not have to fight for a neutral hearing while already under stress.
:::

- **Current facilitator:** Facilitator role holder (per Role Registry, Layer 5)
- **If the Facilitator is a party to the conflict:** a neutral facilitator is nominated from Full Members by mutual agreement of the parties; if no agreement is reached, any willing Full Member with no declared conflict of interest may serve
- **Declining a facilitator:** any party may decline a facilitator by stating a conflict of interest in writing; both parties then agree on a replacement
- **External facilitation:** may be requested by mutual agreement of all parties at any step

## Privacy and Information Access Boundaries

:::rcos{clauses="6.2.3, 6.5.3"}
:::

:::rationale{title="Why bound information flow so tightly?"}
Conflict records contain the most sensitive material the community holds. Leaks, gossip, or casual disclosure cause second-order harm and deter future reporting. Explicit boundaries — what stays with the parties, what reaches Full Members, and when records are destroyed — make confidentiality enforceable rather than aspirational.
:::

- **Steps 1–4:** fully confidential; only parties and Facilitator may access records or be aware of the process
- **Steps 5–6:** minimum necessary information is disclosed to Full Members; parties are notified before any disclosure. **Minimum necessary information** means: the conflict class, the ladder step reached, the resolution attempts made, and what decision is being requested of Full Members. Written statements, personal submissions, and detailed records from Steps 3–4 remain confidential and are not disclosed to Full Members.
- **Record retention:** records from Steps 3–4 are retained by Membership Admin for 2 years, then destroyed; accessible only to parties and Facilitator during that period
- **Non-disclosure:** no participant may share information about the process outside the defined participants without the written consent of all parties

## Safeguards

:::rcos{clauses="6.3.1, 6.3.2, 6.3.3, 6.3.4, 6.3.5, 6.5.3"}
:::

:::rationale{title="Why do safeguards exist on top of the ladder?"}
Process alone does not protect the party with less power. Retaliation, bad-faith complaints, conflicted facilitators, and unreviewed safety risks can all neutralize an otherwise good procedure. Safeguards are the backstops that keep the ladder functional when incentives push against honest reporting.
:::

- **Anti-retaliation:** Any member who raises a conflict or participates in a process in good faith is protected from retaliation. Retaliation is itself grounds for an accountability process.
- **Bad-faith complaints:** A complaint found to be deliberately false or intended to harm a member may trigger an accountability process against the complainant.
- **Facilitator conflict of interest:** If the Facilitator is a party to the conflict, a substitute Facilitator must be appointed (see Facilitator Selection and Replacement above).
- **Process pause:** Either party may pause the process once for up to 14 days by written notice to the Facilitator, for personal reasons.
- **Safety-critical immediate action:** The Facilitator may recommend an immediate, temporary access restriction pending review. This does not constitute exit and must be reviewed within 14 days.
- **Power differential — separate intake channel:** Where a significant power differential exists between parties (for example, a conflict between a member and a role holder whose authority directly affects that member, or where the Facilitator is associated with one party), the affected member may request that their initial report and documentation be submitted directly to the Membership Admin via private message or email rather than through the standard facilitation channel. The Membership Admin then either handles the intake directly or arranges an independent substitute Facilitator. This ensures reporting is not channeled through parties with a conflicting interest.
- **Role suspension during review:** Where a power differential involves a role holder and the role authority is a source of the conflict, the Full Members may vote (Strategic decision) to temporarily suspend the role holder's delegated authority during the review. This does not constitute forced exit.

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Strategic
- **Version:** <version>
- **Decision record:** <link to decision record>
