import { ImageResponse } from "next/og";

export const alt = "Fadel Design — Digital design and development in Iraq";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          alignItems: "center",
          padding: "72px",
          background: "linear-gradient(125deg, #100d0a 0%, #21170f 58%, #392719 100%)",
          color: "#f5eee5",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-60px",
            width: "570px",
            height: "570px",
            display: "flex",
            border: "1px solid #d8ae7940",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-105px",
            right: "15px",
            width: "420px",
            height: "420px",
            display: "flex",
            border: "1px solid #d8ae7930",
            borderRadius: "50%",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "780px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "38px",
              color: "#d8ae79",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "5px",
            }}
          >
            <span style={{ width: "34px", height: "2px", background: "#d8ae79" }} />
            DIGITAL DESIGN STUDIO · IRAQ
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "92px",
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-5px",
            }}
          >
            Fadel Design
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "24px",
              color: "#d1c2b2",
              fontSize: "31px",
              lineHeight: 1.35,
            }}
          >
            Websites · Apps · Presentations
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: "88px",
            bottom: "-100px",
            display: "flex",
            color: "#d8ae79",
            fontFamily: "Georgia, serif",
            fontSize: "390px",
            fontWeight: 700,
            lineHeight: 1,
            opacity: 0.12,
          }}
        >
          F.
        </div>
        <div
          style={{
            position: "absolute",
            right: "72px",
            bottom: "54px",
            display: "flex",
            color: "#d1c2b2",
            fontSize: "16px",
            letterSpacing: "4px",
          }}
        >
          FADEL DESIGN
        </div>
      </div>
    ),
    size,
  );
}
