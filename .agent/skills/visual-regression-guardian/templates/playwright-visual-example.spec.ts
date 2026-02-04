import { test, expect } from '@playwright/test';

test('home (desktop)', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('home-desktop.png', { fullPage: true });
});

test('home (mobile)', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page).toHaveScreenshot('home-mobile.png', { fullPage: true });
});
