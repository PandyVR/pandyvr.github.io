# Pandy Studios Website

Simple single-page website designed for GitHub Pages.

## Structure

index.html – main site  
assets/css/styles.css – styling  
assets/js/scripts.js – tab navigation  
assets/images – screenshots  
downloads – game downloads

## Deploying to GitHub Pages

1. Create a new GitHub repository.
2. Upload all files.
3. Go to:

Settings → Pages

4. Under **Source**, select:

Deploy from branch

5. Select:

main branch  
/ (root)

6. Save.

Your site will appear at:

https://YOURUSERNAME.github.io/REPOSITORYNAME/

## Customizing

Replace screenshots in:

assets/images/

Replace the download file in:

downloads/pandy-primal-dread.zip

Edit text in:

index.html

Change colors in:

assets/css/styles.css

Look for the CSS variables:

:root {
--bg
--accent
--panel
}
