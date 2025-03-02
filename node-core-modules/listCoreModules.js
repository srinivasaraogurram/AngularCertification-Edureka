const Module = require('module');

// Get the list of core modules
const coreModules = Module.builtinModules;

console.log('Core modules available in Node.js:');
coreModules.forEach(module => console.log(module));
