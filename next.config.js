const nextEnv = require("next-env");
const dotenvload = require("dotenv-load");

// const { PATHPREFIX } = process.env; // * here environment variable for path prefix is taken out for ease of use

// console.log(PATHPREFIX);

dotenvload();
const withEnv = nextEnv();
module.exports = {
  plugin: withEnv(),
//   basePath: `/${PATHPREFIX}`,  //! this is how pathprefix is added in nextjs
};

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
