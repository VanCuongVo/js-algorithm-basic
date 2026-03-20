// 🟢 MỨC 1(CƠ BẢN)
// Bài 1: Đếm số chữ số
// input: 12345
// output: 5
function countNumber(number) {
    if (number === 0) {
        return 1;
    }
    let count = 0;
    while (number !== 0) {
        count++;
        number = Math.floor(number / 10);
    }

    return count;
}



let countDigit = 12345;
console.log(countNumber(countDigit));


// Bước 1 : lọc qua
// Bước 2 : 

let nums = [2, 7, 11, 15];
let targetV2 = 9;

function TwoSum(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === targetV2) {
                arr.push([i, j]);
            }
        }
    }
    return arr;

}
console.log(TwoSum(nums));

// Bài 22: Tìm phần tử trùng đầu tiên
// input: [1,2,3,2,4]
// output: 2

function findFirstDuplicate(arr) {
    const seen = new Set();  // khởi tạo một cái mảng set để add vào set => index trong set ko đc trùng phần tử
    for (let item of arr) {
        if (seen.has(item)) {
            return item;
        }
        seen.add(item);
    }
    return null;
}
console.log(findFirstDuplicate([1, 2, 3, 2, 4])); // Output: 2

// Bài 23: Đếm số lần xuất hiện
// input: [1,1,2,3,2,1]
// output: {1:3, 2:2, 3:1}


function frequencyElement(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] = count[arr[i]] ? count[arr[i]] + 1 : 1;
    }
    return count;
}

arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
console.log(frequencyElement(arr));

// Bài 24: Đảo mảng (không dùng reverse)
// input: [1,2,3]
// output: [3,2,1]

function reverseNumber(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseNumber(arr));


// Bài 25: Gộp 2 mảng
// input: [1, 2] và[3, 4]
// output: [1, 2, 3, 4]

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combined = numbers1.concat(numbers2);
console.log(combined);









