const axios = require('axios');
const cheerio = require('cheerio');
const Module = require('module');

// URL of the Node.js documentation
const docsUrl = 'https://nodejs.org/dist/latest/docs/api/';

async function fetchDescriptions() {
    try {
        // Fetch the HTML of the Node.js documentation page
        const { data } = await axios.get(docsUrl);
        const $ = cheerio.load(data);

        // Object to store module descriptions
        const descriptions = {};

        // Get the list of core modules
        const coreModules = Module.builtinModules;

        // Extract descriptions for each core module
        coreModules.forEach(module => {
            const moduleLink = $(`a[href="${module}.html"]`);
            const description = moduleLink.length > 0 ? moduleLink.parent().text().trim() : 'No description available';
            descriptions[module] = description;
        });

        // Display the core modules and their descriptions in a table
        console.table(
            coreModules.map(module => ({
                Module: module,
                Description: descriptions[module]
            }))
        );
    } catch (error) {
        console.error('Error fetching descriptions:', error);
    }
}

fetchDescriptions();
