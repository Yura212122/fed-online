const { series } = require('gulp');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}
function concatstyles(){
    return src (`app/**/*.css`)
    .pipe(concat(`all.css`))
    .pipe(dest(`dist/concat`));

}
function test(){
    return src([`app/**/*.css`, `app/*.html`, `!app/**/*.scss`]) .pipe(dest(`dist/`));
}
// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}
exports.clean = clean;
exports.test = test;
exports.build = build;
exports.concatstyles = concatstyles;
exports.default = series(test,build,concatstyles, clean);