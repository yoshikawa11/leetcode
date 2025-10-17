function intToRoman(num: number): string {
  let answer = "";
  while (num > 0) {
    for (const [numUnit, values] of pairs) {
      const count = Math.floor(num / numUnit);
      num -= count * numUnit;
      answer += values.repeat(count);
    }
  }
  return answer;
}

const pairs: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];
