Sure, I can help with that! Here's a simple Node.js application that lists all the core modules available in Node.js:

```javascript
// Import the module 'fs' to work with the file system
const fs = require('fs');

// Read the core modules from the Node.js source code
const coreModules = fs.readFileSync('https://raw.githubusercontent.com/nodejs/node/master/lib/module.js', 'utf-8')
  .match(/(?:const|let|var) ([a-zA-Z$_][a-zA-Z$_0-9]*) = require\('([a-zA-Z$_][a-zA-Z$_0-9]*)'\)/g)
  .map(m => m.split(' ')[1]);

// Display the core modules
console.log('Core modules available in Node.js:');
coreModules.forEach(module => console.log(module));
```

This script reads the core modules from the Node.js source code and displays them in the console. Keep in mind that the list of core modules may change with different versions of Node.js, so it's always a good idea to check the [official documentation](https://nodejs.org/dist/latest-v16.x/docs/api/) for the most up-to-date information.

Feel free to ask if you have any questions or need further assistance!