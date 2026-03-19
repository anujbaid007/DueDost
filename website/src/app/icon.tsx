import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          overflow: "hidden",
          display: "flex",
          position: "relative",
        }}
      >
        {/* Blue left half */}
        <div style={{ display: "flex", flex: 1, background: "#1B5DAA" }} />
        {/* Green right half */}
        <div style={{ display: "flex", flex: 1, background: "#3BAA35" }} />

        {/* White checkmark (CSS L-shape rotated -45°) */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 13,
            height: 7,
            borderBottom: "3px solid white",
            borderLeft: "3px solid white",
            transform: "translate(-55%, -70%) rotate(-45deg)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
