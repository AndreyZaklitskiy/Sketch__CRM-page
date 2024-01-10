const {src, dest} = require("gulp");

// configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

//plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const webpHtml = require("gulp-webp-html");
// PUG
const pugs = require("gulp-pug");

// Processing PUG
const pug = () => {
	return src(path.pug.src)
	.pipe(plumber({
		errorHandler : notify.onError(error => ({
			title : "PUG",
			message: error.message
		}))
	}))
	.pipe(pugs(app.pug))
	.pipe(webpHtml())
	.pipe(dest(path.pug.dest))
}
module.exports = pug;