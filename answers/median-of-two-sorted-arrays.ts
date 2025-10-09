function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const flatArray = nums1.concat(nums2).toSorted((a, b) => a - b);
  const middle = Math.floor(flatArray.length / 2);
  if (flatArray.length % 2 !== 0) {
    return Number(flatArray[middle].toFixed(5));
  } else {
    return Number(((flatArray[middle - 1] + flatArray[middle]) / 2).toFixed(5));
  }
}
