@echo off
chcp 65001 >nul
title 构式(SHIT)学术期刊网站 - 本地服务器+隧道
echo ============================================
echo   构式(SHIT) 学术期刊网站 - 启动脚本
echo   永久网址: https://shitjournal2026.loca.lt
echo ============================================
echo.
echo [1/2] 启动本地 HTTP 服务器 (端口 8080)...
start /min "HTTP Server" cmd /c "cd /d "%~dp0" && "%LOCALAPPDATA%\..\Roaming\TRAE SOLO CN\ModularData\ai-agent\vm\tools\python\python.exe" -m http.server 8080"
timeout /t 2 /nobreak >nul

echo [2/2] 启动 HTTPS 隧道 (固定子域名: shitjournal2026)...
cd /d "%~dp0"
"%LOCALAPPDATA%\..\Roaming\TRAE SOLO CN\ModularData\ai-agent\vm\tools\node\node.exe" tunnel.js

echo.
echo 隧道已断开。按任意键退出...
pause >nul
