# Tabernacle AI Sessions board

Shared board for the biweekly AI adoption sessions with Sterling and April: next agenda, to-dos, questions, what's built, training links, and a log of past sessions.

- Live page: https://claude.ai/artifact/PNBaUUWtSvo2L8E7BKTMeq (IT4Causes account, declares `db` and `user` with the profile scope)
- Source: `tbc-ai-sessions.html` here. Republish from this file; the data lives in the artifact's database, not in the page.

## Sharing

Sterling and April are outside the IT4Causes org. To let them tick items and add questions, invite each one by email as an **Editor** from the Share menu, and don't also turn on a public link. Outside guests invited as Contributor or Viewer can only read.

## Data model (ArtifactData collections)

- `items`: `{title, detail, owner: Sterling|April|Mark|Everyone, raised: YYYY-MM-DD or YYYY-MM, status: open|done, doneOn, doneBy, addedBy}`. Done items show under What we've built. A to-do open 2 or more sessions gets flagged.
- `questions`: `{text, who, raised, status: open|answered, note, answer, answeredOn, answeredBy, addedBy}`
- `sessions`: `{date, time, tentative, status: next|done, title, summary, did: [..], agenda: [{id, text, who, done}], notes}`. Exactly one doc should be `next`.
- `resources`: `{group, order, title, url, note}`

## After each session

1. Read the transcript, the `next` session's `notes`, and the agenda ticks.
2. Set that session to `status: done` and write its `summary` and `did`.
3. Mark the to-dos that got done (`status: done`, `doneOn`). Add new to-dos and questions, and answer the questions that got answered.
4. Create the next session doc with `status: next` and an agenda drawn from open to-dos (oldest first) and open questions.
5. Use one `batch` call, pinning each existing doc with `if_version`.
