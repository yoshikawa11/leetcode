function myAtoi(s: string): number {
  const step1 = applyStep1(s);
  const { rest, isNegative } = applyStep2(step1);
  const numStr = applyStep3(rest);
  const num = Number(numStr);
  return applyStep4(isNegative ? -num : num);
}

function applyStep1(str: string): string {
  return str.trimStart();
}

function applyStep2(str: string): { rest: string; isNegative: boolean } {
  if (str.startsWith("-")) return { rest: str.slice(1), isNegative: true };
  if (str.startsWith("+")) return { rest: str.slice(1), isNegative: false };
  return { rest: str, isNegative: false };
}

function applyStep3(str: string): string {
  let digits = "";
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c < "0" || c > "9") break;
    digits += c;
  }
  return digits === "" ? "0" : digits;
}

function applyStep4(num: number): number {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;
  if (num < INT_MIN) return INT_MIN;
  if (num > INT_MAX) return INT_MAX;
  return num;
}
