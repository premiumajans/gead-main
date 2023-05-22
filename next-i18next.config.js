module.exports = {
  i18n: {
    defaultLocale: "az",
    locales: ["en", "ru", "az"],
    localeDetection: false,
  },
  fallbackLng: {
    default: ["az"],
  },
  detection: {
    order: ['localStorage'],
  },
  pages: {
    "*": ["common"],
  },
  interpolation: {
    prefix: "${",
    suffix: "}",
  },
  nonExplicitSupportedLngs: true,
};
