import React from "react";
import boy from "../assets/boy.png";

export default function Banner() {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "200px",
      backgroundColor: "#FE8A00",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* Boy image — absolutely pinned to bottom-left */}
      <img
        src={boy}
        alt="boy"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          height: "195px",
          width: "auto",
          objectFit: "contain",
          objectPosition: "bottom left",
          zIndex: 1,
        }}
      />

      {/* Text — sits on top, centered in full banner */}
      <div style={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        color: "white",
      }}>
        <h2 style={{ fontSize: "32px", fontWeight: 700, margin: 0, lineHeight: 1.35 }}>
          Get 50% Off on
        </h2>
        <h3 style={{ fontSize: "32px", fontWeight: 700, margin: 0, lineHeight: 1.35 }}>
          Selected categories
        </h3>
      </div>
    </div>
  );
}