function longestPalindrome(s: string): string {
  if (s.length === 0) return "";

  const t = "^#" + s.split("").join("#") + "#$";
  const n = t.length;
  const p: number[] = new Array(n).fill(0);
  let center = 0;
  let right = 0;

  for (let i = 1; i < n - 1; i++) {
    const i_mirror = 2 * center - i;

    if (i < right) {
      p[i] = Math.min(right - i, p[i_mirror]);
    }

    while (t[i + (1 + p[i])] === t[i - (1 + p[i])]) {
      p[i]++;
    }

    if (i + p[i] > right) {
      center = i;
      right = i + p[i];
    }
  }

  let maxLen = 0;
  let centerIndex = 0;
  for (let i = 1; i < n - 1; i++) {
    if (p[i] > maxLen) {
      maxLen = p[i];
      centerIndex = i;
    }
  }

  const start = Math.floor((centerIndex - maxLen) / 2);
  return s.substring(start, start + maxLen);
}
