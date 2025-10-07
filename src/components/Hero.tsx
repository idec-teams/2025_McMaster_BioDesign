import React from "react";

type HeroProps = {
  image?: string;
  children?: React.ReactNode;
  objectPosition?: string;
};

export default function Hero({
  image = "/img/hero.png",
  children,
  objectPosition = "center 35%", 
}: HeroProps) {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        style={{ objectPosition }}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative flex flex-col items-center justify-center text-center px-4 h-[calc(100dvh-4rem)] md:h-[calc(100vh-4rem)]">
        <div className="max-w-3xl">{children}</div>
      </div>
    </section>
  );
}
