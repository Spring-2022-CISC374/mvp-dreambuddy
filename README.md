# github-hosting-directions
Repo with files and directions for porting Phaser games to GitHub Pages deployment

## Overview
This repository should contain all the files you need to set your game up for deployment on GitHub Pages. We are switching the games to GitHub Pages to make deploying and sharing your games significantly easier. Once you have this GitHub Pages configuration set up, you can share your game with others with just a short web link! Show your friends and family your awesome game! Avoid wasting time during playtesting with complicated installation steps! All this and more awaits you, dear reader.

IMPORTANT: If you can't get your game to work with this new configuration, don't worry! Send an email or visit office hours to get help. It's probably not your fault, these instruction have to try to cover a lot of different possible configurations and have not been rigorously tested.

## Directions

- Get all the files in this repo and put them in your game's repository, at the root level (i.e., don't put them in a subfolder). If you already have some of these files, for now I recommend renaming those old versions to something else, so you still have them, and using these new versions.
- Open up the new package.json and update these important settings:
  - `name`: This must be a lower-case version of your repository name on GitHub, without spaces.
  - `description`: Give a quick, one sentence summary of your game.
  - `game`:
    - `url`: Change this to be the EXACT (!!) name of your repository on GitHub.
    - `shortName`: Choose a short name for your game for Progressive Web App packaging.
    - `name`: Choose a longer, complete name for your game.
  - `repository`:
    - url: Change this URL to be a link to your GitHub repository.
  - `homepage`: Change this URL to be a link to the final version of your game's EGDD.
  - `contributors`: This should be an array (list) of strings, where each string is like "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)".
- Open up `config/webpack.common.js` and change the following if needed:
  - `entry: ['./game.js']` should point to wherever you have your `game.js` or `game.ts` file
    - For example, if it is in some subdirectory like src it should be `entry: ['./src/game.js']`. If it's in the root of the repo no need to change. The same applies to all the remaining changes.
  - In `{ from: 'assets', to: 'assets' },` the first `assets` should point to whatever your assets folder is.
  - `{ from: 'assets/icons/favicon.ico', to: '' }` should point to wherever your favicon is, if you have one.
  - `{ from: '*.js', to: ''}` should point to wherever all your JavaScript/TypeScript files are.
  - In `new HtmlWebpackPlugin({ gameName: package.game.name, template: 'src/index.html', inject: false }),` Make sure this points to your game's `index.html`, relative again to the repo root. Also, IF you are NOT using the script tag in HTML to load your game code, then remove the `inject: false`.
- Open up `config/webpack.deploy.js` and change the following:
  - `fs.copyFileSync(path.resolve(__dirname, 'index.html'),` (line 37 or so) should point to wherever your `index.html` is.
- Make a new branch of your repository called `gh-pages`:
  - From the main branch:
  - `git checkout -b gh-pages`
  - `git push --set-upstream origin gh-pages`
  - `get checkout master`
- Run `npm install` to add any new dependencies (make sure you have checked out back to your original main/master branch
- To deploy your game, just run one of the following commands to deploy to the right page:
  - `npm run deploy-dev`
  - `npm run deploy-alpha`
  - `npm run deploy-beta`
  - `npm run deploy-final`
- If all goes well, your game should be accessible at `http://spring-2021-cisc374.github.io/my-repo-name/`
  - Be sure to select the right verion, between dev, alpha, beta, and final.
  - The alpha and beta versions should be used to store the versions of your game submitted for the alpha (MVP) and beta submissions.
  - If you can't see the website, make sure the repo owner has set the repository to public visibility, under the Settings tab, Options section, and set GitHub pages to build from the `gh-pages` branch under the Pages section.
- For local testing you can use `npm rum start`.
