# NPM Audit Report (snapshot)

Date: 2025-10-17

This file is an audit snapshot captured during the automated fix process. It lists vulnerabilities that were detected and which require non-trivial/upgrading steps.

Summary:
- Total vulnerabilities: 9 (6 high, 3 moderate)
- Many issues are transitive and originate from `react-scripts` and its toolchain (svgo, @svgr/webpack, resolve-url-loader, webpack-dev-server).

Recommended remediation steps:
1. Consider migrating off `react-scripts` (Create React App) to a modern toolchain (Vite or Next.js) to get updated dependencies.
2. Alternatively, update `react-scripts` to a version that pulls in patched transitive dependencies. This may require bumping React tooling.
3. Run `npm audit` and `npm audit fix --force` only after verifying the compatibility and running full tests in CI. The force-fix may cause breaking changes.

For full JSON output, see the repo-level audit output (generated during CI): `audit-results.json`.

---

(Generated automatically during local repair run.)
