const Module = require('module');

// Manually create a description mapping for some core modules
const descriptions = {
    assert: 'Provides a set of assertion functions for verifying invariants',
    buffer: 'Allows handling of binary data',
    child_process: 'Spawns child processes',
    cluster: 'Enables the creation of child processes that all share server ports',
    crypto: 'Provides cryptographic functionality',
    dgram: 'Provides implementations of UDP datagram sockets',
    dns: 'Enables name resolution',
    events: 'Provides the EventEmitter class',
    fs: 'File system module for interacting with the file system',
    http: 'Provides HTTP server and client functionality',
    https: 'Provides HTTPS server and client functionality',
    net: 'Provides networking capabilities for creating servers and clients',
    os: 'Provides operating system-related utility methods',
    path: 'Provides utilities for working with file and directory paths',
    stream: 'Provides the stream API for handling streaming data',
    url: 'Provides utilities for URL resolution and parsing',
    util: 'Provides utility functions for various purposes'
};

// Get the list of core modules
const coreModules = Module.builtinModules;

// Create an array of objects with module names and descriptions
const coreModulesWithDescriptions = coreModules.map(module => ({
    Module: module,
    Description: descriptions[module] || 'No description available'
}));

// Display the core modules and their descriptions in a table
console.table(coreModulesWithDescriptions);
