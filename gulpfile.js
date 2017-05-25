/*
* Dependencias
*/
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync").create();

/*
* Compila los archivos sass y agrega los prefijos propietarios
* Output Style: :nested, :compact, :expanded, :compressed
*/
gulp.task("sass", function(){
  gulp.src("./scss/**/*.scss")
    .pipe(sass({
      outputStyle: "compressed",
      sourceComments: false
    }).on("error", sass.logError))
    .pipe(autoprefixer({
      versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest("./css"));
});

/*
* Ejecuta la tarea sass y queda escuchando
*/
gulp.task("default", function(){
  browserSync.init({
    server: "./"
  });

  gulp.watch("./scss/**/*.scss", ["sass"]).on("change", browserSync.reload);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./*.js").on("change", browserSync.reload);
});