export function timeout(delay: number): Promise<void> {
  return new Promise((res) => setTimeout(res, delay));
}

export const mergeSort = async (
  array: number[],
  updateState: React.Dispatch<React.SetStateAction<number[]>>
): Promise<number[]> => {
  // checking for single or none element in array, if true, theres nothing to sort
  if (array.length <= 1) {
    return array;
  }

  // calculating the middle of the array
  const middle: number = Math.floor(array.length / 2);
  const left: number[] = array.slice(0, middle);
  const right: number[] = array.slice(middle);
 
  const leftResult = await mergeSort(left, updateState);
  const rightResult = await mergeSort(right, updateState);
 


  const result = await merge(array, leftResult, rightResult, updateState);
  //updateState(result)
  console.log("mergingSort", result)
  await timeout(1000);
  return result

};

const merge = async (
  array: number[],
  left: number[],
  right: number[],
  updateState: React.Dispatch<React.SetStateAction<number[]>>
): Promise<number[]> => {
  let i = 0;
  let j = 0;
  let k = 0;
  console.log("mergeStart", array)
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

  console.log("merge complete", array)
  updateState(array);


  await timeout(1000);
  return array
};
