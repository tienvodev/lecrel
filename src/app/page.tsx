"use client";
import { Text, TYPE_SCALES } from "@/components/Text";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const textRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    console.log(textRef.current);
  }, []);
  return (
    <div>
      <ul>
        {Object.values(TYPE_SCALES).map((typeScale) => (
          <Text
            key={typeScale}
            as={Link}
            typescale={typeScale}
            ref={textRef}
            href="/"
          >
            {typeScale}
          </Text>
        ))}
      </ul>
    </div>
  );
}
