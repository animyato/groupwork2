
//Task 3
//Rihards Dāvids

const splitNumber = (a) => {
  	let myList = a.toString().split("");
  	myList.map(x => parseInt(x));
    return myList
}
console.log(splitNumber(12345));

//Task 5
// Rihards Dāvids

const mergeArrays = (a, b) => {
    let myList = a.concat(b);
    myList.sort((a, b) => a - b);
    for(let i = 0; i < myList.length; i++) {
        if(myList[i] === myList[i + 1]) {
            myList.splice(i, 1);
            i--;
        }
    }
    return myList;
}

console.log(mergeArrays([1, 2, 3, 4, 5], [6,5,5,4,3,3,2,1]));