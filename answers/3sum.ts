function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const sortedArray = nums.toSorted((a, b) => a - b);

  for (let i = 0; i < sortedArray.length - 2; i++) {
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) continue;

    let left = i + 1;
    let right = sortedArray.length - 1;

    while (left < right) {
      const sum = sortedArray[i] + sortedArray[left] + sortedArray[right];
      if (sum === 0) {
        result.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
        left++;
        right--;
        while (left < right && sortedArray[left] === sortedArray[left - 1]) {
          left++;
        }
        while (left < right && sortedArray[right] === sortedArray[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
