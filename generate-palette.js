const radixPalette = require("@radix-ui/colors");
const fs = require("node:fs");

const radixColorsEntries = Object.entries(radixPalette);

const admittedRadixColorsEntries = radixColorsEntries.filter(
  ([colorKey, colorValue]) => {
    return !(colorKey.endsWith("A") || colorKey.endsWith("Dark"));
  }
);

const admittedRadixColors = Object.fromEntries(admittedRadixColorsEntries);

const FORMATTED_PATTERN = /\D/g;

const formattedRadixColorsKeys = Object.entries(admittedRadixColors).map(
  ([colorKey, colorValues]) => {
    const formattedColorValuesKey = Object.entries(colorValues).map(
      ([key, entry]) => {
        const a = key.split(FORMATTED_PATTERN);

        const formattedKey = a[a.length - 1];

        return [formattedKey, entry];
      }
    );

    return [colorKey, Object.fromEntries(formattedColorValuesKey)];
  }
);

const formattedRadixColors = Object.fromEntries(formattedRadixColorsKeys);

const path = "./src/app/(config)/";
const filename = "palette.js";

fs.writeFileSync(
  path + filename,
  `export const palette = ${JSON.stringify(formattedRadixColors)};`,
  {
    flag: "w+",
  },
  (err) => {
    console.log(err);
  }
);
