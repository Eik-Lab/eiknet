import ReactMarkdown from "react-markdown";

/** Markdown-innhold formatert med sidens «prose»-typografi. */
export function Prose({ children }: { children: string }) {
  return (
    <div className="prose prose-lg mx-auto max-w-3xl py-14 prose-headings:font-sans prose-headings:text-black prose-headings:mt-10 prose-headings:mb-4 prose-p:text-storm-70 prose-p:leading-relaxed prose-ul:text-storm-70 prose-li:leading-relaxed">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
