function reverse(x: number): number {
  let n = Math.abs(x);
  let rev = 0;

  while (n !== 0) {
    const pop = n % 10;
    n = Math.floor(n / 10);

    if (rev > (2 ** 31 - 1) / 10) return 0;
    rev = rev * 10 + pop;
  }

  return x < 0 ? -rev : rev;
}
