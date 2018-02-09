//var a = [ 2, 1, 5, 3];
//var b = [[5, 2, 3, 1], [4, 1, 5, 3], [2, 1, 3, 2], [4, 1, 5, 3]  ];


var findAMatch = function (firstArray, secondArray) {
    var finalResultsArray = [];
    secondArray.forEach(secondArrayElements => {
        var temp = [];
        for (i in secondArrayElements) {
            for (j in firstArray) {
                if (i == j) {
                    temp.push(Math.abs(firstArray[j] - secondArrayElements[i]));
                }
            }
        }
        // sum temp element, and add to finalResultsArray
        finalResultsArray.push(temp.reduce((a, b) => a + b, 0));
    });
    return finalResultsArray;
}

//var finalResultsArray = findAMatch(a, b);

var findIndexesOfSmallestNumbersInFinalResults = function(finalResultsArray){

    Array.min = function (array) {
        return Math.min.apply(Math, array);
    }    
    var smallestNumberInFinalResultsArray = Array.min(finalResultsArray);
    var indexesOfSmallestNumber = [];
    for (let i = 0; i < finalResultsArray.length; i++) {
        const element = finalResultsArray[i];
        if (element == smallestNumberInFinalResultsArray) {
            indexesOfSmallestNumber.push(finalResultsArray.indexOf(smallestNumberInFinalResultsArray, i));
        }
    }
    return indexesOfSmallestNumber;
        
}

//console.log(finalResultsArray);
//console.log(findIndexesOfSmallestNumbersInFinalResults(finalResultsArray));



module.exports.findAMatch = findAMatch;
module.exports.getIndexOfSmallestInArray = findIndexesOfSmallestNumbersInFinalResults

// var getIndexOfSmallestInArray = function () {
//     Array.min = function (array) {
//         return Math.min.apply(Math, array);
//     }
//     var r = findAMatch(a, b);
//     var minimum = Array.min(findAMatch(a, b));
//     return r.indexOf(minimum);
// }