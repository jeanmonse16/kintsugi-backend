const dotenv = require('dotenv');

dotenv.config({ path: `./${process.env.ENV}.env` });

const assetsBaseURL = process.env.ASSETS_URL

console.log(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href=${assetsBaseURL + 'favicon.svg'} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>kintsugi NFT | Coming soon</title>
    <script type="module" crossorigin src=${assetsBaseURL + 'index.js'}></script>
    <link rel="modulepreload" href=${assetsBaseURL + 'vendor.js'}>
    <link rel="stylesheet" href=${assetsBaseURL + 'index.css'}>
  </head>
  <body class="h-screen bg-[#000004]">
    <div id="root" class="container mx-auto h-screen"></div>
    
  </body>
</html>
`)