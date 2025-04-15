import { ImageResponse } from "next/og";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const runtime = "edge";

export const alt = "Alytiqa - AI Web Analyst";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a3330",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          color: "white",
          fontFamily: nunito.style.fontFamily,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <img
            src="https://alytiqa.com/images/brain.png"
            alt="Alytiqa Brain Icon"
            style={{
              width: "200px",
              height: "200px",
              filter: "brightness(0) invert(1)",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "64px",
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Alytiqa
            </h1>
            <p
              style={{
                fontSize: "32px",
                margin: 0,
                opacity: 0.9,
                maxWidth: "800px",
                lineHeight: 1.4,
              }}
            >
              AI Web Analyst
            </p>
            <p
              style={{
                fontSize: "24px",
                margin: 0,
                opacity: 0.8,
                maxWidth: "800px",
                lineHeight: 1.4,
              }}
            >
              Save time and get better results with automated insights
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
