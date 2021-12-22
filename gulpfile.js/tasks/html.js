//PACKAGES
const { src, dest } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const webpHtml = require("gulp-webp-html-nosvg");

//CONFIG
const config = require("../config");

// HTML TASK
module.exports = () => {
  return src(config.html.src)
    .pipe(webpHtml())
    .pipe(htmlmin({ collapseWhitespace: config.isProduction }))
    .pipe(dest(config.html.public));
};
