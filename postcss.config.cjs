module.exports = {
  plugins: {
    doiuse: {},
    autoprefixer: {},
    cssnano: {
      preset: [
        "advanced",
        process.env.NODE_ENV === "production"
          ? { cssDeclarationSorter: false }
          : {
              cssDeclarationSorter: false,
              convertValues: false,
              reduceIdents: false,
            },
      ],
    },
    "postcss-custom-media": {},
    "postcss-custom-selectors": {},
    "postcss-inline-svg": {},
    "postcss-pseudo-class-enter": {},
    "postcss-utilities": {},
    "postcss-will-change": {},
    "rucksack-css": {},
  },
};
