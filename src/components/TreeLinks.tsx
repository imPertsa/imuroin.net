type LinkItem = {
  label: string;
  handle: string;
  url?: string;
  context?: string;
};

type TreeRow = LinkItem & {
  branchPrefix: string;
  handlePrefix: string;
  contextPrefix: string;
};

type TreeLinksProps = {
  rootLabel: string;
  items: LinkItem[];
};

function buildTreeRows(items: LinkItem[]): TreeRow[] {
  return items.map((item, index) => {
    const isLast = index === items.length - 1;
    const stalk = isLast ? "   " : "│  ";

    return {
      ...item,
      branchPrefix: isLast ? "└─ " : "├─ ",
      handlePrefix: stalk + (item.context ? "├─ " : "└─ "),
      contextPrefix: stalk + "└─ ",
    };
  });
}

export default function TreeLinks({ rootLabel, items }: TreeLinksProps) {
  const rows = buildTreeRows(items);

  return (
    <section className="links-box reveal" style={{ animationDelay: "0.12s" }}>
      <div className="tree-root">{rootLabel}</div>
      <ul className="tree-list">
        {rows.map((row, index) => (
          <li
            className={`tree-node reveal ${index === rows.length - 1 ? "is-last" : ""}`}
            key={row.label}
            style={{ animationDelay: `${0.2 + index * 0.08}s` }}
          >
            <div className="tree-entry-group">
              <a
                className="tree-entry"
                href={row.url || undefined}
                target="_blank"
                rel="noreferrer"
              >
                <span className="tree-row">
                  <span className="tree-prefix">{row.branchPrefix}</span>
                  <span className="tree-folder">{row.label}</span>
                </span>
                <span className="tree-row">
                  <span className="tree-prefix">{row.handlePrefix}</span>
                  <span className="tree-url">{row.handle}</span>
                </span>
              </a>
              {row.context && (
                <div className="tree-context-box">
                  <span className="tree-row">
                    <span className="tree-prefix">{row.contextPrefix}</span>
                    <span className="tree-context">{row.context}</span>
                  </span>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
