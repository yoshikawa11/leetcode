function longestCommonPrefix(strs: string[]): string {
  const shortest = strs.reduce((a, b) => a.length <= b.length ? a : b);

  for (let i = 0; i < shortest.length; i++) {
    const ch = shortest[i];
    for (const s of strs) {
      if (s[i] !== ch) {
        return shortest.slice(0, i);
      }
    }
  }

  return shortest;
}
