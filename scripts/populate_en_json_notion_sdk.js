const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const marked = require("marked");
const fs = require("node:fs");
const path = require("node:path");

// Initialize the Notion client
if (!process.env.NOTION_API_KEY) {
	throw new Error(
		"NOTION_API_KEY is not defined in the environment variables.",
	);
}

if (!process.env.DATABASE_ID) {
	throw new Error("DATABASE_ID is not defined in the environment variables.");
}

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

// The ID of the Notion database
const DATABASE_ID = process.env.DATABASE_ID;

// Path to the English json file
const jsonFileName = "translation.en.json";
const EN_JSON_PATH = path.join(__dirname, "../src/assets/i18n", jsonFileName);

// Function to fetch data from the Notion database

// Function to update en.json
function updateEnJson(data) {
	const enJson = JSON.parse(fs.readFileSync(EN_JSON_PATH, "utf8"));
	for (const item of data) {
		const parsed = marked.parse(item.parent);
		const htmlToText = (html) => {
			return html
				.replace(/<[^>]*>?/gm, "")
				.replace(/&[#A-Za-z0-9]+;/g, (entity) => {
					const entities = {
						"&amp;": "&",
						"&lt;": "<",
						"&gt;": ">",
						"&quot;": '"',
						"&#39;": "'",
						"&apos;": "'",
					};
					return entities[entity] || entity;
				});
		};
		const trimmedText = htmlToText(parsed).trim();
		item.parent = trimmedText;
	}
	const orderedData = [
		{ key: "header.title", value: data[0].parent },
		{ key: "header.subtitle", value: data[1].parent },
		{ key: "header.participate", value: data[2].parent },
		{ key: "video.title", value: data[4].parent },
		{ key: "video.noSupport", value: data[5].parent },
		{ key: "why.title", value: data[6].parent },
		{ key: "why.description1", value: data[7].parent },
		{ key: "why.description2", value: data[8].parent },
		{ key: "how.title", value: data[9].parent },
		{ key: "how.description", value: data[10].parent },
		{ key: "how.mini-title", value: data[11].parent },
		{ key: "how.step1.alt", value: data[12].parent },
		{ key: "how.step1.text", value: data[13].parent },
		{ key: "how.step2.alt", value: data[14].parent },
		{ key: "how.step2.text", value: data[15].parent },
		{ key: "how.step3.alt", value: data[16].parent },
		{ key: "how.step3.text", value: data[17].parent },
		{ key: "how.step4.alt", value: data[18].parent },
		{ key: "how.step4.text", value: data[19].parent },
		{ key: "how.step5.alt", value: data[20].parent },
		{ key: "how.step5.text", value: data[21].parent },
		{ key: "how.step6.alt", value: data[22].parent },
		{ key: "how.step6.text", value: data[23].parent },
		{ key: "frameworks.title", value: data[24].parent },
		{ key: "frameworks.image1.alt", value: data[25].parent },
		{ key: "frameworks.image1.title", value: data[25].parent },
		{ key: "frameworks.image1.description", value: data[26].parent },
		{ key: "frameworks.image2.alt", value: data[27].parent },
		{ key: "frameworks.image2.title", value: data[27].parent },
		{ key: "frameworks.image2.description", value: data[28].parent },
		{ key: "frameworks.image3.alt", value: data[29].parent },
		{ key: "frameworks.image3.title", value: data[29].parent },
		{ key: "frameworks.image3.description", value: data[30].parent },
		{ key: "frameworks.image4.alt", value: data[31].parent },
		{ key: "frameworks.image4.title", value: data[31].parent },
		{ key: "frameworks.image4.description", value: data[32].parent },
		{ key: "frameworks.image5.alt", value: data[33].parent },
		{ key: "frameworks.image5.title", value: data[33].parent },
		{ key: "frameworks.image5.description", value: data[34].parent },
		{ key: "participation.title", value: data[35].parent },
		{ key: "participation.description", value: data[36].parent },
		{ key: "roadmap.title", value: data[37].parent },
		{ key: "roadmap.items[0].year", value: data[38].parent },
		{ key: "roadmap.items[1].year", value: data[39].parent },
		{ key: "contact.title", value: data[40].parent },
		{ key: "contact.description", value: data[41].parent },
		{ key: "contact.emailLabel", value: data[42].parent },
		{ key: "contact.nameLabel", value: data[43].parent },
		{ key: "contact.messageLabel", value: data[44].parent },
		{ key: "contact.sendButton", value: data[45].parent },
	];

	for (const item of orderedData) {
		enJson[item.key] = item.value;
	}

	const timestamp = new Date().toISOString();
	enJson.lastUpdated = timestamp;
	const currentEnJson = JSON.parse(fs.readFileSync(EN_JSON_PATH, "utf8"));
	const oldTimestamp = currentEnJson.lastUpdated;
	const oldFileName = EN_JSON_PATH.replace(
		jsonFileName,
		`${jsonFileName.replace(".json", `_${oldTimestamp}.json`)}`,
	);
	fs.renameSync(EN_JSON_PATH, oldFileName);

	fs.writeFileSync(EN_JSON_PATH, JSON.stringify(enJson, null, 2), "utf8");
}
console.log("en.json has been updated successfully.");

// Main function
async function main() {
	try {
		const data = await n2m.pageToMarkdown(DATABASE_ID);
		updateEnJson(data);
	} catch (error) {
		console.error("Error updating en.json:", error);
	}
}

main();
