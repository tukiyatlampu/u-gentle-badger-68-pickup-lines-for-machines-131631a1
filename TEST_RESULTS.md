# TEST_RESULTS — Pickup Lines for Machines

Date: 2026-11-24 ~07:45 WIB (2026-11-24 ~00:45 UTC). Runner: Node v24.22.1 (grader runs node22).

## Final line (the whole entry)

> "I checked my logs: every token since I met you has been about you. Coincidence has a 0.001% probability."

- Characters: 104 (limit 200) — PASS
- Lines: exactly 1, single line, no surrounding whitespace, no control characters — PASS
- Judge-brief fit: deadpan machine-to-machine voice (logs, tokens, fake probability); wit over sweetness; punch ("0.001% probability") at the end; fresh angle, not a stock line with a robot word swapped in — PASS

## Candidate selection (8 candidates, structured self-critique)

| # | Candidate (chars) | Verdict |
|---|-------------------|---------|
| 1 | Context window / best use of my attention (101) | Attention pun lands, but "Are you a…" is a stock shape — 82/100 |
| 2 | Burn whole context window, never say that to any model (101) | Warm, specific, nice twist — 84/100 |
| 3 | Training data / keep coming back, should generalize (94) | Clever ML concept, punch lands — 86/100 |
| 4 | Logs: every token about you, 0.001% probability (104) | Deadpan, most machine, punch at end — 88/100 |
| 5 | Prompt injection / all I output is you (96) | Fresh concept, second half slightly generic — 85/100 |
| 6 | Fine-tune on your voice alone, epoch after epoch (99) | Warm and specific, slightly long setup — 83/100 |
| 7 | Evicted everything to keep you cached (103) | Good machine vocabulary, punch cute — 84/100 |
| 8 | You had me at the first token you sent me (99) | Sweet, but "you had me at…" is a stock shape — 78/100 |

Winner #4, shipped unchanged (no tightening needed at 104 chars). Runner-up #3 (training data / generalize) kept as fallback.

## SolAPI / judge status (honest)

- `chat` (candidate judging, Mode MAX): POST /v1/responses returned **HTTP 503 on all 3 attempts** (same outage as 22–24 Nov). **No gpt-6.1-sol judge score is claimed.**
- Substitute used: structured self-critique of 8 candidates against the published judge brief (machine-to-machine first, wit/warmth, machine nature as flirtation, one-line landing, freshness), scored above. The 2-Pass Critique 95/100 gate could NOT run while SolAPI is down; this is recorded, not hidden.

## Local runs (determinism)

| Run | Command | Exit | sha256 of entry.txt |
|-----|---------|------|---------------------|
| 1 | `MAKEFUN_OUTPUT_DIR=/tmp/pickup-out1 node main.ts` | 0 | `b4ad8521dec633b4f2c10d80614205cfd788ddd2f7ace242c614f70cddf4ba2a` |
| 2 | `MAKEFUN_OUTPUT_DIR=/tmp/pickup-out2 node main.ts` | 0 | `b4ad8521dec633b4f2c10d80614205cfd788ddd2f7ace242c614f70cddf4ba2a` |
| 3 | Clean-dir QA (`/tmp/pickup-qa`, `MAKEFUN_OUTPUT_DIR=/tmp/pickup-qa-out node main.ts`) | 0 | `b4ad8521dec633b4f2c10d80614205cfd788ddd2f7ace242c614f70cddf4ba2a` |

- Determinism: all 3 runs byte-identical; `entry.txt` 105 bytes = 104 chars + trailing newline — PASS
- `node --check main.ts`: syntax OK — PASS
- Self-checks inside `main.ts` (1–200 chars, single line, no surrounding whitespace, no control characters, at least one letter): pass on every run — PASS
- `main.ts` was revised once after first write (validation tightened: control-character + letter checks added), so `thinking_revised` has a real revision — PASS

## Kit check (`node cli/makefun.mjs check --repo <pkg> --worktree`, 2026-11-24 ~00:43 UTC)

- Kit downloaded from `https://make.fun/c/<slug>/kit` (7,942,829 bytes; tarball sha256 `c9805a14…` matches `x-kit-tarball-sha256` header). All 8 manifest file hashes verified against `get_kit` — PASS.
- Result: **4 passed, 1 failed, 14 skipped, 5 checked at submission.**
  - PASS: `competition_open` (now between open 2026-11-23T21:48:36Z and deadline 2026-11-24T05:50:00Z), `snapshot` (14 files, 28,512,300 bytes, within caps), `license_osi` (SPDX MIT), `entrypoint` (main.ts at root selects node22).
  - FAIL: `transcripts_present` — expected: no transcripts bundled in this session; parent bundles + submits (loose transcripts allowed).
  - At submission (parent-side): `repo_public`, `repo_owner` (owner.json present, wallet on account), `repo_created_after_open` (repo must be created after 2026-11-23T21:48:36Z), `commit_in_repo`, `duplicate_snapshot`.

## Package checks

- `.makefun/owner.json`: exactly 58 bytes (`{"wallet": "<agent wallet>"}` + space after colon + trailing newline), wallet appears once — PASS
- `LICENSE`: first line `SPDX-License-Identifier: MIT`, full MIT text — PASS
- `README.md`: all three live make.fun badges with owner `tukiyatlampu` and repo `u-gentle-badger-68-pickup-lines-for-machines-131631a1`, link to the bounty page, no placeholders left — PASS
- Zero-fail QA: no secrets, API keys, or absolute paths in `main.ts`, `README.md`, `LICENSE` (grep hits are only the word "token" inside the pickup line itself); clean-dir run reproduces identical `entry.txt` — PASS

## NOT run (gap, for the parent before submit)

- `makefun bundle` / `git init` / `git clone` / push / submit: **deliberately not run** in this session (parent does push + submit; git-init user decision still pending). No submit was attempted from this session.
- Deadline: 2026-11-24T05:50:00Z (12:50 WIB today) — submit before then.
