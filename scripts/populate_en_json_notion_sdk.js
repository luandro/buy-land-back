const { Client } = require('@notionhq/client');
const fs = require('node:fs');
const path = require('node:path');

// Initialize the Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// The ID of the Notion database
const DATABASE_ID = '0d200cfc19e14ca491784cec7b14c3cb';

// Path to the en.json file
const EN_JSON_PATH = path.join(__dirname, '../src/assets/i18n/en.json');

// Function to fetch data from the Notion database
async function fetchNotionData() {
    const response = await notion.databases.query({ database_id: DATABASE_ID });
    return response.results.map(page => {
        const properties = page.properties;
        return {
            key: properties.Name.title[0].text.content,
            value: properties.Description.rich_text[0].text.content
        };
    });
}

// Function to update en.json
function updateEnJson(data) {
    const enJson = JSON.parse(fs.readFileSync(EN_JSON_PATH, 'utf8'));
    data.forEach(item => {
        enJson[item.key] = item.value;
    });
    const timestamp = new Date().toISOString();
    enJson.lastUpdated = timestamp;
    const newFileName = EN_JSON_PATH.replace('en.json', `en_${timestamp}.json`);
    fs.writeFileSync(newFileName, JSON.stringify(enJson, null, 2), 'utf8');
    console.log('en.json has been updated successfully.');
}

// Main function
async function main() {
    try {
        const data = await fetchNotionData();
        updateEnJson(data);
    } catch (error) {
        console.error('Error updating en.json:', error);
    }
}

main();
