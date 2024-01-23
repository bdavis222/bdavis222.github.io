import { useState, useEffect } from "react";

interface Props {
  fullText: string;
  expanded: boolean;
}

function Abstract({ fullText, expanded }: Props) {
  if (expanded) {
    return (
      <p className="publication-abstract" style={{ paddingTop: 5 }}>
        <strong>Abstract: </strong>
        {fullText}
      </p>
    );
  }

  const { width } = useWindowDimensions();
  const charLimit = Math.floor(width / 4.4);
  const [isShowMore, setIsShowMore] = useState(false);
  const shortText = getShortenedText(fullText, charLimit);

  return (
    <>
      <a onClick={() => setIsShowMore(!isShowMore)}>
        <p className="publication-abstract" style={{ paddingTop: 5 }}>
          <strong>Abstract: </strong>
          {isShowMore ? fullText : shortText}
        </p>
      </a>
    </>
  );
}

function getShortenedText(text: string, charLimit: number) {
  var shortText = text.substring(0, charLimit);
  if (text.length == shortText.length) {
    return text;
  }

  if (shortText.slice(-1) == "\u00A0") {
    shortText = text.substring(0, charLimit - 1);
  } else if (shortText.slice(-2) == "\u00A0·") {
    shortText = text.substring(0, charLimit - 2);
  } else if (shortText.slice(-2) == "· ") {
    shortText = text.substring(0, charLimit - 3);
  }

  if (shortText.slice(-1) == " ") {
    shortText = text.substring(0, charLimit - 1);
  }

  return shortText + "...";
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default Abstract;
