import { IData_TagItem } from "@/entities";
import { useWidthPaginate } from "../hooks/useTagsWisdthPaginate";
import React from "react";

interface ISnippetTags {
  snippetTags: IData_TagItem[];
}

const SnippetTags: React.FC<ISnippetTags> = ({ snippetTags }) => {
  const {
    showAll,
    visibleTags,
    containerRef,
    visibleCount,
    setTagRef,
    setShowAll,
  } = useWidthPaginate({ snippetTags });

  return (
    <div className="news-tags" ref={containerRef}>
      {visibleTags.map((keyword, index) => (
        <span
          key={`${keyword.value}-${index}`}
          className="tag"
          ref={(el) => setTagRef(el, index)}
        >
          {keyword.value}
        </span>
      ))}
      {!showAll && snippetTags.length > visibleCount && (
        <button className="show-all-link" onClick={() => setShowAll(true)}>
          Show All +{snippetTags.length - visibleCount}
        </button>
      )}
      {showAll && (
        <button className="show-all-link" onClick={() => setShowAll(false)}>
          Скрыть
        </button>
      )}
    </div>
  );
};
export default SnippetTags;
