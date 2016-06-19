class Style {
  getStyleTask() {
    return (config.styles.ext === 'less') ? 'less' : 'sass';
  }
  get name() {
    return 'styles';
  }
  get deps() {
    return [this.getStyleTask()];
  }
  get fn() {
    return () => {
      let task = gulp.src(config.tmp.css + '/**/*.css', {
        base: config.tmp.base
      });

      if (!config.static) {
        if (config.production) {
          return task
            .pipe($.cssnano({
              safe: true,
              autoprefixer: false,
              discardComments: {
                removeAll: true
              }
            }))
            .pipe(gulp.dest(config.target.base));
        } else {
          task.pipe(gulp.dest(config.target.base));
        }
      }

      return task.pipe(reload({
        stream: true
      }));
    };
  }
}

export default Style;