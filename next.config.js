const nextEnv = require("next-env");
const dotenvload = require("dotenv-load");

dotenvload();
const withEnv = nextEnv();
module.exports = withEnv();

// const {
//   PHASE_PRODUCTION_BUILD,
//   PHASE_DEVELOPMENT_SERVER,
// } = require("next/constants");

// ! config files doesn't get compiled by babel, so can't use import statements.

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     console.log("I'm in dev mode");
//     return defaultConfig;
//   }

//   return defaultConfig;
// };
