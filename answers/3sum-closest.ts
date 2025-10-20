function threeSumClosest(nums: number[], target: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let closestSum = nums[0] + nums[1] + nums[2];
  let minDiff = Math.abs(closestSum - target);

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(sum - target);

      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      if (sum === target) {
        return sum;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}
