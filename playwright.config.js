const config = {
  use: {
    headless: false,
    slowMo: 1000   // 1 sec delay between actions
  }
};
module.exports = config;





// const { defineConfig } = require('@playwright/test');
// const { LOBS } = require('./utils/envConfig');
// const LOB_ENV = require('./utils/lobEnvConfig');

// process.env.PWDEBUG = '1'; // 👈 Enable Playwright Inspector

// const projects = LOBS.map(lob => {
//   const env = LOB_ENV[lob];
//   return {
//     name: `${lob}${env}`,
//     use: { lob, env },
//   };
// });

// module.exports = defineConfig({
//   testDir: './tests',
//   timeout: 280000,
//   retries: 0,
//   fullyParallel: true,
//   reporter: [
//     ['list'],
//     ['html', { open: 'never' }],
//     ['./utils/testCounter.js']
//   ],
//   projects,
//   use: {
//     headless: false,
//     screenshot: 'only-on-failure',
//     video: 'retain-on-failure',
//     launchOptions: {
//       slowMo: 1000, // 👈 optional for step-by-step debugging
//     }
//   },
//   expect: {
//     timeout: 10000
//   }
// });