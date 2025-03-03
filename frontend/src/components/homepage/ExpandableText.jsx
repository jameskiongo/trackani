import React, { useState } from "react";

function ExpandableText({ text, maxLength }) {
  const [isTruncated, setIsTruncated] = useState(true);

  // Ensure text is a string and handle null/undefined
  const safeText = String(text || "").trim();

  // Function to toggle truncation
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  // Truncate the text if necessary
  const displayText =
    isTruncated && safeText.length > maxLength
      ? safeText.slice(0, maxLength) + "..."
      : safeText;

  return (
    <p className="text-sm">
      {displayText}
      {safeText.length > maxLength && (
        <span
          onClick={toggleTruncate}
          style={{ cursor: "pointer", color: "blue" }}
        >
          {isTruncated ? " Read more" : " Show less"}
        </span>
      )}
    </p>
  );
}

export default ExpandableText;
