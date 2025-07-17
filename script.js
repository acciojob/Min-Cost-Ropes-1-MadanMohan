function mincost(arr) { 
  // Sort numerically (very important!)
  arr.sort((a, b) => a - b); 

  // Start with first two elements
  let result = arr[0] + arr[1];
  let temp = result;

  // Combine each next element
  for (let i = 2; i < arr.length; i++) {
    temp = temp + arr[i];
    result = result + temp;
  }

  return result;
}

module.exports = mincost;

