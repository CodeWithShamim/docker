// shuffle array item 
const shuffleItem = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const getShuffle = shuffleItem.sort(() => Math.random() - .5);
console.log(getShuffle);

// compare two array
const handleCompareArray = (a, b) => {
    return a.length === b.length && a.every((v, i) => v === b[i])
}

const a = [1, 2, 3];
const b = [1, 2, 3];
const isCompare = handleCompareArray(a, b);
console.log(isCompare);