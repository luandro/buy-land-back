const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// URL of the Notion published web page
const NOTION_URL = 'YOUR_NOTION_URL_HERE';

// Path to the en.json file
const EN_JSON_PATH = path.join(__dirname, '../src/assets/i18n/en.json');

// Function to fetch and parse the Notion page
async function fetchNotionPage(url) {
    const response = await fetch(url);
    const html = await response.text();
    return cheerio.load(html);
}

// Function to extract data from the Notion page
function extractData($) {
    const data = {};
    $('YOUR_SELECTOR_HERE').each((index, element) => {
        const key = $(element).find('YOUR_KEY_SELECTOR').text().trim();
        const value = $(element).find('YOUR_VALUE_SELECTOR').text().trim();
        data[key] = value;
    });
    return data;
}

// Function to update en.json
function updateEnJson(data) {
    const enJson = JSON.parse(fs.readFileSync(EN_JSON_PATH, 'utf8'));
    Object.assign(enJson, data);
    fs.writeFileSync(EN_JSON_PATH, JSON.stringify(enJson, null, 2), 'utf8');
}

// Main function
async function main() {
    try {
        const $ = await fetchNotionPage(NOTION_URL);
        const data = extractData($);
        updateEnJson(data);
        console.log('en.json has been updated successfully.');
    } catch (error) {
        console.error('Error updating en.json:', error);
    }
}

main();
