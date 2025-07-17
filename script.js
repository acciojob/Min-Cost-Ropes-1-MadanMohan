function mincost(arr) {
  const minHeap = [...arr];
  minHeap.sort((a, b) => a - b); // emulate min-heap

  let totalCost = 0;

  while (minHeap.length > 1) {
    const first = minHeap.shift();
    const second = minHeap.shift();
    const combined = first + second;
    totalCost += combined;

    // Insert back and keep it sorted (inefficient heap simulation)
    minHeap.push(combined);
    minHeap.sort((a, b) => a - b);
  }

  return totalCost;
}

module.exports = mincost;
