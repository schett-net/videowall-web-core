import {
  hsla,
  saturate,
  desaturate,
  parseToHsla,
  transparentize,
  toHex,
} from "color2k";

import type { IterIndex, ColorIndex, Palette, PaletteOptions } from "./types";
import { ColorRangeInfo } from "./types";

/**
 * Type guard to ensure the index is in range.
 *
 * @param index Array index.
 */
function isIterIndex(index: number): index is IterIndex {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(index);
}

/**
 * Calculate the color number, which will be used as the palette index, from an array index.
 *
 * @param index Array index.
 */
function getColorNumber(index: number): ColorIndex {
  if (index === 0) {
    return 50;
  } else if (isIterIndex(index)) {
    const value = (index * 100) as ColorIndex;
    return value;
  } else {
    throw new Error("index must be in range 0-9.");
  }
}

/**
 * Create a palette based fading transparency instead of scaled color.
 * Useful for Chakra-UI's whiteAlpha & blackAlpha colors.
 *
 * @param color Base color, can be any hex, rgb, rgba, hsl, or hsla value.
 */
export function transparentPalette(color: string): Palette {
  return {
    50: transparentize(color, Number((1 - 0.04).toFixed(2))),
    100: transparentize(color, Number((1 - 0.08).toFixed(2))),
    200: transparentize(color, Number((1 - 0.12).toFixed(2))),
    300: transparentize(color, Number((1 - 0.16).toFixed(2))),
    400: transparentize(color, Number((1 - 0.24).toFixed(2))),
    500: transparentize(color, Number((1 - 0.38).toFixed(2))),
    600: transparentize(color, Number((1 - 0.48).toFixed(2))),
    700: transparentize(color, Number((1 - 0.6).toFixed(2))),
    800: transparentize(color, Number((1 - 0.8).toFixed(2))),
    900: transparentize(color, Number((1 - 0.92).toFixed(2))),
  };
}

/**
 * Create a palette of scaled colors.
 *
 * @param color Base color, can be any hex, rgb, rgba, hsl, or hsla value.
 */
export function generatePalette(
  color: string,
  options: PaletteOptions = {}
): Palette {
  const { originalAtMidpoint = true } = options;

  const colorMap = {} as Palette;

  const lightnessMap = [
    0.95, 0.85, 0.77, 0.73, 0.67, 0.45, 0.45, 0.35, 0.25, 0.15,
  ];
  const saturationMap = [0.32, 0.16, 0.08, 0.04, 0, 0, 0.04, 0.08, 0.16, 0.32];

  const colorHsla = parseToHsla(color);
  const lightnessGoal = colorHsla[2];

  const closestLightness = lightnessMap.reduce((prev, curr) =>
    Math.abs(curr - lightnessGoal) < Math.abs(prev - lightnessGoal)
      ? curr
      : prev
  );

  const baseColorIndex = lightnessMap.findIndex((l) => l === closestLightness);

  const colors = lightnessMap
    .map((l) => {
      const [h, s, _, a] = colorHsla;
      return hsla(h, s, l, a);
    })
    .map((color, i) => {
      const saturationDelta = saturationMap[i] - saturationMap[baseColorIndex];
      return saturationDelta >= 0
        ? saturate(color, saturationDelta)
        : desaturate(color, saturationDelta * -1);
    });

  for (const [index, col] of colors.entries()) {
    const colorIndex = getColorNumber(index);
    if (colorIndex === 500 && originalAtMidpoint) {
      colorMap[500] = color;
    } else {
      colorMap[colorIndex] = toHex(col);
    }
  }

  return colorMap;
}

// Generate colors
function calculatePoint(
  i: number,
  intervalSize: number,
  colorRangeInfo: ColorRangeInfo
) {
  var { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;

  return useEndAsStart
    ? colorEnd - i * intervalSize
    : colorStart + i * intervalSize;
}

/* Must use an interpolated color scale, which has a range of [0, 1] */
export const interpolateColors = (
  dataLength: number,
  colorScale: any, // d3 scale
  colorRangeInfo: ColorRangeInfo
) => {
  var { colorStart, colorEnd } = colorRangeInfo;
  var colorRange = colorEnd - colorStart;
  var intervalSize = colorRange / dataLength;
  var i, colorPoint;
  var colorArray = [];

  for (i = 0; i < dataLength; i++) {
    colorPoint = calculatePoint(i, intervalSize, colorRangeInfo);
    colorArray.push(colorScale(colorPoint));
  }

  return colorArray;
};
