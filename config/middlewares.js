module.exports = {
  load: {
    before: [
      'strapi::errors',
      'strapi::security',
      'strapi::cors',
      'strapi::poweredBy',
      'strapi::logger',
      'strapi::query',
      'strapi::body',
      'strapi::session',
      'strapi::favicon',
      'strapi::public',
    ],
  },
  settings: {
    security: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          connectSrc: ["'self'", "http://172.173.237.220:1337"],
          // ... outras diretivas, se necessário ...
        },
      },
    },
  },
};
