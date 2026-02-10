# 🚀 Plantilla Pro — Webs de Cliente

Plantilla de arranque rápido para proyectos web de PYMEs, empresas y profesionales en Google Antigravity.

**¿Qué consigues con esta plantilla?**
- Webs con diseño impactante que NO parecen hechas con IA
- Flujo de trabajo guiado de principio a fin
- Documentación automática de cada decisión
- Patrones de diseño únicos por sector

---

## Cómo empezar un proyecto nuevo

### Paso 1: Copiar la plantilla
Ejecuta en PowerShell:
```powershell
.\scripts\new_project.ps1 -Name "NombreDelCliente"
```

### Paso 2: Rellenar el Brief
Abre [`PROJECT_BRIEF.md`](PROJECT_BRIEF.md) y complétalo con toda la información del cliente. Cuanto más completo, mejor resultado.

> 💡 Usa [`CLIENTE_CHECKLIST.md`](CLIENTE_CHECKLIST.md) para saber qué pedirle al cliente antes de empezar.

### Paso 3: Arrancar el proyecto
En el chat de Antigravity, escribe:
```
/kickoff
```
Esto investigará el sector, propondrá el diseño y generará el plan.

### Paso 4: Construir
Cuando el plan esté aprobado:
```
/scaffold
```
Esto creará la estructura del proyecto y la primera página funcional.

### Paso 5: Revisar y pulir
```
/qa_polish
```
Revisión automática de calidad visual en desktop y móvil.

### Paso 6: Previsualizar
```
/preview
```
Arranca la web y captura screenshots para enseñar al cliente.

---

## Secuencia completa de workflows

| Orden | Comando | Qué hace |
|-------|---------|----------|
| 1 | `/kickoff` | Investiga, planifica, define diseño |
| 2 | `/scaffold` | Crea la estructura y primera página |
| 3 | `/build_verify` | Arranca la web y verifica que funciona |
| 4 | `/qa_polish` | Revisión de calidad visual |
| 5 | `/preview` | Capturas y previsualización |
| 6 | `/test_all` | Comprobación técnica (build, lint) |
| 7 | `/release_proof` | Checklist final de entrega |

> Los comandos `/ci_setup`, `/security_harden` y `/visual_regress` son opcionales. Úsalos solo en proyectos grandes o con backend.

---

## Estructura del repo

```
📁 Plantilla-repo/
├── PROJECT_BRIEF.md          ← Lo primero que rellenas
├── CLIENTE_CHECKLIST.md       ← Qué pedir al cliente
├── README.md                  ← Estás aquí
├── .agent/
│   ├── rules/agent_rules.md   ← Reglas de diseño anti-genérico
│   ├── skills/                ← 35+ herramientas de diseño y desarrollo
│   └── workflows/             ← Comandos /slash
├── docs/
│   ├── _templates/            ← Plantillas de documentación
│   └── ...                    ← Docs generados durante el proyecto
└── scripts/
    └── new_project.ps1        ← Script para crear proyectos nuevos
```

---

## Documentación

Ver [`docs/README.md`](docs/README.md) para el índice completo y el orden en que se van rellenando los documentos.
