// 引入 gulp 工具
var gulp = require('gulp');

// 引入 gulp-webserver 模块
var webserver = require('gulp-webserver');

// 引入 css 预处理 压缩 模块
//var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

// 引入 js 模块化工具 gulp-webpack, 获得 js 文件名模块 vinyl-named, js 压缩模块
var named = require('vinyl-named');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');

// 引入 fs url 模块
var fs = require('fs');
var url = require('url');

// 引入 rev revCollector 模块
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');

// 引入 gulp-sequence 模块
var sequence = require('gulp-sequence');

// gulp-less（编译Less）
var less = require("gulp-less");

// 图片压缩 imagemin-pngquant
var pngquant = require('imagemin-pngquant');

// 来源地图
var sourcemaps = require('gulp-sourcemaps');

// 自动添加CSS3浏览器前缀
var autoprefixer = require('gulp-autoprefixer');

// gulp-connect
var proxy = require('http-proxy-middleware');
var connect = require('gulp-connect');

// 启动 webserver
gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
      //host: '192.168.1.74',

      host: 'localhost',
      port: 90,
      directoryListing: {
        enable: true,
        path: './'
      },
      livereload: true,
      // middleware: [proxy('/api',{target:'https://localhost:8443/',changeOrigin:true})]
    }))
});

// css 预处理 和 压缩
//gulp.task('scss', function () {
//  gulp.src('./src/styles/usage/page/*.scss')
//    .pipe(sass().on('error', sass.logError))
//    // .pipe(minifyCSS())
//    .pipe(gulp.dest('./build/prd/styles/'));
//});

// less 预处理
gulp.task('less', function () {
    gulp.src('./src/styles/usage/page/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],         // 主流浏览器的最新两个版本
      cascade: false        // 是否美化属性值
    }))
        .pipe(minifyCSS())
    .pipe(gulp.dest('./build/prd/styles/'));
});

// js 模块化，合并，压缩
var jsFiles = [
  './src/scripts/*.app.js'
];
gulp.task('packjs', function () {
  gulp.src(jsFiles)
    .pipe(named())
    .pipe(webpack({
      output: {
        filename: '[name].js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'imports?define=>false',
            exclude: './src/scripts/libs/angular.min.js'
          },
          {
            test: /\.string$/,
            loader: 'string'
          }
        ]
      }
    }))
    // .pipe(uglify().on('error', function (err) {
    //   console.log('\x07', err.lineNumber, err.message);
    //   return this.end();
    // }))
    .pipe(gulp.dest('./build/prd/scripts/'));
});


// app-dev.js
var jsDevFiles = [
  './src/scripts/app-dev.js'
];
gulp.task('packdevjs', function () {
  gulp.src(jsDevFiles)
    .pipe(named())
    .pipe(webpack({
      output: {
        filename: 'app.js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'imports?define=>false',
          },
          {
            test: /\.string$/,
            loader: 'string'
          }
        ]
      }
    }))
    // .pipe(uglify().on('error', function (err) {
    //   console.log('\x07', err.lineNumber, err.message);
    //   return this.end();
    // }))
    .pipe(gulp.dest('./build/prd/scripts/'));
});

// app-test.js
var jsTestFiles = [
  './src/scripts/app-test.js'
];
gulp.task('packtestjs', function () {
  gulp.src(jsTestFiles)
    .pipe(named())
    .pipe(webpack({
      output: {
        filename: 'app.js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'imports?define=>false',
          },
          {
            test: /\.string$/,
            loader: 'string'
          }
        ]
      }
    }))
    // .pipe(uglify().on('error', function (err) {
    //   console.log('\x07', err.lineNumber, err.message);
    //   return this.end();
    // }))
    .pipe(gulp.dest('./build/prd/scripts/'));
});

