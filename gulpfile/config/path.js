const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
	root : pathDest,

	html : {
		src : pathSrc + "/*.html",
		watch : pathSrc + "/**/*.html",
		dest : pathDest
	},
	pug : {
		src : pathSrc + "/pug/*.pug",
		watch : pathSrc + "/pug/**/*.pug",
		dest : pathDest
	},
	css : {
		src : pathSrc + "/css/*.css",
		watch : pathSrc + "/css/**/*.css",
		dest : pathDest + "/css"
	},
	scss : {
		src : pathSrc + "/scss/*.{sass,scss}",
		watch : pathSrc + "/scss/**/*.{sass,scss}",
		dest : pathDest + "/styles"
	},
	js : {
		src : pathSrc + "/js/*.js",
		watch : pathSrc + "/js/**/*.js",
		dest : pathDest + "/js"
	},
	img : {
		src : pathSrc + "/images/**/*.{png,jpg,gif,svg}",
		watch : pathSrc + "/images/**/*.{png,jpg,gif,svg}",
		dest : pathDest + "/images"
	},
	font : {
		src : pathSrc + "/fonts/*.{eot,ttf,otf,ttc,woff,woff2,svg}",
		watch : pathSrc + "/fonts/**/*.{eot,ttf,otf,ttc,woff,woff2,svg}",
		dest : pathDest + "/fonts"
	}
}