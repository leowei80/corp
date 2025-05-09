import Hero from "@/components/hero";
import ReliabilitySrc from "/public/reliability.jpg";
import React from "react";

export default function Page() {
  return (
    <Hero
      imgUrl={ReliabilitySrc}
      content="we reliablity"
      altTxt="Reliability Image"
    />
  );
}
