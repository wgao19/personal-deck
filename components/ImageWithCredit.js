import React from "react";
import { isAbsolute } from "upath";

export default ({ image, credit, url, caption, ...props }) => (
  <div css={{ display: "flex" }} {...props}>
    <div css={{ position: "relative", margin: "auto" }}>
      <img
        src={image}
        alt={caption || ""}
        css={{
          borderRadius: "4px"
        }}
      />
      {url && credit && (
        <small
          css={{
            position: "absolute",
            whiteSpace: "nowrap",
            bottom: "1em",
            right: "1em",
            mixBlendMode: "screen",
            color: "black",
            background: "white",
            padding: "2px 6px",
            borderRadius: "2px",
            fontFamily: "dank mono",
            opacity: 0.7,
            fontSize: "0.6em",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          <a
            href={url}
            target="_blank"
            css={{
              color: "black !important",
              textDecoration: "none",
              fontStyle: "italic"
            }}
          >
            {credit}
          </a>
        </small>
      )}
    </div>
  </div>
);
