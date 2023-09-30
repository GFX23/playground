export function timeout(delay: number): Promise<void> {
  return new Promise((res) => setTimeout(res, delay));
}

export const mergeSort = async (
  array: number[],
  updateState: React.Dispatch<React.SetStateAction<number[]>>
): Promise<void> => {
  // checking for single or none element in array, if true, theres nothing to sort
  if (array.length <= 1) {
    return;
  }

  // calculating the middle of the array
  const middle: number = Math.floor(array.length / 2);
  const left: number[] = array.slice(0, middle);
  const right: number[] = array.slice(middle);

  await mergeSort(left, updateState);
  await mergeSort(right, updateState);

  await merge(array, left, right, updateState);
};

const merge = async (
  array: number[],
  left: number[],
  right: number[],
  updateState: React.Dispatch<React.SetStateAction<number[]>>
): Promise<void> => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array[k++] = left[i++];
    } else {
      array[k++] = right[j++];
    }
  }

  while (i < left.length) {
    array[k++] = left[i++];
  }

  while (j < right.length) {
    array[k++] = right[j++];
  }

  // Update state to trigger re-render
  updateState((prev) => [...prev, ...array]);

  await timeout(100);
};
