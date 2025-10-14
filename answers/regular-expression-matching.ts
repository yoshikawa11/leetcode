function isMatch(s: string, p: string): boolean {
  const m = s.length;
  const n = p.length;

  // dp[i][j] = s[0..i-1] と p[0..j-1] がマッチするか
  const dp: boolean[][] = Array.from(
    { length: m + 1 },
    () => Array(n + 1).fill(false),
  );

  // 空文字と空パターンはマッチ
  dp[0][0] = true;

  // パターンが a*, a*b*, a*b*c* のように空文字にマッチする場合を初期化
  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const currentChar = p[j - 1];

      if (currentChar === "." || currentChar === s[i - 1]) {
        // 現在の文字が一致
        dp[i][j] = dp[i - 1][j - 1];
      } else if (currentChar === "*") {
        // '*' は「直前文字が0回」または「1回以上繰り返す」
        dp[i][j] = dp[i][j - 2] || // 直前文字0回
          ((p[j - 2] === "." || p[j - 2] === s[i - 1]) && dp[i - 1][j]); // 直前文字1回以上
      }
    }
  }

  return dp[m][n];
}
