# Buy Land Back Website

This toolkit is designed to help you get started with the Buy Land Back project, which aims to create a sustainable alternative to traditional capitalistic practices in land and housing ownership. The project utilizes innovative crowdfunding strategies to finance the acquisition and development of land and housing units, ultimately returning the land to indigenous communities.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run content`

The `npm run content` command is used to update the `en.json` file with the latest content from a Notion database. This script fetches data from the Notion database, processes it, and updates the `en.json` file located in the `src/assets/i18n` directory.

To run this command, ensure you have the necessary environment variables set up:

- `NOTION_API_KEY`: Your Notion API key.
- `DATABASE_ID`: The ID of the Notion database you want to fetch data from.

Once these environment variables are configured, you can run the command:


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Deployment

The project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch. The deployment process is managed using a GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

To manually trigger a deployment, you can push changes to the `main` branch, and the workflow will handle the rest.

### `npm run build` fails to minify

If the `npm run build` command fails to minify, refer to the [troubleshooting guide](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) for solutions.

## Working with Notion

To update the `en.json` file with data from a Notion database, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Obtain a Notion API key and Database ID.

### Steps to Update `en.json`

1. Set your Notion API key and Database ID as environment variables and run the update command:
   ```sh
   NOTION_API_KEY=secret_xxx DATABASE_ID=xxx-xxx-xx npm run content
   ```
   Replace `secret_xxx` with your actual Notion API key and `xxx-xxx-xx` with your actual Database ID.

2. The script `populate_en_json_notion_sdk.js` will fetch data from the specified Notion database and update the `en.json` file located in `src/assets/i18n/`.

3. The script will also create a backup of the current `en.json` file with a timestamp before updating it.

By following these steps, you can ensure that your `en.json` file is always up-to-date with the latest content from your Notion database.
