# Skill Installer Failure/Success Response Templates

- Skill already exists at destination:
  "Skill '{skill_name}' is already installed at {dest_path}. Choose a different name/path or remove the existing folder and retry."
- Insufficient permissions/auth required:
  "I couldn't access that repo/path with current credentials. Set `GITHUB_TOKEN` or `GH_TOKEN` (with repo access) and retry."
- Invalid URL/path:
  "That GitHub URL/path looks invalid or unsupported. Provide a URL like `https://github.com/<owner>/<repo>/tree/<ref>/<path>` or use `--repo` + `--path`."
- Success:
  "Installed skill '{skill_name}' to {dest_path}. Restart Codex to pick up new skills."
  "Suggested check: list installed skills from `$CODEX_HOME/skills` to confirm it appears."
