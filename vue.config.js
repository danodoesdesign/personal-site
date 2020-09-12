module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                    @import "@/global-styles/styles.scss";
                `
      }
    }
  }
};
