# Handoff: TBC baseline findings, Version A/B and the v2 rewrite
2026-09-08 · Building a second telling of the TBC AI Readiness findings, comparing it to the scorecard-led report, then rewriting both in Mark's voice.

## Objective
Give Tabernacle Baptist Church (TBC) leadership the September 2026 baseline findings in a form Mark is comfortable presenting: plain voice, first names, a concrete "Your Trail" plan with hours, no report-card feel. Two documents, both now at v2 draft, awaiting Mark's read-through.

## Current state
- v2 of both documents is built, dash-free, banned-word-free, and delivered. Mark has not yet reviewed them.
- The web page v2 is published as a private artifact (same URL as the first draft, version label "v2 draft, plain voice"): https://claude.ai/code/artifact/5c86b477-b396-4529-9930-d5695aec27d4
- v1.1 CLIENT report and the first vB page are untouched, per Mark ("we can keep these versions and say we're on version 2").
- Project memory and the workspace inventory (md only) are updated. The Word inventory regenerates on the Monday scheduled task.

## Decisions (and why)
- **Voice for both documents: the register from Mark's own turns on the TBC call transcripts.** My first samples (tidy, declarative, "name the tool, the use, the guardrail") were rejected as "fairly similar to what I read." Samples written from the transcripts were approved ("Yes, rewrite both like this"). Register: explain the mechanism, name the tool and the dollar figure, "honestly," "that's easy to fix," "the reason it matters is," no kickers or aphorisms, "we" is IT4Causes and "you" is TBC.
- **First names everywhere, including quotes** (Mark chose this over role-based attribution). Sterling, April, Ron, Jessica.
- **Sabrina reduced to one line**, in the scope note and the page footer: "Sabrina's policy draft is included; we have not interviewed her yet." Mark approved this exact sentence. The "voice not yet heard" card, the dashed fifth step, and every "fifth voice" line are gone. Reason: Mark didn't like how her absence was positioned, not that it doesn't matter.
- **"Your Trail: what we're going to do" replaces the vague roadmap in both.** Mark wants readers to leave the meeting knowing "this is the program, this is the timeline, how many meeting hours to expect." Numbers come from the scoping spreadsheet and build_tbc_project_scoping.js.
- **Version B's footer weights corrected to the published scorecard's** (25/25/20/10/10/10). Mark's brief had 20/20/20/15/15/10, which gives 43.8, not 42. The scorecard's weights give 42.45. Any brief that quotes weights or bands gets checked against build_scorecard.js first.
- **Re-check markers are January 2027 (light) and September 2027 (full)**, matching the scorecard, not "6-month and 12-month" from the brief.
- **Page v2 band names:** getting started / building / ready to expand / established at 0-39 / 40-59 / 60-79 / 80-100, so the boundaries match the scorecard's numeric bands. "Cautious mode" appears once per document, explained plainly, because the scorecard graphic still shows it.
- **Which version is better (comparison memo):** A is the record, B is the presentation; send B as what leadership reads, A attached as the full assessment. Mark did not dispute this; he moved on to tone.
- **Segmentation: recommended "light"** (promote the approved page into 04_deliverables under a CLIENT name; no subfolders) over "physical" (version subfolders, which would require editing three build scripts' output paths). Mark has not chosen yet.
- **Report v2 keeps v1.1's structure** (scorecard first, six areas, then the plan and appendices). Mark said "the content is good, the narrative is good"; only delivery was the problem.

## Dead ends, do not retry
- **Writing in a "clean consultant" voice and calling it plain.** Obeying the banned-word list in Context/brand-voice.md is not enough; rule 4 there ("if it reads like ChatGPT wrote it, rewrite it") is the one that bit. The line Mark quoted as the problem: "turned out to be one of the most valuable conversations in this assessment. It surfaced three answers... so it lands rather than alarms."
- **Sabrina as a featured absence** (pending card, dashed step, repeated mentions). Rejected.
- **Vague closing roadmaps** ("shared Projects, reconcile the drafts, OneDrive session, both boards"). Rejected as "kind of vague." Needs hours and dates.
- **Weights from a prose brief.** They were wrong. Use the scorecard script.
- **Browser-pane screenshots for verification** in this environment: they time out when the pane is hidden and IntersectionObserver fires after the captured frame. Headless Chrome works: `chrome.exe --headless=new --disable-gpu --hide-scrollbars --force-prefers-reduced-motion --virtual-time-budget=8000 --window-size=1280,9000 --screenshot=...`, then tile with sharp. Headless enforces a minimum window width, so a 390px "mobile" render lays out wider and clips; use the pane at 375px for mobile wrapping when it is visible.
- **Bash heredocs containing apostrophes for the build script.** Failed on quoting. Use the Write tool for scripts.
- **Python and markitdown** are not on this machine.

## Artifacts
All paths under `C:\Users\MarkMeyerson\OneDrive - SherpaTech.AI\Documents\ClaudeCoWork\projects\IT4Causes\02_client_engagements\2026_tbc\`.
- `03_working/TBC_AI_Readiness_Assessment_2026-09_v2_DRAFT.docx` / `.pdf` (16 pages) / `.md` (4,851 words): **draft, current.** Built by `05_delivery_assets/build_tools/build_tbc_report_v2.js` (new content model; renderer lines are copied from build_tbc_report.js).
- `03_working/TBC_AfterTheYes_2026-09_v2_DRAFT.html`: **draft, current.** Hand-written single file; edit directly, then grep for em and en dashes (the two Unicode dash characters, U+2014 and U+2013). Artifact copy is derived by stripping the head and adding a `:root[data-theme="dark"]` twin (script logic is in the session transcript; the derived file lived in the session scratchpad and is not kept).
- `03_working/TBC_Version_Comparison_2026-09-08.docx`: internal memo, current, from `build_tools/build_tbc_version_comparison.js`.
- `03_working/TBC_AfterTheYes_2026-09_vB_DRAFT.html`: first Version B. **Superseded by v2**, kept on purpose. Its footer weights were corrected to 25/25/20/10/10/10 on 09-08.
- `04_deliverables/TBC_AI_Readiness_Assessment_2026-09_v1-1_CLIENT.docx` / `.pdf`, `TBC_Readiness_Scorecard_2026-09.png`, `TBC_AI_Readiness_Readout_2026-09_v1-1.pptx`: v1.1 final, **superseded in voice by v2 draft**, kept on purpose.
- `03_working/TBC_Project_Scoping_2026-09_DRAFT.docx` / `.md` / `.pdf`: hours source, reconciled 09-04 against `C:\Users\MarkMeyerson\OneDrive - SherpaTech.AI\TBC estimates AI assessment.xlsx`.
- Artifact URL (page): https://claude.ai/code/artifact/5c86b477-b396-4529-9930-d5695aec27d4. Private until shared from its share menu. Republish from another session by passing this URL as `url`.

## Verbatim essentials
- Scores: Leadership 54, Governance 25, Data 25, Skills 52, Technology 54, Workflow 71. Overall 42, "Cautious mode" (40 to 59).
- Weights: 54 x 0.25 + 25 x 0.25 + 25 x 0.20 + 52 x 0.10 + 54 x 0.10 + 71 x 0.10 = 42.45.
- Interviews: Ron Simmons July 30, April Kennedy August 6, Jessica Corbitt August 14, Sterling Severns September 2, 2026. Planning sessions June 29 and July 13. Three policy drafts from June (Sterling, April, Sabrina).
- Your Trail hours (church side, from the scoping xlsx): P1 policy 4, P3 OneDrive 3, P4 giving data to boards 3, P11 phone attendant 6 ($50 to $100 a month), P6 procedures by voice 4, P2 memory library 10 (+6 intern), P7 music library 6 (+30 intern), P8 board onboarding 3 (+2 intern), P9 Dropbox 6 (+8 intern). Total 45 project hours, 48 intern hours. Check-ins: monthly 6 hours a year, January 2027 light re-check 3 hours, September 2027 full re-check 4 hours (13 total). IT4Causes 33 to 54 hours, $5,280 to $8,640 at $160/hr (scoping doc only, not in the client documents).
- Approved Sabrina line: "Sabrina's policy draft is included; we have not interviewed her yet."
- Page title: "After the Yes." Section names in v2: Where we are / Four people / Six questions / Quick wins / The number / Your trail.
- Build command: `NODE_PATH=/c/Users/MarkMeyerson/dev/it4c-build/node_modules node <script>.js` from `05_delivery_assets/build_tools/`. PDF via a hidden Word COM instance (`New-Object -ComObject Word.Application`, Visible false, SaveAs format 17) works even when Mark has Word open.

## Working preferences
- No em or en dashes anywhere, including code comments. Grep before handoff.
- Ask before executing; use AskUserQuestion for option-picking (he prefers the chip picker). Show a short plan first.
- No flattery, no hedging, no recap paragraphs, no bullet spam, 2 to 3 options with a recommendation.
- Never delete; archive to 06_archive with a date stamp. Numbered program folders stay at the IT4Causes root.
- Client documents never show version-history mechanics; version lives in filenames.
- When Mark supplies numbers (hours, weights, bands) check them against the source scripts and spreadsheet, and diff every row, not just the ones he mentions.
- For TBC prose: reread Mark's own turns in the transcripts before writing. Speaker label is "Mark Meyerson" with a glued timestamp; extract with `unzip -p file.docx word/document.xml | sed -e 's/<\/w:p>/\n/g' -e 's/<[^>]*>//g' | grep 'Mark Meyerson'`.
- Real names plus the Sterling ChatGPT finding are on the page: share links person to person; if deployed to Vercel, turn on deployment protection.

## Open items
- Next step: Mark reads v2 of both and marks up anything that still sounds written rather than said. He offered to react to samples section by section if needed.
- Then: decide band-name treatment (page uses four plain names; scorecard graphic still says "Cautious mode"; regenerating the scorecard without the band label is a small change to build_scorecard.js).
- Then: decide segmentation (light vs physical) and promote v2 files into 04_deliverables under CLIENT names once approved.
- Then: optional trim of the report (4,850 words): the six "What people said" paragraphs are the easiest cut since the quotes now also live in the prose.
- Then: Vercel deployment of the page, with deployment protection, if Mark wants it outside the artifact link.
- Unresolved from earlier: Sabrina interview yes or no; Mark's Owner role on the Claude workspace; the readout deck (pptx) has not been rewritten in the new voice; the ~90 loose files at the IT4Causes root were explicitly left alone pending his say-so (may be moot after his 09-04 cleanup).
- Housekeeping: `Workspace-File-Inventory.docx` is behind the md until the Monday task runs.

## Suggested opening prompt
> Read `02_client_engagements/2026_tbc/03_working/TBC_Handoff_2026-09-08.md` first. I've reviewed v2 of the TBC report and the After the Yes page. Here are my markups: [paste]. Apply them to both, keep the voice rules in the handoff, rebuild the report with build_tbc_report_v2.js, re-derive and republish the artifact at the URL in the handoff, and grep both files for dashes before you hand them back.

## Addendum, 2026-09-08 evening session

Mark chose (chip picker, all recommendations accepted): audience first is Sterling and April at the Sept 10 check-in; the After the Yes page is the presentation, presented live from a screen, phones get the link after; the docx stays the record; the v1.1 readout pptx is retired, not rewritten; content stays v2 until Mark reads it and marks up what still sounds written; the replicable system is one engagement data file per client feeding the existing renderers, built after TBC ships, BRRC as the first test (6 to 8 hours), no generic page template yet.

Built: `03_working/TBC_AfterTheYes_2026-09_v3_DRAFT.html`, the v2 words unchanged plus a presenter mode (P key or the Present link in the top bar; 15 beats; arrows move; one question open at a time; D shows the spoken paragraphs, hidden by default so each beat fits a laptop screen; Esc exits). Tested at 1280x800 in the browser pane, no console errors. The artifact URL still serves v2 on purpose so Mark can read it undisturbed. Republish v3 to the same artifact URL after his markup is applied.

Notion: TBC status page "Where we are" carries a Sept 8 entry. Memory: `tbc-presentation-and-replication-plan.md`.

Next: Mark reads the v2 artifact and marks up; apply markup to v3 and to build_tbc_report_v2.js; republish the artifact; promote both to 04_deliverables under CLIENT names; then start the engagement data file with BRRC.

## Addendum 2, 2026-09-08 late: Mark's markups applied, v3 published

Mark's markups (chip-picker answers in brackets): Jessica "don't say AI" callout box removed [box only; her point stays as prose]; "OneDrive session" became "Where files live, and what Claude can see" (Microsoft-side session: where files live, sensitivity labels, Claude connector limited to chosen folders, same check for any other AI tool); "Rule one: never on a laptop" replaced with "reports with household or giving data stay inside the tenant"; giving-data item rewritten plainly ("The giving-data question goes to the boards"); "Procedures by voice" became "Write down how things run"; "Memory library" became "Organizational context" (shared Projects with written instructions, shared skills, church records in a church-owned library) [10 hours kept]; Dropbox cleanup folded into the files project as an intern-led last step [no separate line]; "Nothing in this plan costs money" sentence removed; check-ins became monthly one-hour working sessions (12 hours), light re-check June 2027 (3 hours) [June], interviews and a new assessment presented September 2027 (4 hours). Eight projects; church project hours about 40; working sessions and re-checks about 19; intern about 48.

Files: page `TBC_AfterTheYes_2026-09_v3_DRAFT.html` (words plus presenter mode), report `TBC_AI_Readiness_Assessment_2026-09_v3_DRAFT.docx/.md/.pdf` (16 pages, from `build_tbc_report_v2.js`, which now writes v3 filenames), scorecard PNG regenerated with the Jun 2027 slot (`build_scorecard.js` REVIEWS changed). Artifact republished at the same URL, label "v3, Mark markups, presenter mode". All dash-free.

Not yet reconciled: `build_tbc_project_scoping.js` and the scoping xlsx still carry P9 Dropbox as a separate project, P3 as "OneDrive session", and the January 2027 re-baseline. Mark's closing note "many hours that were mine" was not resolved: he may want the IT4Causes hours per project visible, which today live only in the scoping doc.

## Addendum 3, 2026-09-08: three-way hours

Mark's PDF review: every trail row now shows three hours columns (your time, IT4Causes staff, intern) in the report and a three-part chip on the page; the working-sessions table gained an IT4Causes column; "Things to keep an eye on" and "One more thing" removed from the report as zero value. Numbers, from Mark: policy 4 / 0.5 / 0; files and Claude access 1 / 3 / 0; giving data 1 / 0 / 0; phone 2 to 3 / 6 / 0 plus $50 to $100 a month; Systems documentation (renamed from Write down how things run) 4 to 10 / 3 / 10; Organizational context 2 to 4 / 4 to 6 / 6; music library 6 / 4 to 6 / 30; board onboarding 2 to 3 / 2 to 3 / 2. Sessions: monthly 12 / 12; June re-check 3 / 4 to 6; September re-assessment 4 / 10 to 15. Totals: projects about 25 to 30 TBC, 22 to 28 IT4Causes, 48 intern; sessions 19 TBC, 26 to 33 IT4Causes. Mark quoted $116 an hour as the staff rate (the scoping doc still says $160; reconcile before any dollar figure goes to the client). Report and page rebuilt, artifact republished ("v3b, three-way hours").

## Addendum 4, 2026-09-08: no hour ranges

Mark: no ranges, one number per cell, midpoint of each range he gave. Phone 2.5 TBC; Systems documentation 7 TBC; Organizational context 3 TBC / 5 IT4Causes; music library 5 IT4Causes; board onboarding 2.5 / 2.5; June re-check 5 IT4Causes; September re-assessment 12.5 IT4Causes. Totals: projects 27 TBC, 25 IT4Causes, 48 intern; sessions and re-checks 19 TBC, 29.5 IT4Causes. Rebuilt and republished (label v3c).

## Addendum 5, 2026-10-06: moved to the IT4Causes Claude account

Mark is moving his work from his personal Claude account to the IT4Causes account. TBC first, then the other engagements the same way.

- **Files:** the canonical copy is Mark's it4causes.org OneDrive, `Documents/ClaudeCoworkit4c/02_client_engagements/2026_tbc/`, reached through the Microsoft 365 connector. Everything listed under Artifacts above is there, including the v3 page and report and `05_delivery_assets/build_tools/`. Read the SherpaTech paths above as this location.
- **Page:** republished in the IT4Causes account from `03_working/TBC_AfterTheYes_2026-09_v3_DRAFT.html` (v3c content, unchanged) at https://claude.ai/artifact/Cmx6ieGsCWQA2BAZ1kV4Xw, label "v3c, migrated from personal account". This replaces the old artifact URL, which belongs to the personal account and can't be opened from here. Private; share from its Share menu.
- **Repo:** `it4causes-org/IT4c-Client-work` now holds this handoff, `CLAUDE.md` (working preferences and voice rules lifted from this handoff), and `tools/derive_artifact.js` (the derive step, kept this time).
- **Not migrated yet:**
  - The build scripts. The connector can't read `.js` files, so Mark pushes `05_delivery_assets/build_tools/` to the repo from his machine.
  - `Context/brand-voice.md`. It isn't in the it4causes OneDrive.
  - Personal-account memory (`tbc-presentation-and-replication-plan.md` and others). Mark chose to rely on this handoff instead.
  - The Notion TBC status page.
  - The Monday workspace-inventory scheduled task.
  - The scoping xlsx (`TBC estimates AI assessment.xlsx`). It sat outside the engagement folder.
- **New since 09-08:** a recording named "AI Adoption for TBC", dated 2026-10-06, is in Mark's OneDrive. It hasn't been reviewed yet.
- **Still open from Addenda 2 to 4:**
  - Reconcile the scoping doc and xlsx with v3: no separate P9 Dropbox, P3 renamed, June 2027 re-check.
  - Settle the staff rate: $116 or $160.
  - Move v3 into `04_deliverables` under CLIENT names.
  - Start the BRRC engagement data file.
