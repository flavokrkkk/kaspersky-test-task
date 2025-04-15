import { useState, useEffect, useRef, useCallback } from "react";
import { debounce } from "lodash";
import { IData_TagItem } from "@/entities";

export const useWidthPaginate = ({
  snippetTags,
}: {
  snippetTags: IData_TagItem[];
}) => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(snippetTags.length);
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const isMounted = useRef(false);

  const setTagRef = useCallback((el: HTMLSpanElement | null, index: number) => {
    tagRefs.current[index] = el;
  }, []);

  const calculateVisibleTags = useCallback(() => {
    if (!containerRef.current) return;

    if (showAll) return;

    const containerWidth = containerRef.current.offsetWidth;

    let totalWidth = 0;
    let count = 0;
    const tagMargin = 8;

    for (let i = 0; i < snippetTags.length; i++) {
      const tag = tagRefs.current[i];
      if (tag) {
        const tagWidth = tag.offsetWidth + tagMargin;
        if (totalWidth + tagWidth <= containerWidth) {
          totalWidth += tagWidth;
          count++;
        } else {
          break;
        }
      }
    }

    setVisibleCount((prev) => {
      const newCount = count > 0 ? count : 1;
      return prev !== newCount ? newCount : prev;
    });
  }, [snippetTags, showAll]);

  const debouncedCalculate = useCallback(
    debounce(() => {
      if (isMounted.current) {
        calculateVisibleTags();
      }
    }, 100),
    [calculateVisibleTags]
  );

  useEffect(() => {
    if (!showAll) {
      debouncedCalculate();
    }
  }, [showAll, debouncedCalculate]);

  useEffect(() => {
    isMounted.current = true;

    const resizeObserver = new ResizeObserver(debouncedCalculate);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      isMounted.current = false;
      resizeObserver.disconnect();
      debouncedCalculate.cancel();
    };
  }, [debouncedCalculate]);

  const visibleTags = showAll
    ? snippetTags
    : snippetTags.slice(0, visibleCount);

  return {
    showAll,
    visibleTags,
    visibleCount,
    containerRef,
    setTagRef,
    setShowAll,
  };
};
