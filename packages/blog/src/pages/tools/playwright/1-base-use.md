---
layout: ../../../layouts/PostLayout.astro
title: 'playwright 基本用法'
---

以官方默认内置示例代码进行拆解和分析

```typescript
import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);

  const getStarted = page.getByRole('link', { name: 'Get started' });

  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  await getStarted.click();
  
  await expect(page).toHaveURL(/.*intro/);
});
```

基本上Playwright所有的操作项均是异步的，可通过await进行串行编程，下边对示例进行逐行分析

1.跳转到指定地址

```typescript
 await page.goto('https://playwright.dev/');
```

2.期望当前页面的title包含指定单词，可传字符串或正则

```typescript
 await expect(page).toHaveTitle(/Playwright/);
```

断言为真：文档树中应该包含 < title >...Playwrigh...< /title >

3.创建locator，通过page.getByRole获取特定的元素

如下：获取内容名称为Get started的链接
```typescript
const getStarted = page.getByRole('link', { name: 'Get started' });
```
断言为真：文档树中应该包含 < a >Get started< /a >

4.判断命中元素属性是否为指定定值

```typescript
await expect(getStarted).toHaveAttribute('href', '/docs/intro');
```

断言为真：文档树中应该包含 < a href="/docs/intro" >Get started< /a >

5.点击事件激活

```typescript
await getStarted.click();
```

6.判断页面的地址URL中是否包含intro字符串

```typescript
await expect(page).toHaveURL(/.*intro/);
```




