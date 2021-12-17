//PACKAGES
const { src, dest } = require("gulp");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const cssimport = require("gulp-cssimport");
const groupCssMedia = require("gulp-group-css-media-queries");
const webpCss = require("gulp-webp-css");

//CONFIG
const config = require("../config");

// CSS TASK
module.exports = () => {
  return src(config.css.src, { sourcemaps: config.isDevelopment })
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(groupCssMedia())
    .pipe(dest(config.css.public, { sourcemaps: config.isDevelopment }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(dest(config.css.public, { sourcemaps: config.isDevelopment }));
};