# Skill Installer Update Log

## 2026-02-05

- Updated `/opt/codex/skills/.system/skill-installer/SKILL.md` in the **Scripts** section.
- Replaced the fixed escalation instruction with a conditional rule:
  - Request escalation when the environment supports it.
  - When `approval_policy=never`, run without asking for approval and only report real limits if commands fail.
- Added an operational fallback mini-block for network/auth failures:
  - retry once,
  - switch method,
  - then report exact failure and request minimal user input.
