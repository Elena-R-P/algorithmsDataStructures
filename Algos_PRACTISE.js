// // Write a program that would print all the numbers from 1 to 255

// function numAll() {
//     for (let i=1; i<=255; i++){
//         console.log(i);
//     }
//     return this;
// }
// numAll();

// // Write a program that would print all the odd numbers from 1 to 1000

// function oddNum() {
//     for (let i=1; i<=1000; i++){ 
//         //i++ or i=i+2(and without if)
//         if(i%2 == 1){
//             console.log(i);
//         }
//     }
//     return this;
// }
// oddNum();

// //Write a program that would print the sum of all the odd numbers from 1 to 5000
// function sumOfOdd(){
//     let sum = 0;
//     for (i=1; i<=5000; i=i+2){
//         sum = sum + i;
//     }
//     console.log(sum);
//     return(sum);
// }
// sumOfOdd();

// // Iterate through the givven array
// function iterateArr(arr){
//     for (let i=0; i<arr.length;i++){
//         console.log(arr[i]);
//     }
//     return arr;
// }
// let arr = [1,3,5,7,9,13];
// iterateArr(arr);

// // Find Max
// function findMax(arr){
//     let max=0;
//     for (let i=0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     console.log(max);
//     return max;
// }
// arr = [20,-3, 3, 5,7]
// findMax(arr);

// // Find Average
// function findAverage(arr){
//     let avg = 1;
//     let sum = 0;
//     for (let i=0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     avg = sum/arr.length;
//     console.log(avg);
//     return avg;
// }
// arr = [1,3,5,7,20];
// findAverage(arr);

// // Array With Odd Numbers
// function oddNumArr(){
//     let arr = [];
//     for (let i=1; i<256; i=i+2){
//         arr.push(i);
//     }
//     console.log(arr);
//     return arr;
// }
// oddNumArr();

// // Greater Than Y
// function greaterThanY(y, arr){
//     let count = 0;
//     for (let i=0; i<arr.length;i++){
//         if (arr[i]>y){
//             count++;
//         }
//     }
//     console.log(count);
//     return count;
// }
// greaterThanY(3, [1,3,5,7,9]);

// // Square the Values
// function squareValues(arr){
//     for (let i=0; i<arr.length; i++){
//         arr[i] = arr[i]*arr[i];
//     }
//     console.log(arr);
//     return arr;
// }
// arr =  [1,5, 10, -2];
// squareValues(arr);

// // Eliminate Negative Numbers
// function eliminateNegative(arr){
//     for (let i=0; i<arr.length; i++){
//         if(arr[i] < 0){
//             arr[i] = 0;
//         }
//     }
//     console.log(arr);
//     return arr;
// }
// arr = [1,5, -10, -2];
// eliminateNegative(arr);

// // Max, Min, and Average
// function minMaxAvg(arr){
//     let min = 0;
//     let max = 0;
//     let avg = 1;
//     let sum = 0;
//     for (let i=0; i< arr.length; i++){
//         if (arr[i]<min){
//             min = arr[i];
//         }
//         if (arr[i]> max){
//             max = arr[i];
//         }
//         sum = sum + arr[i];
//     }
//     avg = sum/arr.length;
//     console.log(`Max is: ${max}, min is: ${min}, and avg: ${avg} `);
//     return arr;
// }
// arr = [1,5, 10, -2];
// minMaxAvg(arr);

// // Shifting the values in the array
// function shiftingArr(arr){
//     for (let i=0; i<arr.length-1; i++){
//         arr[i] = arr[i+1];
//     }
//     arr[arr.length-1] = 0;
//     console.log(arr);
//     return arr;
// }
// arr = [1,5, 10, 7, -2];
// shiftingArr(arr);

// // Number to String
// function numToStr(arr){
//     for (let i=0; i<arr.length; i++){
//         if (arr[i]< 0){
//             arr[i] = 'Dojo';
//         }
//     }
//     console.log(arr);
//     return arr;
// }
// arr = [-1, -3, 6];
// numToStr(arr);

// // Random Array
// function randomArr(){
//     let arr = [];
//     let random = 0;
//     for (let i=1; i<=10; i++){
//         random = Math.floor(Math.random()*100);
//         arr.push(random);
//     }
//     console.log(arr);
//     return arr;
// }
// randomArr();

// // Swapping two values
// function swapFirstLast(arr){
//     let temp = 0;
//     for (let i=0; i<arr.length; i++){
//         temp = arr[0];
//         arr[0] = arr[arr.length-1];
//         arr[arr.length-1] = temp;
//     }
//     console.log(arr);
//     return arr;
// }
// arr = [1, 2, 3, 4, 6];
// swapFirstLast(arr);

// // Reversing
// function reversingArr(arr){
//     for (var i=0; i<(arr.length/2); i++){
//         let temp = arr[i];
//         arr[i] = arr[arr.length-1-i];
//         arr[arr.length-1-i] = temp;
//     }
//     console.log(arr);
//     return arr;
// }
// arr = [-3,5,1,3,2,10];
// reversingArr(arr);

// // Insert X in Y
// function insertXinY(arr){
//     let x = 10;
//     let y = 2;
//     arr.push(0);
//     for (var i=arr.length-1; i>y;i--){
//         arr[i] = arr[i-1];
//     }
//     arr[i] = x;
//     console.log(arr);
//     return arr;
// }
// arr = [1,3,5,7]
// insertXinY(arr);

// RemovingNegatives
const removingNegatives = (arr) => {
    var count = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i] < 0){
            count ++;
        } else {
            arr[i - count] = arr[i];
        }
    }
    while (count--){
        arr.pop()
    }
    return arr;
}
arr = [0, -1, 2, -3, 4, -5, 6]
console.log(removingNegatives(arr));