import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 38,
          overflow: "hidden",
          display: "flex",
          position: "relative",
          background: "white",
        }}
      >
        {/* Blue left half */}
        <div style={{ display: "flex", flex: 1, background: "#1B5DAA" }} />
        {/* Green right half */}
        <div style={{ display: "flex", flex: 1, background: "#3BAA35" }} />

        {/* White checkmark */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 74,
            height: 40,
            borderBottom: "16px solid white",
            borderLeft: "16px solid white",
            transform: "translate(-55%, -70%) rotate(-45deg)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
