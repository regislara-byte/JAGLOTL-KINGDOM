@echo off

git add .

git commit -m "deploy: kingdom update"

git push

start https://github.com/regislara-byte/JAGLOTL-KINGDOM

timeout /t 2

start https://regislara-byte.github.io/JAGLOTL-KINGDOM/

pause