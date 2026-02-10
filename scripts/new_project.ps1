param(
  [Parameter(Mandatory=$true)]
  [string]$Name,

  [string]$BaseDir = "$env:USERPROFILE\Projects"
)

$ErrorActionPreference = "Stop"

# Resolve template root
$templateDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$templateRoot = Resolve-Path (Join-Path $templateDir "..")

$target = Join-Path $BaseDir $Name
if (Test-Path $target) {
  throw "Ya existe un proyecto con ese nombre en: $target"
}

# Create project directory and copy template
New-Item -ItemType Directory -Path $BaseDir -Force | Out-Null
Copy-Item -Path $templateRoot -Destination $target -Recurse

# Remove .git from the copy so it's a fresh project
$gitDir = Join-Path $target ".git"
if (Test-Path $gitDir) {
  Remove-Item -Path $gitDir -Recurse -Force
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host "  Proyecto creado: $Name" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Ubicacion: $target" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Siguientes pasos:" -ForegroundColor Yellow
Write-Host "  1) Abre la carpeta en Google Antigravity" -ForegroundColor White
Write-Host "  2) Rellena PROJECT_BRIEF.md con los datos del cliente" -ForegroundColor White
Write-Host "  3) Usa CLIENTE_CHECKLIST.md para saber que pedirle" -ForegroundColor White
Write-Host "  4) Escribe /kickoff en el chat" -ForegroundColor White
Write-Host ""
