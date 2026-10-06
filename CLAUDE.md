# IT4Causes client work

Working notes and tooling for IT4Causes client engagements (AI readiness assessments for nonprofits and churches). Mark Meyerson leads. Client documents live in OneDrive; this repo holds the handoffs, the rules, and the scripts so a cloud session can start with context.

## Where things live

- **Client files (canonical):** Mark's it4causes.org OneDrive, `Documents/ClaudeCoworkit4c/`. Reach it through the Microsoft 365 connector (`sharepoint_folder_search`, then `read_resource` on the folder URI).
  - `02_client_engagements/<year>_<client>/` with `01_packet`, `02_transcripts`, `03_working`, `04_deliverables`
  - `05_delivery_assets/build_tools/` for the Node build scripts
  - `06_archive/` for anything retired (date-stamped)
- **Old location:** `C:\Users\MarkMeyerson\OneDrive - SherpaTech.AI\Documents\ClaudeCoWork\projects\IT4Causes\` on the personal setup. Handoffs written before October 2026 cite it; read those paths as the ClaudeCoworkit4c equivalents.
- **This repo:** `engagements/<year>_<client>/` holds handoffs; `tools/` holds scripts that work in a cloud session.
- The M365 connector reads md, html, docx, pdf, xlsx and pptx, but not `.js`. Build scripts reach this repo only when Mark pushes them from his machine.

## Engagements

- **2026_tbc** (Tabernacle Baptist Church): read `engagements/2026_tbc/TBC_Handoff_2026-09-08.md` first, including all addenda. Page artifact: https://claude.ai/artifact/Cmx6ieGsCWQA2BAZ1kV4Xw
  Sessions board: https://claude.ai/artifact/PNBaUUWtSvo2L8E7BKTMeq (see `engagements/2026_tbc/sessions_board/README.md`)

## Working preferences (Mark)

- No em or en dashes anywhere, including code comments and commit messages. Grep for U+2014 and U+2013 before handing anything back.
- Show a short plan and ask before executing. Use the AskUserQuestion chip picker for choices: 2 to 3 options, recommendation first.
- No flattery, no hedging, no recap paragraphs, no bullet spam.
- Never delete. Archive to `06_archive` with a date stamp.
- Client documents never show version-history mechanics; the version lives in the filename (`_v3_DRAFT`, `_CLIENT`).
- When Mark gives numbers (hours, weights, bands, rates), check them against the source script or spreadsheet and diff every row, not only the ones he names.
- Pages with real names and findings: share person to person. If deployed to Vercel, turn on deployment protection.

## Client prose voice

- Write in the register of Mark's own turns on the call transcripts. Before writing client prose, reread them (speaker label "Mark Meyerson" with a glued timestamp).
- Explain the mechanism, name the tool and the dollar figure. "Honestly," "that's easy to fix," "the reason it matters is." No kickers, no aphorisms, nothing that reads like ChatGPT wrote it.
- "We" is IT4Causes, "you" is the client. First names, including in quotes.
- Plans carry hours and dates, one number per cell (no ranges), split three ways: client, IT4Causes staff, intern.

## Building in a cloud session

- Node 22 and LibreOffice are installed. Word COM and `update_docx_fields.ps1` are Windows only; use `soffice --headless --convert-to pdf` instead, and expect small layout differences from Word.
- Build deps: `npm install docx pptxgenjs react react-dom react-icons sharp` into a scratch folder, then `NODE_PATH=<that>/node_modules node <script>.js`.
- Artifact copy of a hand-written page: `node tools/derive_artifact.js <source.html> <out.html>` strips the document skeleton and adds the explicit dark-theme block, then publish the output.
