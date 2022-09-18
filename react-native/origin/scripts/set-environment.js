#!/bin/node
const fs = require('fs');

const rnConfig = require('../app.json');

const selectedEnv = process.argv[2];

if (!Object.keys(rnConfig.environments).includes(selectedEnv)) {
  console.error(
    '💀💀💀 \x1b[47m\x1b[31mRequested environment',
    selectedEnv,
    'does not exists inside app.json\x1b[0m 💀💀💀',
  );
  process.exit(1);
}

const envVars = rnConfig.environments[process.argv[2]];

const content = `/* eslint-disable */
/**************** DO NOT TOUCH *****************/
/* This file gets generated by 'env:*' scripts */
/***********************************************/

export default ${JSON.stringify(envVars, undefined, 2)};
`;

fs.writeFileSync('src/env.ts', content);
