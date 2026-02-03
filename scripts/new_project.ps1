param(
  [Parameter(Mandatory=$true)][string]$Name,
  [string]$BaseDir = "$env:USERPROFILE\Projects"
)

$ErrorActionPreference = "Stop"

$templateDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$templateRoot = Resolve-Path (Join-Path $templateDir "..")

$target = Join-Path $BaseDir $Name
if (Test-Path $target) {
  throw "Target already exists: $target"
}

New-Item -ItemType Directory -Path $BaseDir -Force | Out-Null
Copy-Item -Path $templateRoot -Destination $target -Recurse

Write-Host "Created: $target"
Write-Host "Next:"
Write-Host "  1) Open the folder in Antigravity"
Write-Host "  2) Fill PROJECT_BRIEF.md"
Write-Host "  3) Run /kickoff"
