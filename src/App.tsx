import TreeLinks from "./components/TreeLinks";
import ThemeToggle from "./components/ThemeToggle";
import { profile, socials, projects } from "./data/profile";

export default function App() {
  return (
    <div className="page">
      <ThemeToggle />
      <main className="shell">
        <header className="title reveal" style={{ animationDelay: "0.05s" }}>
          <h1>{profile.name}</h1>
          <h4>{profile.title}</h4>
        </header>
        <TreeLinks rootLabel="socials" items={socials} />
        <TreeLinks rootLabel="projects" items={projects} />
      </main>
    </div>
  );
}