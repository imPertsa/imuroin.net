export const profile = {
  name: "Pessi Sorri",
  title: "Cloud Engineer",
} as const;

export const socials = [
  {
    label: "github",
    handle: "github.com/imPertsa",
    url: "https://github.com/imPertsa",
  },
  {
    label: "linkedin",
    handle: "linkedin.com/in/pessi-sorri",
    url: "https://www.linkedin.com/in/pessi-sorri",
  },
  {
    label: "twitter",
    handle: "twitter.com/pERTSAcs",
    url: "https://twitter.com/pERTSAcs",
  },
  {
    label: "email",
    handle: "pessi.sorri[@]gmail.com",
  },
];

export const projects = [
  {
    label: "Short URL Service",
    handle: "url.imuroin.net",
    url: "https://url.imuroin.net",
    context:
      "A short URL service built with TypeScript. Hosted using Cloudflare Workers and KV.",
  },
  {
    label: "Pastebin",
    handle: "pastebin.imuroin.net",
    url: "https://pastebin.imuroin.net",
    context:
      "A pastebin service built with Python. Hosted using Cloudflare Workers and D1.",
  },
];
