"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
//var lint = require('gulp-eslint'); //Lint JS files, including JSX

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
}

//Start a local development server. The name of this task is 'connect'. Basically this will be server for our development.
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

// In this task, it has dependency of "connect"  task created above-
//The name of this task is 'open' and will open the file mentioned in gulp.src('')
gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

// This task will copy the html file from src to dist folder. Connect.reload will reload the file.
gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

//this will do below tasks
//transform: this will transform jsx in js file.
// bundle(): this will bundle all the files into one file.
//.on('error', console.error.bind(console)): this will bind any happening to the console
gulp.task('js', function() {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

// gulp.task('lint', function() {
// 	return gulp.src(config.paths.js)
// 		.pipe(lint({config: 'eslint.config.json'}))
// 		.pipe(lint.format());
// });

//This will monitor the files for any changes and reload if there are any changes are made.
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    //gulp.watch(config.paths.js, ['js', 'lint']);
    gulp.watch(config.paths.js, ['js']);
});

// This defines arrays of task which will be required to run when gulp is run in cmd window.
gulp.task('default', ['html', 'js', 'css', 'open', 'watch']);