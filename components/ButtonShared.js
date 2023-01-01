import { useRouter } from "next/router";
import React from "react";

const ButtonShared = ({ text, background, slug, category, style }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`${category}/${slug}`)}
      className={`w-[140px] md:w-[160px] outline-none uppercase px-5 py-2 rounded-sm active:scale-95 duration-150 transition-all ${
        style === "fill" ? `bg-${background}` : "border-black border-2"
      }`}
    >
      {text}
    </button>
  );
};

export default ButtonShared;
