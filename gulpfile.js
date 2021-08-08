const gulp = require("gulp")
const uglify = require("gulp-uglify")
const pipeline = require("readable-stream").pipeline
const exec = require('child_process').exec
const concat = require('gulp-concat')


const compress = function () {
  return pipeline(
    gulp.src("dist/*.js"),
    uglify(),
    gulp.dest("compressed-dist")
  )
}

const pack = function () {
  return gulp.src("compressed-dist/*.js")
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./'))
}

const compile = function () {
  return exec("tsc", (err, sto, ste) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log("[output]: \n", sto);
    }
  })
}

exports.default = gulp.series([
  compile,
  compress,
  pack
])