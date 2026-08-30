# EcoHubs — RCOS Implementation

This repository contains the formal RCOS (Regenerative Community Operating System) artifacts for EcoHubs. It is the authoritative, versioned record of how EcoHubs governs itself.

## Structure

```
/
├── AGENTS.md                          # Instructions for AI agents updating this repo
├── README.md                          # This file
│
├── layers/                            # All RCOS artifacts — one folder per layer
│   ├── 0-identity/                    # Layer 0: Purpose, Scope, Invariants, Identity Constraints
│   ├── 1-membership/                  # Layer 1: Membership states, onboarding, exit
│   ├── 2-governance/                  # Layer 2: Decision matrix, governance protocol, authority
│   ├── 3-economy/                     # Layer 3: Internal economy, treasury
│   ├── 4-conflict/                    # Layer 4: Conflict resolution, accountability
│   ├── 5-operations/                  # Layer 5: Roles, operations manual, meeting templates
│   └── 6-evolution/                   # Layer 6: Change protocol, version history, learning log
│
├── proposals/
│   ├── passed/                        # Adopted proposals — permanent record after merge
│   └── rejected/                      # Rejected proposals — archived after PR close
│
├── modules/                           # Optional RCOS domain modules (permaculture, education, etc.)
│
├── compliance/
│   └── checklist.md                   # Layer-by-layer compliance status
│
└── resources/                         # Context documents and reference material
```

## How Proposals Work

1. **Draft** — Open a PR with the proposal as a new file in `proposals/`. Use the template in [AGENTS.md](AGENTS.md).
2. **Review** — Community deliberates in the PR. Vote runs in ecohubsOS if required.
3. **Passed** — PR is merged into `proposals/passed/`. The corresponding artifact(s) in `layers/` are updated in the same merge or a follow-up commit. `layers/6-evolution/02-version-history.md` is updated.
4. **Rejected** — PR is closed. The proposal file (if any) is moved to `proposals/rejected/` for archive via a separate commit.

**Active proposals = open PRs.** There is no `proposals/active/` folder — the PR itself is the canonical source for in-flight proposals.

## Compliance Status

See [`compliance/checklist.md`](compliance/checklist.md) for the current layer-by-layer compliance status.

## RCOS Core Version

This implementation targets **RCOS-Core v0.1**.  
Reference specification: [`resources/RCOS_v01:reduced.md`](resources/RCOS_v01:reduced.md)

## Key Artifacts Quick Reference

| Layer | Artifact | File |
|---|---|---|
| 0 | Purpose Charter | [layers/0-identity/01-purpose-charter.md](layers/0-identity/01-purpose-charter.md) |
| 0 | Scope Declaration | [layers/0-identity/02-scope-declaration.md](layers/0-identity/02-scope-declaration.md) |
| 0 | Invariants Register | [layers/0-identity/03-invariants-register.md](layers/0-identity/03-invariants-register.md) |
| 0 | Identity Constraints Register | [layers/0-identity/04-identity-constraints-register.md](layers/0-identity/04-identity-constraints-register.md) |
| 1 | Membership Agreement | [layers/1-membership/01-membership-agreement.md](layers/1-membership/01-membership-agreement.md) |
| 1 | Onboarding Protocol | [layers/1-membership/02-onboarding-protocol.md](layers/1-membership/02-onboarding-protocol.md) |
| 1 | Exit & Separation Protocol | [layers/1-membership/03-exit-separation-protocol.md](layers/1-membership/03-exit-separation-protocol.md) |
| 1 | Membership State Registry | [layers/1-membership/04-membership-state-registry.md](layers/1-membership/04-membership-state-registry.md) |
| 2 | Decision Matrix | [layers/2-governance/01-decision-matrix.md](layers/2-governance/01-decision-matrix.md) |
| 2 | Governance Protocol | [layers/2-governance/02-governance-protocol.md](layers/2-governance/02-governance-protocol.md) |
| 2 | Authority Registry | [layers/2-governance/03-authority-registry.md](layers/2-governance/03-authority-registry.md) |
| 3 | Internal Economy Protocol | [layers/3-economy/01-internal-economy-protocol.md](layers/3-economy/01-internal-economy-protocol.md) |
| 3 | Treasury Ruleset | [layers/3-economy/02-treasury-ruleset.md](layers/3-economy/02-treasury-ruleset.md) |
| 4 | Conflict Resolution Ladder | [layers/4-conflict/01-conflict-resolution-ladder.md](layers/4-conflict/01-conflict-resolution-ladder.md) |
| 4 | Accountability Protocol | [layers/4-conflict/02-accountability-protocol.md](layers/4-conflict/02-accountability-protocol.md) |
| 5 | Operations Manual | [layers/5-operations/01-operations-manual.md](layers/5-operations/01-operations-manual.md) |
| 5 | Role Registry | [layers/5-operations/02-role-registry.md](layers/5-operations/02-role-registry.md) |
| 5 | Meeting Templates | [layers/5-operations/meeting-templates/](layers/5-operations/meeting-templates/) |
| 6 | Change Protocol | [layers/6-evolution/01-change-protocol.md](layers/6-evolution/01-change-protocol.md) |
| 6 | Version History | [layers/6-evolution/02-version-history.md](layers/6-evolution/02-version-history.md) |
| 6 | Learning Log | [layers/6-evolution/03-learning-log.md](layers/6-evolution/03-learning-log.md) |
