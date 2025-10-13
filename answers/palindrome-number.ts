function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let numStr = "";
  const xStr = String(x);
  for (let i = xStr.length - 1; i >= 0; i--) {
    numStr += xStr[i];
  }
  return xStr === numStr;
}
