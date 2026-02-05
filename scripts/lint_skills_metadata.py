#!/usr/bin/env python3
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SKILLS_DIR = ROOT / ".agent" / "skills"

REQUIRED_FIELDS = {"name", "description", "version", "allowed-tools"}
OPTIONAL_FIELDS = {"tags"}
ALLOWED_FIELDS = REQUIRED_FIELDS | OPTIONAL_FIELDS
SEMVER_RE = re.compile(r"^\d+\.\d+\.\d+$")


def parse_frontmatter(text: str, path: Path) -> dict[str, object]:
    if not text.startswith("---\n"):
        raise ValueError(f"{path}: missing frontmatter start delimiter '---'")

    end = text.find("\n---\n", 4)
    if end == -1:
        raise ValueError(f"{path}: missing frontmatter end delimiter '---'")

    block = text[4:end]
    meta: dict[str, object] = {}

    for raw_line in block.splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#"):
            continue
        if ":" not in line:
            raise ValueError(f"{path}: invalid frontmatter line: {raw_line!r}")

        key, value = line.split(":", 1)
        key = key.strip()
        value = value.strip()

        if value.startswith("[") and value.endswith("]"):
            inner = value[1:-1].strip()
            if not inner:
                parsed: object = []
            else:
                parsed = [item.strip().strip('"').strip("'") for item in inner.split(",")]
        else:
            parsed = value.strip('"').strip("'")

        meta[key] = parsed

    return meta


def validate(path: Path) -> list[str]:
    errors: list[str] = []
    text = path.read_text(encoding="utf-8")

    try:
        meta = parse_frontmatter(text, path)
    except ValueError as exc:
        return [str(exc)]

    keys = set(meta.keys())

    missing = REQUIRED_FIELDS - keys
    if missing:
        errors.append(f"{path}: missing required fields: {', '.join(sorted(missing))}")

    extra = keys - ALLOWED_FIELDS
    if extra:
        errors.append(f"{path}: unsupported fields: {', '.join(sorted(extra))}")

    if "name" in meta:
        expected_name = path.parent.name
        if not isinstance(meta["name"], str) or meta["name"] != expected_name:
            errors.append(f"{path}: name must match directory '{expected_name}'")

    if "description" in meta:
        if not isinstance(meta["description"], str) or not meta["description"].strip():
            errors.append(f"{path}: description must be a non-empty string")

    if "version" in meta:
        version = meta["version"]
        if not isinstance(version, str) or not SEMVER_RE.match(version):
            errors.append(f"{path}: version must follow semantic versioning MAJOR.MINOR.PATCH")

    if "allowed-tools" in meta:
        tools = meta["allowed-tools"]
        if not isinstance(tools, list) or not tools or not all(isinstance(t, str) and t.strip() for t in tools):
            errors.append(f"{path}: allowed-tools must be a non-empty array of strings")

    if "tags" in meta:
        tags = meta["tags"]
        if not isinstance(tags, list) or not all(isinstance(t, str) and t.strip() for t in tags):
            errors.append(f"{path}: tags must be an array of non-empty strings")

    return errors


def main() -> int:
    if not SKILLS_DIR.exists():
        print(f"Skills directory not found: {SKILLS_DIR}")
        return 1

    skill_files = sorted(SKILLS_DIR.glob("*/SKILL.md"))
    if not skill_files:
        print("No SKILL.md files found.")
        return 0

    all_errors: list[str] = []
    for skill_file in skill_files:
        all_errors.extend(validate(skill_file))

    if all_errors:
        print("Skill metadata lint failed:")
        for err in all_errors:
            print(f"- {err}")
        return 1

    print(f"Skill metadata lint passed for {len(skill_files)} files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
