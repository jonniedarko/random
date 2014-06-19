command line

```bat
@echo off
 
DOSKEY ls=dir
DOSKEY clear=cls
DOSKEY pwd=echo %cd%
DOSKEY subl="C:\Program Files\Sublime Text 2\sublime_text.exe" $*
DOSKEY mongod="C:\mongodb\bin\mongod.exe"
DOSKEY mongo="C:\mongodb\bin\mongo"

set "DESKTOP=C:\Users\a505194\Desktop"
set "MONGO=C:\mongodb\bin"

set "HTTP_PROXY=http://someurl:8000"
set "HTTPs_PROXY=http://someurl:8000"
cd C:\
```
