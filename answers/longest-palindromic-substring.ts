function longestPalindrome(s: string): string {
  let formatted = s.split("").join("#");
  formatted = "^" + formatted + "$";
  let answer = "";
  for (let i = 0; i < formatted.length; i++) {
    let left = i;
    let right = i;
    while (left && right) {
      if (formatted[left] !== formatted[right]) break;
      left--;
      right++;
    }
    const temp = formatted.slice(left + 1, right);
    if (answer.length < temp.length) answer = temp;
  }
  return answer.replaceAll("#", "");
}
