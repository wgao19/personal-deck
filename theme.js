import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwlTheme from "prism-react-renderer/themes/nightOwl";
import meta from "./meta.js";

const Code = ({ children, className: [languageClassName] }) => {
  const language =
    languageClassName && languageClassName.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      theme={nightOwlTheme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens = [], getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={style}
          css={{ padding: "1rem", borderRadius: "4px" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({ token, key })}
                  css={{ fontSize: ".75em" }}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const Provider = ({ title, speaker, twitter, children }) => (
  <React.Fragment>
    <nav
      css={{
        padding: "1rem",
        display: "flex",
        width: "100vw",
        position: "fixed",
        top: 0,
        background: "white",
        fontFamily:
          'Raleway, "Open Sans", ".SF NS Text", "Helvetica Neue", sans-serif',
        fontSize: "1.5rem"
      }}
    >
      <span
        css={{
          color: "#222"
        }}
      >
        {speaker}
      </span>
      <span css={{ padding: "0 .25em" }}>—</span>
      <span css={{ color: "#aaa" }}>{title}</span>
      <span css={{ marginLeft: "auto", color: "#aaa" }}>June 7, 2019</span>
    </nav>
    <main>{children}</main>
  </React.Fragment>
);

const custom = {
  css: {
    fontSize: "18px"
  },
  font: 'Raleway, "Open Sans", sans-serif',
  components: {
    code: Code
  },
  monospace: "Dank Mono",
  googleFont:
    "https://fonts.googleapis.com/css?family=Raleway:400,400i|Zilla+Slab:700&display=swap",
  h1: {
    fontFamily: '"Zilla Slab", ".SF NS Display", sans-serif'
  },
  h2: {
    fontFamily: '"Zilla Slab", ".SF NS Display", sans-serif'
  },
  h3: {
    fontFamily: '"Zilla Slab", ".SF NS Display", sans-serif'
  },
  h4: {
    fontFamily: '"Zilla Slab", ".SF NS Display", sans-serif'
  },
  h5: {
    fontFamily: '"Zilla Slab", ".SF NS Display", sans-serif'
  },
  h6: {
    fontFamily: '"Zilla Slab", ".SF NS Display", sans-serif'
  },
  blockquote: {
    width: "50vw",
    left: "-15vw",
    width: "50vw",
    position: "relative",
    textAlign: "left",
    fontWeight: 700,
    fontFamily: "Zilla Slab",
    lineHeight: 1
  },
  /**
   * Looks like this is the only way to pass down a component to wrap around everything
   * Semantically should not write meta data here
   */
  Provider: ({ children }) => (
    <Provider speaker={meta.speaker} title={meta.title} twitter={meta.twitter}>
      {children}
    </Provider>
  )
};

export default custom;
