import { useState, useEffect } from "react";
import getSkillsList from "./SkillsList";

interface Props {
  skills: string[];
}

function CompanySkills({ skills }: Props) {
  const { width } = useWindowDimensions();
  const charLimit =
    width < 362 ? 80 : width > 630 ? 999 : Math.floor(width / 3.6);
  const [isShowMore, setIsShowMore] = useState(false);
  const fullText = getSkillsList(skills);
  const shortText = getShortenedText(fullText, charLimit);

  return (
    <>
      <a
        className="invisible-link skills"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        <p className="company-skills-text">
          <b>Skills: </b>

          {isShowMore ? fullText : shortText}

          {fullText.length > charLimit && (
            <span className="gray-link on-card">
              {isShowMore ? "" : "Show\u00A0more"}
            </span>
          )}
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

  return shortText + "... ";
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

export default CompanySkills;
