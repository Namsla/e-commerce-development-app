"use client";
import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div>
      <Image
        src="/library.webp"
        alt="library"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default Home;
