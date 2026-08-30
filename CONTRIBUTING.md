# Contributing to EcoHubs RCOS

This repository is the formal governance record for EcoHubs. Every rule, role, and decision structure that EcoHubs operates under lives here as a versioned markdown file.

This document explains what RCOS is, how this repo is organized, and how to propose or adopt changes.

---

## What Is RCOS?

RCOS (Regenerative Community Operating System) is a formal specification for how intentional communities govern themselves. It exists because most communities fail not from bad intentions, but from **implicit structure** — unwritten rules enforced as norms, invisible labor, charisma-based authority, and conflicts avoided until they become existential.

RCOS makes the following things explicit, versioned, and auditable:

| Layer | What it governs |
|---|---|
| **Layer 0 — Identity & Scope** | Why the community exists; what it governs; non-negotiable invariants |
| **Layer 1 — Membership** | How people join, participate, change status, and exit |
| **Layer 2 — Governance** | Who decides what, by which mechanism, with what authority |
| **Layer 3 — Economy & Resources** | How value flows; commons vs. private; contribution recognition; treasury |
| **Layer 4 — Conflict & Accountability** | How conflicts are handled; repair; sanctions; due process |
| **Layer 5 — Operations** | Roles, coordination, meetings, documentation, workload limits |
| **Layer 6 — Evolution** | How rules change; experiments; version history; learning from failure |

The core principle: **if it is not written, agreed, and versioned, it does not exist.**

Full specification: [`resources/RCOS_v01:reduced.md`](resources/RCOS_v01:reduced.md)  
EcoHubs community context: [`resources/ecohubs_community_overview.md`](resources/ecohubs_community_overview.md)

---

## Repository Structure

```
layers/          All RCOS artifacts — one folder per layer, one file per artifact
proposals/
  passed/        Adopted proposals — permanent record
  rejected/      Rejected proposals — archived for reference
modules/         Optional domain modules (permaculture, education, etc.) — empty for now
compliance/      Layer-by-layer compliance checklist
resources/       Context documents and reference material
AGENTS.md        Instructions for AI agents updating this repo
```

Active (in-flight) proposals live as **open pull requests** — not as files on `main`.

---

## How Proposals Work

Any member may propose a change to any artifact.

### 1. Open a pull request

Create a branch and add a new file to `proposals/` using the template below. The PR title should be `Proposal: <short title>`.

**File naming:** `proposals/<YYYY-MM-DD>_<short-kebab-title>.md`

```markdown
# Proposal: <Title>

- **Status:** Draft
- **Submitted:** <YYYY-MM-DD>
- **Submitted by:** <your name or role>
- **Decision type:** Operational / Strategic / Constitutional
- **Authorized decision path:** <reference to Decision Matrix, or describe>

## Summary
<1–3 sentences: what this changes and why.>

## Affected Layers and Artifacts
- Layer X — `layers/X-name/artifact.md`

## Change Type
- [ ] Permanent rule change
- [ ] Time-bounded experiment

## Rationale
<Why this change is needed.>

## Risks and Mitigations
<Known risks and how they are addressed.>

## Transition and Migration Plan
<What existing roles, agreements, or records need to change. Or: "No migration required.">

## Rollback Plan
<How to revert if this causes harm. What would trigger rollback.>

## Effective Date
<YYYY-MM-DD>
```

### 2. Deliberate

Discussion happens in the PR comments and/or on the community forum. The deliberation period and mechanism depend on the decision type:

- **Operational** — lighter process, shorter window (defined in the Decision Matrix once adopted)
- **Strategic** — community review; vote if required
- **Constitutional** — requires an ecohubsOS vote with a defined supermajority threshold

### 3. Outcome

| Outcome | What happens |
|---|---|
| **Passed** | PR is merged into `proposals/passed/`; the affected artifact(s) in `layers/` are updated; `layers/6-evolution/02-version-history.md` is updated |
| **Rejected** | PR is closed; proposal file (if any) is moved to `proposals/rejected/` for archive |

---

## How to Fill In an Artifact Stub

All artifact files in `layers/` start as stubs with `[To be defined]` placeholders. To fill one in:

1. Open a PR with your proposed content for the artifact.
2. Include a proposal file in `proposals/` that documents the rationale, decision type, and decision path.
3. The artifact file itself is updated as part of the same PR or a follow-up once the proposal passes.

Each stub includes a reference to the RCOS specification section it implements — use that to understand what the artifact must contain to be compliant.

**A stub does not count as compliant.** Compliance requires substantive, adopted content. See [`compliance/checklist.md`](compliance/checklist.md) for current status.

---

## Decision Types at a Glance

| Type | Scope | Example |
|---|---|---|
| **Operational** | Day-to-day within existing rules | Adding a task, adjusting a meeting cadence |
| **Strategic** | Long-term direction, significant resources, major structures | Adopting a new role, updating the treasury ruleset |
| **Constitutional** | Layer 0 invariants, purpose, scope, or the governance system itself | Changing the community's primary purpose, adding an invariant |

When in doubt, default to the **higher-impact type**.

---

## Questions?

If something in the spec or the process is unclear, open a discussion on the [community discord](https://discord.gg/Xnh7247Nq3). Governance changes affect everyone — deliberation before drafting saves time.