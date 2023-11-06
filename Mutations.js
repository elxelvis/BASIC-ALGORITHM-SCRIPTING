const mutation = ([a,b]) =>
[...b.toLowerCase()].every(element => a.toLowerCase().includes(element))

mutation(["hello", "hey"]);