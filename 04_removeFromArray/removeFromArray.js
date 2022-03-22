const removeFromArray = function(array, value) {
    let args = Array.from(arguments);
    console.log(args);
    console.log(args.length);
    for (let n = 1; n < args.length; n++){
        console.log(n);
        for (let i = 0; i < array.length; i++){
            if (array[i] === args[n]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
