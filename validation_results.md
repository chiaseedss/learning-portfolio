# Minimalist redesign validation

23 October 2026. Local-only Learning Portfolio.

## Passed

- Production build: TypeScript and Vite; final assets about 13.11 kB CSS and 280.63 kB JavaScript (82.22 kB gzip JS).
- 38 legitimate included inventory units preserved. Previous exclusions retained; future CV Robotics placeholder removed.
- Five categories with meaningful matches; combined category/query filtering, case-insensitive technology search, whitespace normalization, and empty results tested.
- Navigation route resolution, homepage and all 38 detail pages rendered using React server rendering. Missing-project handling checked.
- Required detail sections, credits/source-availability messaging and all 38 local documentation files verified, including copies in dist.
- Sensor-based robots remain separate from Computer Vision classification; conflicting C-BioBERT metrics withheld; thesis relation limitation retained.
- No full local Windows paths or detected token patterns in checked browser source/documentation. This is a heuristic check, not a comprehensive security certification.
- Decorative SVG/components, old branding, gradients, keyframe effects, comparison widgets and pipelines absent from current application source.
- Temporary local dev server: homepage and EduROOM project notes returned HTTP 200, correct title and credits confirmed.
- Previous website source/configuration/documentation/build backed up before redesign in .backups/before-minimalist-2026-10-23T13-13-01.497Z. No originals changed.

## Limits and resolved failures

- Browser provider returned no available browsers. Live DOM clicks, screenshots, responsive layouts, screen-reader behavior, focus movement and actual keyboard interaction were not tested in a browser. Route/filter logic and rendered page content were checked in-process instead.
- Initial route-parser escaping error corrected before final build. Privacy checker updated to distinguish HTTPS URLs from Windows drive paths. Both final commands pass.
- Vite's loader cannot read its required parent path inside the sandbox; authorized build and validation retries outside the sandbox passed.
- One PowerShell HTTP check used a reserved variable name; rerun with a task-specific name passed.
- The only publicly retrievable source link was the EduROOM team repository. Other local/README GitHub candidates were inconclusive and remain withheld. No remote write or visibility change performed.

The temporary QA server was stopped after verification. Start your review with npm.cmd run dev; see README.md.
