import { Typography } from "antd";
import { FC, RefObject, useRef, useState } from "react";
import "./styles.scss";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useResize } from "@/shared/hooks/useResize";

const { Text } = Typography;

interface ISnippetHiglihtsControl {
  higlights: Array<string>;
}

export const SnippetHiglihtsControl: FC<ISnippetHiglihtsControl> = ({
  higlights,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpand, setNeedsExpand] = useState(false);
  const textRef = useRef<HTMLSpanElement | null>(null);

  const handleCheckSizeTextContent = () => {
    if (textRef.current) {
      const needsExpand = textRef.current.scrollHeight > 130;
      setNeedsExpand(needsExpand);
    }
  };

  const handleIsExpand = () => setIsExpanded((prev) => !prev);

  useResize(textRef as RefObject<HTMLElement>, handleCheckSizeTextContent, [
    higlights,
  ]);

  return (
    <>
      <Text
        className="news-description"
        ref={textRef}
        style={{
          maxHeight: isExpanded ? "none" : "130px",
          overflow: "hidden",
        }}
      >
        {higlights.map((highlight, index) => (
          <span key={index}>
            {highlight.includes("<kw>") ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: highlight
                    .replace(/<kw>/g, '<span class="highlight">')
                    .replace(/<\/kw>/g, "</span>"),
                }}
              />
            ) : (
              highlight
            )}{" "}
          </span>
        ))}
      </Text>
      {needsExpand && (
        <div className="show-more-link" onClick={handleIsExpand}>
          <span>{isExpanded ? "Show less" : "Show more"}</span>
          <span>{isExpanded ? <UpOutlined /> : <DownOutlined />}</span>
        </div>
      )}
    </>
  );
};
