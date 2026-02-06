# Skills Frontmatter Schema

All `SKILL.md` files must start with a YAML frontmatter block delimited **strictly** by `---` lines.

## Required frontmatter fields

- `name`: string identifier for the skill.
- `description`: **non-empty** string describing when to use the skill.

## Optional frontmatter fields

- `allowed-tools`: YAML array of strings.
- `tags`: YAML array of strings.

## Example

```yaml
---
name: example-skill
description: A short, non-empty description of the skill.
allowed-tools:
  - Read
  - Write
tags:
  - frontend
  - performance
---
```
