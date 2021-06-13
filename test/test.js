// Задание 1-5, 10:
searchButton.onclick = () => {
    alert(arr[0].Name);
    if (searchTerm.value != "google")
        setTimeout('alert( searchTerm.value)', 3000);
    else setTimeout('alert("Yandex круче. Но это не точно")', 3000);
};

let arr = [
       {Name:'Sasha', age: 12},
       {Name:'Pasha', age: 10},
       {Name:'Masha', age: 20},];

/*
// Задание 6:
function superSum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
alert( superSum(3, 87) );

// Задание 7:
let array = [2, 5, 6, -7, 12, 15, 0, 3, -8, 9];
let maxval = getMaxValue(array);
let minval = getMinValue(array);
console.log(maxval);
console.log(minval);

function getMaxValue(array){
    let maxval = array[0];
    for (let i = 0; i < array.length; i++) {
        if (maxval < array[i]) maxval = array[i];
    }
    return maxval;
}
function getMinValue(array){
    let minval = array[0];
    for (let i = 0; i < array.length; i++) {
        if (minval > array[i]) minval = array[i];
    }
    return minval;
}

// Задание 8:
let a = "XXX";
let b = "YYY";
b = [a, a = b][0];
console.log(a);
console.log(b);

// Задание 9:
let array = [2, 5, 6, -7, 12, 15, 0, 3, -8, 9, 25325];
let max = findMax(array);
function findMax(array){
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
}
console.log(max);
*/
