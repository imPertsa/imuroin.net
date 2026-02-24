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
    label: "Anonymous chat",
    handle: "chat.imuroin.net",
    url: "https://chat.imuroin.net",
    context: "An anonymous chat for short-term conversations. Built with Golang and Vite.",
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