// app-build.js
var jsBuildFiles = [
  './src/scripts/app-build.js'
];
gulp.task('packbuildjs', function () {
  gulp.src(jsBuildFiles)
    .pipe(named())
    .pipe(webpack({
      output: {
        filename: 'app.js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'imports?define=>false',
          },
          {
            test: /\.string$/,
            loader: 'string'
          }
        ]
      }
    }))
    // .pipe(uglify().on('error', function (err) {
    //   console.log('\x07', err.lineNumber, err.message);
    //   return this.end();
    // }))
    .pipe(gulp.dest('./build/prd/scripts/'));
});



// 版本号控制
var cssDistFiles = [
  './build/prd/styles/app.css'
];
var jsDistFiles = [
  './build/prd/scripts/app.js'
];
gulp.task('ver', function () {
  gulp.src(cssDistFiles)
    .pipe(rev())
    .pipe(gulp.dest('./build/prd/styles/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./build/ver/styles/'));
  gulp.src(jsDistFiles)
    .pipe(rev())
    .pipe(gulp.dest('./build/prd/scripts/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./build/ver/scripts/'));
});
gulp.task('html', function () {
  gulp.src(['./build/ver/**/*', './build/*.html'])
    .pipe(revCollector())
    .pipe(gulp.dest('./build/'));
});
gulp.task('min', sequence('copy-index','ver', 'html'));

// 拷贝 index.html 到 build 文件夹
gulp.task('copy-index', function () {
  gulp.src('./*.html')
    .pipe(gulp.dest('./build'));
});

//拷贝 fonts文件夹到 build
gulp.task('copy-fonts',function(){
    gulp.src('./src/styles/usage/core/fonts/*').pipe(gulp.dest('./build/prd/styles/fonts/'));
});

//拷贝 libs文件夹到 build
gulp.task('copy-libs',function(){
    gulp.src('./src/scripts/libs/*').pipe(gulp.dest('./build/prd/scripts/lib/'));
});

// 拷贝 images 到 build 文件夹
gulp.task('copy-images', function () {
  gulp.src('./images/**/*')
    .pipe(gulp.dest('./build/images/'));
});

// 图片压缩
gulp.task('imagemin', function () {
  gulp.src('./images/**/*')
      .pipe(imagemin({
          progressive: true,
          use: [pngquant()] //使用pngquant来压缩png图片
      }))
      .pipe(gulp.dest('./build/images/'));
});

// 来源地图
gulp.task('scriptmaps', function() {
  gulp.src(['./src/scripts/app-dev.js','!*.min.js']) // 指明源文件路径、并进行文件匹配，排除 .min.js 后缀的文件
    .pipe(sourcemaps.init()) // 执行sourcemaps
    // .pipe(sourcemaps.write('./src/maps')) // 地图输出路径（存放位置）
    .pipe(gulp.dest('./src/maps')); // 输出路径
});

// 侦测 文件变化， 执行相应任务
gulp.task('watch', function () {
  gulp.watch('./*.html', ['copy-index']);
  gulp.watch('./images/**/*', ['copy-images']);
  //gulp.watch('./src/styles/**/*', ['scss']);
  gulp.watch('./src/styles/**/*', ['less']);
  gulp.watch('./src/scripts/**/*', ['packjs']);
  // gulp.watch('./src/scripts/**/*', ['packdevjs']);
  // gulp.watch('./src/scripts/**/*', ['packtestjs']);
  // gulp.watch('./src/scripts/**/*', ['packbuildjs']);
});

// 配置 default 任务，执行任务队列
gulp.task('default', ['watch', 'webserver'], function () {
  console.log('任务队列执行完毕~');
});

// gulp local
gulp.task('local', ['copy-index','copy-images','copy-fonts','copy-libs','less','packdevjs','packjs'], function () {
  console.log('本地环境打包');
});

// gulp test
gulp.task('test', ['copy-index','copy-images','copy-fonts','copy-libs','less','packtestjs','packjs'], function () {
  console.log('测试环境打包');
});

// gulp build
gulp.task('build', ['copy-index','copy-images','copy-fonts','copy-libs','less','packbuildjs','packjs'], function () {
  console.log('生产环境打包');
});
