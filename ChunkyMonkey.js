const chunkArrayInGroups = (arr, size) =>
Array.from({length: Math.ceil(arr.length / size)}, (_,index) => arr.slice(size * index, size * index + size))

chunkArrayInGroups(["a", "b", "c", "d"], 2);