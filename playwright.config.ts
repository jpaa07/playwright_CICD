import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'https://www.executeautomation.com/',
    browserName: 'chromium',
    headless: true,
    screenshot: 'on'
  },
  reporter: [
    ['line'], 
    ['experimental-allure-playwright']
  ]
};
export default config;