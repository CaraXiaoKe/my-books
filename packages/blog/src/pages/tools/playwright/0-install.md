---
layout: ../../../layouts/PostLayout.astro
title: 'playwright 安装和运行'
---

1.Playwright安装

```bash
npm init playwright@latest
```
按照操作步骤，操作Enter即可。需要注意的是在`Install Playwright browsers (can be done manually via 'yarn playwright install')`这一步默认会同时安装chromium/firefox/webkit浏览器，如果不需要默认安装所有浏览器，操作N跳过安装，然后后续手动安装内核即可

2.如果第一步跳过内浏览器安装，那么需要手动安装指定内核

```bash
npx playwright install chromium
```
可通过npx playwright install --help查看支持安装浏览器列表

3.运行

后台运行
```bash
npx playwright test
```
UI可视化运行
```bash
npx playwright test --ui
```
用例录制
```bash
npx playwright codegen http://demo.playwright.dev/todomvc
```

参考链接：
- [Playright安装](https://playwright.dev/docs/intro)
- [Playright安装指定浏览器](https://playwright.dev/docs/browsers#install-browsers)
- [Playright用例录制](https://playwright.dev/docs/codegen#recording-a-test)

