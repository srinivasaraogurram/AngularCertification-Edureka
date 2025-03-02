const Module = require('module');
const coreLib = require('node-core-library');

// Function to get the description of a core module
async function getModuleDescription(module) {
    try {
        const doc = await coreLib.getModuleDoc(module);
        return doc.description || 'No description available';
    } catch (error) {
        console.error(`Error fetching description for module ${module}:`, error);
        return 'No description available';
    }
}

// Get the list of core modules
const coreModules = Module.builtinModules;

(async () => {
    // Create an array of objects with module names and descriptions
    const coreModulesWithDescriptions = await Promise.all(
        coreModules.map(async module => {
            const description = await getModuleDescription(module);
            return {
                Module: module,
                Description: description
            };
        })
    );

    // Log the array to ensure the data is fetched correctly
    console.log(JSON.stringify(coreModulesWithDescriptions, null, 2));

    // Display the core modules and their descriptions in a table
    console.table(coreModulesWithDescriptions);
})();
