#!/usr/bin/env python3
from __future__ import annotations

import sys
from pathlib import Path
from typing import Any

import yaml


class FrontmatterError(ValueError):
    pass


def parse_frontmatter(content: str, file_path: Path) -> dict[str, Any]:
    lines = content.splitlines()
    if not lines or lines[0].strip() != "---":
        raise FrontmatterError(
            f"{file_path}: missing frontmatter starting delimiter '---'"
        )

    try:
        end_index = lines.index("---", 1)
    except ValueError as exc:
        raise FrontmatterError(
            f"{file_path}: missing frontmatter ending delimiter '---'"
        ) from exc

    frontmatter_raw = "\n".join(lines[1:end_index])
    try:
        data = yaml.safe_load(frontmatter_raw) or {}
    except yaml.YAMLError as exc:
        raise FrontmatterError(
            f"{file_path}: invalid YAML frontmatter: {exc}"
        ) from exc

    if not isinstance(data, dict):
        raise FrontmatterError(
            f"{file_path}: frontmatter must be a YAML mapping/object"
        )

    return data


def validate_string_list(field_name: str, value: Any, file_path: Path) -> list[str]:
    errors: list[str] = []
    if not isinstance(value, list):
        errors.append(
            f"{file_path}: '{field_name}' must be a YAML array of strings"
        )
        return errors
    if any(not isinstance(item, str) or not item.strip() for item in value):
        errors.append(
            f"{file_path}: '{field_name}' must contain only non-empty strings"
        )
    return errors


def validate_metadata(metadata: dict[str, Any], file_path: Path) -> list[str]:
    errors: list[str] = []

    description = metadata.get("description")
    if not isinstance(description, str) or not description.strip():
        errors.append(
            f"{file_path}: 'description' must be a non-empty string"
        )

    if "allowed-tools" in metadata:
        errors.extend(
            validate_string_list("allowed-tools", metadata["allowed-tools"], file_path)
        )

    if "tags" in metadata:
        errors.extend(validate_string_list("tags", metadata["tags"], file_path))

    return errors


def main() -> int:
    repo_root = Path(__file__).resolve().parents[1]
    skills_root = repo_root / ".agent" / "skills"
    skill_files = sorted(skills_root.glob("**/SKILL.md"))

    if not skill_files:
        print(f"No SKILL.md files found under {skills_root}", file=sys.stderr)
        return 1

    errors: list[str] = []
    for skill_file in skill_files:
        content = skill_file.read_text(encoding="utf-8")
        try:
            metadata = parse_frontmatter(content, skill_file)
        except FrontmatterError as exc:
            errors.append(str(exc))
            continue

        errors.extend(validate_metadata(metadata, skill_file))

    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1

    print(f"Validated {len(skill_files)} skill metadata files.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
