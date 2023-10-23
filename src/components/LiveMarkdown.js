import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function LiveMarkdown() {
  const [markdownInput, setMarkdownInput] = useState();
  return (
    <div className="App">
      <div className="wrapper">
        <textarea
          autoFocus
          className="textarea"
          value={markdownInput}
          onChange={(e) => setMarkdownInput(e.target.value)}
        ></textarea>
      </div>
      <div className="wrapper">
        <ReactMarkdown
          children={markdownInput}
          components={{
            code: MarkComponent,
          }}
        />
      </div>
    </div>
  );
}
const MarkComponent = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ""}
    </SyntaxHighlighter>
  );
};
