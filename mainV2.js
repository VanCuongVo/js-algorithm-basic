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



// Bài 1: Đếm số chẵn

// 👉 Input: [1, 2, 3, 4, 6]
// 👉 Output: 3


// Version 1
function countEvent(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countEvent(arr));

// Version 2
function countEventUseFilter(arr) {
    let eventNumber = arr.filter(function (num) {
        return num % 2 === 0;
    });

    return eventNumber.length;
}

console.log(countEventUseFilter(arr));


// Bài 2: Tính tổng mảng

// 👉 Input: [1, 2, 3, 4]
// 👉 Output: 10

// Version dùng for
function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArr(arr));

// Version dùng Fliter // trả về true or false

function sumArrUseFilter(arr) {
    let sum = 0;
    arr.filter(num => {
        sum += num
    })
    return sum;
}

console.log(sumArrUseFilter(arr));

// Version reduce

function sumArrUseReduce(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

console.log(sumArrUseReduce(arr));

// Bài 3: Tìm số lớn nhất

// 👉 Input: [5, 2, 9, 1]
// 👉 Output: 9

function findMax(arr) {
    return arr.reduce((max, num) => num > max ? num : max);
}
console.log(findMax(arr));

// Bài 4: Đếm số chữ số

// 👉 Input: 123456
// 👉 Output: 6

function countElement(nums) {
    let count = 0;
    while (nums !== 0) {
        count++;
        nums = Math.floor(nums / 10);
    }
    return count;
}

console.log(countElement(123456));

// Bài 5: Kiểm tra tất cả phần tử > 0

// 👉 Input: [1, 2, 3] → true
// 👉 Input: [1, -2, 3] → false

const allPositive = (arr) => {
    return arr.every(num => {
        return num > 0;
    });
}
arr = [1, -2, 3];
console.log(allPositive(arr));

// const someNegative = (arr) => {
//     return arr.some((num) => {
//         return num < 0;
//     })
// };
// arr = [1, -2, 3];
// console.log(someNegative(arr));


// Bài 6: Bình phương các phần tử

// 👉 Input: [1, 2, 3]
// 👉 Output: [1, 4, 9]
// 👉 Gợi ý: map()

const squareArrayUseMap = (arr) => {
    return arr.map(num => Math.pow(num, 2));
}
console.log(squareArrayUseMap(arr));

// Bài 7: Lọc số > 10

// 👉 Input: [5, 12, 8, 20]
// 👉 Output: [12, 20]
// 👉 Gợi ý: filter()

const filterNumberGeaterThan10 = (arr) => {
    return arr.filter(num => num > 10);
}
arr = [5, 12, 8, 20]
console.log(filterNumberGeaterThan10(arr));

// Bài 8: Tìm phần tử đầu tiên > 10

// 👉 Input: [5, 8, 12, 20]
// 👉 Output: 12
// 👉 Gợi ý: find()

const findFristNumberGreaterThan10 = (arr) => {
    return arr.find(num => num > 10);
}

console.log(findFristNumberGreaterThan10(arr));

// Bài 10: Kiểm tra tất cả là số chẵn

// 👉 Input: [2, 4, 6] → true
// 👉 Gợi ý: every()

const checkEvent = (arr) => {
    return arr.every(num => num % 2 === 0);
}

arr = [2, 4, 6];
console.log(checkEvent(arr));


// Bài 11: Đếm số lần xuất hiện

// 👉 Input: [1,1,2,3,2,1]
// 👉 Output:
// {1: 3, 2: 2, 3: 1}

const countOccurrences = (arr) => {
    return arr.reduce((arr, cur) => {
        arr[cur] = arr[cur] ? arr[cur] + 1 : 1;
        return arr;
    }, {});
}
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const re = countOccurrences(items);
console.log(re);

// Bài 12: Đảo ngược chuỗi

// 👉 Input: "hello"
// 👉 Output: "olleh"
let strHello = "Hello";
let reverseStr = [...strHello].reverse().join('');
console.log(reverseStr);


// Bài 13: Kiểm tra palindrome

// 👉 Input: "madam" → true
// 👉 Input: "hello" → false

function reverse(s) { // using this method for second half of string to be embedded
    const reversed = s.split("").reverse().join("");
    return s === reversed;
}

// s = madam;
console.log(reverse("Helllo"));

// Bài 14: Xoá phần tử trùng

// 👉 Input: [1,2,2,3,3,4]
// 👉 Output: [1,2,3,4]

const removeDuplicateUseArrowFuntion = (arr) => {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;

}
arr = [1, 2, 2, 3, 3, 4];
console.log(removeDuplicateUseArrowFuntion(arr));

// Bài 15: Gộp 2 mảng không trùng

// 👉 Input: [1,2,3] và [2,3,4]
// 👉 Output: [1,2,3,4]

var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];

var arr3 = [...new Set([...arr1, ...arr2])];

console.log(arr3);






































