import { test, expect } from '@playwright/test';
import { MainPage } from '../page-objects/main.po';

test.describe('Angular page', async() => {

  test('should go to the main 1', async ({ page }) => {
    var mainPage = new MainPage(page);
    await page.goto('/');
    
    await expect.soft(page).toHaveTitle('PlaywrightMergeReports');
  });

  test('should go to the main 2', async ({ page }) => {
    var mainPage = new MainPage(page);
    await page.goto('/');
    
    await expect.soft(page).toHaveTitle('PlaywrightMergeReports');
  });

  test('should go to the main 3', async ({ page }) => {
    var mainPage = new MainPage(page);
    await page.goto('/');
    
    await expect.soft(page).toHaveTitle('PlaywrightMergeReports');
  });

  test('should go to the main 4', async ({ page }) => {
    var mainPage = new MainPage(page);
    await page.goto('/');
    
    await expect.soft(page).toHaveTitle('PlaywrightMergeReports');
  });
});
  