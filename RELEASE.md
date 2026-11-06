# Release process

How to prepare a new release of `@cap-collectif/ui`. Written for both developers and AI agents: follow the steps in order.

## Overview

A release is one pull request that:

1. bumps `version` in `package.json`,
2. adds a new section at the top of `CHANGELOG.md`.

It contains no other changes.

## 1. List the changes since the last release

Find the last release commit on `master`. Its title is the bare version number, e.g. `7.0.0 (#639)`. Then list everything merged after it:

```sh
git checkout master && git pull
git log --oneline <last-release-sha>..master
```

Ignore merge commits and the previous release commit itself.

## 2. Choose the version number

The project follows [Semantic Versioning](https://semver.org/) and the commits follow [Conventional Commits](https://www.conventionalcommits.org/). Starting from the current `version` in `package.json`, pick the highest applicable bump:

| Commits since last release | Bump | Example |
| --- | --- | --- |
| Any breaking change: `!` after the type (`feat(TabBar)!:`), or a `BREAKING CHANGE:` footer, or a removed/renamed public export or prop | **major** | `6.1.0` → `7.0.0` |
| At least one `feat:` | **minor** | `6.1.0` → `6.2.0` |
| Only `fix:`, `chore:`, `refactor:`, `style:`, deps bumps… | **patch** | `6.1.0` → `6.1.1` |

When unsure whether a change is breaking, check the diff of the public exports (`src/**/index.ts`) and component props. If still unsure, ask a maintainer instead of guessing.

## 3. Create the release branch

The branch name is the version number, without a `v` prefix:

```sh
git checkout -b 7.0.0
```

## 4. Update `CHANGELOG.md`

Add a new section **above** the previous release, just below the legend:

```md
## 7.0.0

`2026-11-06`

- 💥 `TabBar` rebuilt on Ariakit… [#629](https://github.com/cap-collectif/ui/pull/629)
- 🆕 Add readonly styles to `Select` [#638](https://github.com/cap-collectif/ui/pull/638)
- 🐛 `Table` show indeterminate state on select-all checkbox [#628](https://github.com/cap-collectif/ui/pull/628)
```

Rules:

- Heading: `## X.Y.Z`, then the release date in backticks, format `YYYY-MM-DD`.
- One line per change: `- <emoji> <description> [#<PR>](https://github.com/cap-collectif/ui/pull/<PR>)`.
- Pick the emoji from the legend at the top of the changelog:

  | Emoji | Meaning | Usual commit types |
  | --- | --- | --- |
  | 💥 | Breaking | anything with `!` / `BREAKING CHANGE` |
  | 🆕 | Feature | `feat` |
  | 🐛 | Bug fix | `fix` |
  | 🛠 | Refactor | `refactor`, `chore`, `ci`, `build`, deps bumps |
  | 💄 | Style | `style`, visual-only changes |

- Rewrite commit titles into readable English sentences. Put component names in backticks (`` `Select` ``) and start with the component when the change concerns one.
- For breaking changes, say what consumers must change (e.g. "`TabHeaderProps` is no longer exported").
- Order: 💥 first, then 🆕, 🐛, 💄, 🛠.
- Related commits may be grouped on one line, listing all PRs: `[#627](…) & [#631](…)`.
- Use the PR number from the commit title (`(#638)`), not the commit SHA.

## 5. Update `package.json`

Change only the `version` field:

```json
"version": "7.0.0",
```

## 6. Commit, push and open the PR

```sh
git add CHANGELOG.md package.json
git commit -m "chore: release 7.0.0"
git push -u origin 7.0.0
```

Open a pull request against `master`:

- **Title**: the version number only, e.g. `7.0.0`.
- **Description**: the content of the new changelog section (from `## 7.0.0` to the last bullet).

With the GitHub CLI:

```sh
gh pr create --base master --title "7.0.0" --body-file <file-containing-the-changelog-section>
```

## 7. After the merge

Done by a maintainer once the PR is merged on `master`:

1. Tag the release commit (annotated tag, `v` prefix):

   ```sh
   git checkout master && git pull
   git tag -a v7.0.0 -m "7.0.0"
   git push origin v7.0.0
   ```

2. Publish the package to npm (`npm publish`; `yarn build` runs automatically through the `prepare` script).

## Notes for AI agents

- Don't commit, push, open the PR, tag or publish unless you were explicitly asked to. Tagging and publishing are irreversible: always leave them to a maintainer.
- If the version bump is ambiguous (e.g. a possibly breaking change), state your reasoning and let a human confirm before creating the branch.
- Don't modify any file other than `CHANGELOG.md` and `package.json` in a release PR.
