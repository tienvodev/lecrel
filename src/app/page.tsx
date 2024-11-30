import { Text, TYPE_SCALES } from "@/components/Text";

export default function HomePage() {
  return (
    <div>
      <ul>
        {Object.values(TYPE_SCALES).map((typeScale) => (
          <Text key={typeScale} as="h1" typescale={typeScale}>
            {typeScale}
          </Text>
        ))}
      </ul>
    </div>
  );
}
