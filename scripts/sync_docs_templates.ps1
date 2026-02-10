# Sync docs from templates
# Copies templates to docs/ if they don't exist or have changed.

$ErrorActionPreference = "Stop"

$rootDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$templateDir = Join-Path $rootDir "docs\_templates"
$docsDir = Join-Path $rootDir "docs"

$templates = Get-ChildItem -Path $templateDir -Filter "*.template.md"

foreach ($template in $templates) {
  $baseName = $template.Name -replace '\.template\.md$', '.md'
  $targetFile = Join-Path $docsDir $baseName

  if (-not (Test-Path $targetFile)) {
    Copy-Item -Path $template.FullName -Destination $targetFile
    Write-Host "Creado: $baseName" -ForegroundColor Green
  } else {
    $templateHash = Get-FileHash -Path $template.FullName -Algorithm MD5
    $targetHash = Get-FileHash -Path $targetFile -Algorithm MD5
    if ($templateHash.Hash -ne $targetHash.Hash) {
      Write-Host "Saltado: $baseName (ya modificado por el proyecto)" -ForegroundColor Yellow
    }
  }
}

Write-Host ""
Write-Host "Sincronizacion completada." -ForegroundColor Cyan
