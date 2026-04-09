import { Container } from "react-bootstrap";
import classJson from "../../../data/classes/bard.json";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { useEffect, useState } from "react";
import "./phb.standalone.css";
import "./Page.css";

const char = classJson;

async function parseMarkdown(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}
type ParsedContent = {
  table: string;
  desc: string;
};

export default function Class() {
  const [content, setContent] = useState<ParsedContent>({
    table: "",
    desc: "",
  });

  useEffect(() => {
    let cancelled = false;

    async function parseAll() {
      const [table, desc] = await Promise.all([
        parseMarkdown(char.table ?? ""),
        parseMarkdown(char.desc ?? ""),
      ]);

      if (!cancelled) {
        setContent({
          table,
          desc,
        });
      }
    }
    parseAll();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Container className="phb page soft">
      <h1>Class</h1>
      <div className="columnWrapper" id="p2" data-index="1">
        <h2>{char.name}</h2>
        <div
          className="classDescription"
          dangerouslySetInnerHTML={{ __html: content.desc }}
        ></div>
        <div
          className="wide classTable"
          dangerouslySetInnerHTML={{ __html: content.table }}
        />
      </div>
      <a className="artist" href={char.document__url}>
        {char.document__slug}
      </a>
      <div className="footnote">
        <p className="">{char.document__title}</p>
      </div>
      <div className="pageNumber auto"></div>
    </Container>
  );
}
