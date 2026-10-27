import React from "react";
import "../../css/FloatingElements.css";

interface FloatingElementsProps {
  className?: string;
  layer?: "all" | "behind" | "front";
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({
  className = "",
  layer = "all",
}) => {
  const showBehind = layer === "all" || layer === "behind";
  const showFront = layer === "all" || layer === "front";

  return (
    <div className={`floating-elements ${className}`.trim()}>
      {/* 1. LAYER BEHIND SHOULDER: Curved dotted connectors & 3D cube */}
      {showBehind && (
        <>
          {/* Curved dotted connector lines */}
          <svg
            className="floating-connectors"
            viewBox="-110 -40 500 380"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M75 105 C145 25 275 25 330 90 S405 145 425 205"
              stroke="#E9A783"
              strokeWidth="1.5"
              strokeDasharray="3 5"
              strokeLinecap="round"
            />

            <path
              d="M90 220 C130 305 250 335 330 265 S405 225 440 250"
              stroke="#E9A783"
              strokeWidth="1.5"
              strokeDasharray="3 5"
              strokeLinecap="round"
            />

            <circle cx="140" cy="48" r="4" fill="#E9A783" />
            <circle cx="425" cy="205" r="4" fill="#E9A783" />
          </svg>

          {/* 3D cube placed further right, behind shoulder */}
          <div className="floating-cube">
            <svg viewBox="0 0 100 110" fill="none">
              <polygon
                points="10,25 62,5 91,25 39,46"
                fill="#F8C49F"
              />
              <polygon
                points="10,25 39,46 39,98 10,76"
                fill="#E99A6B"
              />
              <polygon
                points="39,46 91,25 91,76 39,98"
                fill="#D97745"
              />
            </svg>
          </div>
        </>
      )}

      {/* 2. LAYER IN FRONT OF PROFILE: Mobile mockup & Analytics card */}
      {showFront && (
        <>
          {/* Mobile mockup (reduced size, on top of profile pic shoulder/bottom) */}
          <div className="floating-mobile">
            <div className="mobile-frame">
              <div className="mobile-notch" />

              <div className="mobile-screen">
                <div className="mobile-hero">
                  <div className="mobile-mountain" />
                </div>

                <div className="mobile-line wide" />
                <div className="mobile-line short" />

                <div className="mobile-thumbnail-row">
                  <div />
                  <div />
                </div>

                <div className="mobile-line wide" />
                <div className="mobile-line medium" />

                <div className="mobile-action" />
              </div>
            </div>
          </div>

          {/* Analytics chart card */}
          <div className="floating-analytics">
            <svg viewBox="0 0 180 120" fill="none">
              <path
                d="M12 102 H168"
                stroke="#E9DCD2"
                strokeWidth="1"
              />

              {[25, 38, 50, 65, 80, 96].map((height, i) => (
                <rect
                  key={i}
                  x={20 + i * 24}
                  y={102 - height}
                  width="15"
                  height={height}
                  rx="2"
                  fill="#E9A783"
                  opacity={0.4 + i * 0.1}
                />
              ))}

              <path
                d="M20 78 L48 68 L72 58 L96 43 L124 30 L158 13"
                stroke="#D95F3F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {[ [20,78], [48,68], [72,58], [96,43], [124,30], [158,13] ].map(
                ([x, y], i) => (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="3"
                    fill="#D95F3F"
                  />
                )
              )}
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default FloatingElements;
