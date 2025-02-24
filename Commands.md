# Necessary Commands

## Code for deleting non necessary folders

```
Get-ChildItem .\ -include bin,obj,packages,TestResults -Recurse | foreach ($_) { remove-item $_.fullname -Force -Recurse }
```
