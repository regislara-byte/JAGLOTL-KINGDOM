@echo off
title JAGLOTL KINGDOM PUSH

echo.
echo ======================================
echo      JAGLOTL KINGDOM PUSH SYSTEM
echo ======================================
echo.

git status

echo.
set /p msg=Commit Message:

echo.
echo [1/5] Adding files...
git add .

echo.
echo [2/5] Commit...
git commit -m "%msg%"

echo.
echo [3/5] Push...
git push

echo.
echo [4/5] Opening Repo...
start https://github.com/regislara-byte/JAGLOTL-KINGDOM

echo.
echo [5/5] Opening Live Page...
start https://regislara-byte.github.io/JAGLOTL-KINGDOM/

echo.
echo ======================================
echo     KINGDOM PUSH COMPLETE
echo ======================================
pause