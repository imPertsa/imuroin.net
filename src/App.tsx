import TreeLinks from "./components/TreeLinks";

const profile = {
  name: "Pessi Sorri",
};

const title = {
  label: "Cloud Engineer",
}
const socials = [
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
    url: "",
  },
];

const projects = [
  {
    label: "Short URL Service",
    handle: "url.imuroin.net",
    url: "https://url.imuroin.net",
    context: "A short URL service built with TypeScript. Hosted using Cloudflare Workers and KV.",
  },
  {
    label: "Pastebin",
    handle: "pastebin.imuroin.net",
    url: "https://pastebin.imuroin.net",
    context: "A pastebin service built with Python. Hosted using Cloudflare Workers and D1.",
  }
];

export default function App() {
  return (
    <div className="page">
      <main className="shell">
        <header className="title reveal" style={{ animationDelay: "0.05s" }}>
            <h1>{profile.name}</h1>
            <h4>{title.label}</h4>
        </header>
        <TreeLinks rootLabel="socials" items={socials} />
        <TreeLinks rootLabel="projects" items={projects} />
      </main>
    </div>
  );
}
