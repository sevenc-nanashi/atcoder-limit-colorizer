export const gray = "#808080";
export const brown = "#804000";
export const green = "#008000";
export const cyan = "#00a0a0";
export const blue = "#0000ff";
export const yellow = "#a0a000";
export const orange = "#ff8000";
export const red = "#ff0000";

export const special = "#0dcaf0";

export const getColorFromNumber = (value: number) => {
  const aValue = Math.abs(value);
  if (aValue === 998244353 || aValue === 1000000007) {
    return special;
  }
  if (aValue >= 10**18) {
    return red;
  }
  if (aValue >= 10**9) {
    return orange;
  }
  if (aValue >= 10**5) {
    return yellow;
  }
  if (aValue >= 1000) {
    return blue;
  }
  if (aValue >= 100) {
    return cyan;
  }
  if (aValue >= 10) {
    return green;
  }
  return brown;
};
