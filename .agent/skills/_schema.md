# Esquema de metadatos para `SKILL.md`

Este documento define el contrato mínimo de frontmatter YAML para todos los archivos `.agent/skills/*/SKILL.md`.

## Frontmatter requerido

Todos los `SKILL.md` deben iniciar con un bloque YAML delimitado por `---`.

Campos obligatorios:

- `name` (`string`): identificador único de la skill. Debe coincidir con el nombre del directorio padre.
- `description` (`string`): descripción breve (1–2 frases) de objetivo y alcance.
- `version` (`string`): versión semántica `MAJOR.MINOR.PATCH` (ej. `1.0.0`).
- `allowed-tools` (`array<string>`): herramientas permitidas para ejecutar la skill.

## Campos opcionales

- `tags` (`array<string>`): etiquetas para clasificación y discovery.

## Campos permitidos

La whitelist completa de campos es:

- `name`
- `description`
- `version`
- `allowed-tools`
- `tags`

Cualquier otro campo debe considerarse inválido y el lint debe fallar.

## Ejemplo válido

```yaml
---
name: performance-audit
description: Optimiza Core Web Vitals y elimina cuellos de botella de renderizado.
version: 1.0.0
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"]
tags: ["performance", "web", "frontend"]
---
```
