const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
};

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: ["cdn.sanity.io"],
  },
  redirects: async () => {
    return [
      {
        source: "/residential-lp",
        destination: "https://www.funfactorysensorygyms.com/residential-lp/",
        permanent: true,
      },
      {
        source: "/commercial-lp",
        destination: "https://www.funfactorysensorygyms.com/commercial-lp/",
        permanent: true,
      },
    ];
  },
};
