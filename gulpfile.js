const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();

// configuration
const path = require("./gulpfile/config/path.js");
const app = require("./gulpfile/config/app.js");


// tasks
const clear = require('./gulpfile/task/clear.js');
const html = require('./gulpfile/task/html.js');
const scss = require('./gulpfile/task/scss.js');
const js = require('./gulpfile/task/js.js');
const img = require('./gulpfile/task/img.js');
const font = require('./gulpfile/task/font.js');


// Server
const server = () => {
	browserSync.init({
		server: {
			baseDir: path.root
		}
	})
}

// watcher
const watcher = () => {
	watch(path.html.watch, html).on("all", browserSync.reload);
	watch(path.scss.watch, scss).on("all", browserSync.reload);
	watch(path.js.watch, js).on("all", browserSync.reload);
	watch(path.img.watch, img).on("all", browserSync.reload);
	watch(path.font.watch, font).on("all", browserSync.reload);
}

// build
const build = series(
	clear,
	parallel(html, scss, js, img, font),
);
// dev
const dev = series(
	build,
	parallel(watcher, server)
);

// для использования PUG заменить в главном файле все значиния HTML на PUG
// exports.pug = pug;
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;



//assembly(сборка)
exports.default = app.isProd
	? build
	: dev;
// npm start
// npm run build
