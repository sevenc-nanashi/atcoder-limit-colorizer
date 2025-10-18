import { abs } from "./math";

export const gray = "#808080";
export const brown = "#804000";
export const green = "#008000";
export const cyan = "#00a0a0";
export const blue = "#0000ff";
export const yellow = "#a0a000";
export const orange = "#ff8000";
export const red = "#ff0000";

export const special = "#0dcaf0";

export const getColorFromNumber = (value: bigint) => {
  const aValue = abs(value);
  if (aValue === 998244353n || aValue === 1000000007n) {
    return special;
  }
  if (aValue >= 10n ** 10n) {
    return red;
  }
  if (aValue >= 10n ** 8n) {
    return orange;
  }
  if (aValue >= 10n ** 5n) {
    return yellow;
  }
  if (aValue >= 1000n) {
    return blue;
  }
  if (aValue >= 100n) {
    return cyan;
  }
  if (aValue >= 10n) {
    return green;
  }
  return brown;
};
