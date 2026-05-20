type TagListProps = {
  tags: string[];
  className?: string;
};

export function TagList({ tags, className = "" }: TagListProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-300"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
