const { src, dest, watch }  = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function generateCSS(cb) {
    src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
    cb();
}


function watchFiles(cb) {
    watch('./sass/**/*.scss', generateCSS)
}

exports.css = generateCSS
exports.watch = watchFiles