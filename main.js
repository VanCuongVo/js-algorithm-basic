// Bài 1: Kiểm tra số chẵn / lẻ

// Viết hàm nhận vào 1 số, trả về "chan" hoặc "le".

var number = 10;
function checkEvenOrOdd(number) {
    for (var i = 0; i < number; i++) {
        if (i % 2 === 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
    }
}
checkEvenOrOdd(number);

// Bài 2: Tổng từ 1 → n

// Nhập n, tính tổng từ 1 đến n.

// 👉 Ví dụ:
// n = 5 → 1 + 2 + 3 + 4 + 5 = 15

function sumNumber(number) {
    var sum = 0;
    for (var i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

var res = sumNumber(number);
console.log("Tong: " + res);

// Bài 3: Đảo ngược chuỗi
// input: "hello"
// output: "olleh"

function reseverString(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
var str = "hello";
var res = reseverString(str);
console.log(res);

// Bài 4: Kiểm tra số nguyên tố

// Viết hàm kiểm tra số có phải số nguyên tố không.
// Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true;
}

var res = isPrime(number);
console.log(res);


// Bài 5: Đếm số lần xuất hiện phần tử
// input: [1, 2, 2, 3, 1, 2]
// output: {1:2, 2:3, 3:1}

// B1 : khỏi tạo cái mảng
// B2 : Lọc qua
// B3 : kiểm tra mảng mới vừa tạo có index chưa nếu r có rồi thì cộng dồn , nếu chưa thì ko cộng


function countElement(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
    }
    return obj;
}
var arr = [1, 2, 2, 3, 1, 2];
var res = countElement(arr);
console.log(res);


// Bài 6: Tìm số lớn thứ 2
// input: [5,1,9,3,7]
// output: 7

// B1 : tìm số lớn nhất
// B2 : xóa khỏi mảng
// B3 : tìm số lớn thứ 2
// B4 : trả về số lớn thứ 2

function findSecondLargest(arr) {
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    var index = arr.indexOf(largest);
    console.log(index);
    arr.splice(index, 1); // ví trí só 2 và số lượng phần tử

    var secondLargest = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

var arr = [5, 1, 9, 3, 7];
var res = findSecondLargest(arr);
console.log(res);


//Bài 7: Xóa phần tử trùng
// input: [1,2,2,3,1]
// output: [1,2,3]

// Bước 1 : Lọc qua 
// Bước 2 : sau đó check và push vào mảng mới dưới dạng -1


function removeDuplicate(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var arr = [1, 2, 2, 3, 1];
var res = removeDuplicate(arr);
console.log(res);


// 🟢 MỨC 1 — CƠ BẢN (luyện tay + syntax)

// Bài 1: In ra các số chẵn từ 1 → n
// input: n = 10
// output: 2 4 6 8 10

function printEvenNumber(number) {
    for (var i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            console.log("Even: " + i);
        }
    }
}

var number = 10;
printEvenNumber(number);


// Bài 2: Tính giai thừa
// input: 5
// output: 120

function factorial(number) {
    var res = 1;
    for (var i = 1; i <= number; i++) {
        res *= i;
    }
    return res;
}

var number = 5;
var res = factorial(number);
console.log(res);

// Bài 3: Đếm số chữ số của 1 số
// input: 12345
// output: 5

function countDigits(number) {
    var count = 0;
    while (number !== 0) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;
}
console.log(countDigits(12345));


// Bài 4: Tìm số lớn nhất trong mảng
// input: [1, 5, 2, 9, 3]
// output: 9

function findMaxArrays(number) {
    var max = number[0];
    for (var i = 0; i < number.length; i++) {
        if (number[i] > max) {
            max = number[i];
        }
    }
    return max;
}

var number = [1, 5, 2, 9, 3];
var res = findMaxArrays(number);
console.log(res);

// Bài 5: Tính tổng các số trong mảng
// input: [1,2,3,4]
// output: 10


function sumArrays(number) {
    var sum = 0;
    for (var i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum;
}
var res = sumArrays(number);
console.log(res);


// Bài 6: Viết hàm chuyển chữ thường → HOA
// input: "hello"
// output: "HELLO"

function convertToUpperCase(str) {
    return str.toUpperCase();
}
const textLowerCase = "hello";
const textUpperCase = convertToUpperCase(textLowerCase);
console.log(textUpperCase);


// Bài 7: Kiểm tra số âm / dương / 0
// input: -5 → "am"
// input: 0 → "zero"
// input: 10 → "duong"

function checkNumber(number) {
    if (number < 0) {
        console.log("am");
    } else if (number > 0) {
        console.log("duong");
    } else {
        console.log("Zero");
    }
}

var number = -5
checkNumber(number);


// Bài 8: Đếm số số chẵn trong mảng
// input: [1,2,3,4,6]
// output: 3

function checkEvenArrays(number) {
    var count = 0;
    for (var i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

var number = [1, 5, 2, 9, 3];
var res = checkEvenArrays(number);
console.log(res);


// Bài 9: Tìm số nhỏ nhất
// input: [5,2,8,1]
// output: 1

function minArrays(number) {
    var min = number[0];
    for (var i = 0; i < number.length; i++) {
        if (number[i] < min) {
            min = number[i];
        }
    }
    return min;
}

var number = [5, 2, 8, 1];
console.log(minArrays(number));



// Bài 10: Nối mảng thành chuỗi
// input: ["a","b","c"]
// output: "abc"

const input = ["a", "b", "c"];
const output = input.join(''); // Kết quả: "abc"
console.log(output);



// Bài 11: Lọc số chẵn
// input: [1,2,3,4,5]
// output: [2,4]

function filterEvent(number) {
    let arr = [];
    for (var i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            arr.push(number[i]);
        }
    }
    return arr;
}
var number = [5, 2, 8, 1];
console.log(filterEvent(number));

// Bài 12: Bình phương các phần tử
// input: [1,2,3]
// output: [1,4,9]
function squareArray(arr) {
    return arr.map(num => Math.pow(num, 2));
}
console.log(squareArray([1, 2, 3])); // [1, 4, 9]

// Bài 13: Tìm phần tử đầu tiên > 10
// input: [3,7,12,5]
// output: 12

function findFirstGreaterThan10(arr) {
    return arr.find(num => num > 10);
}

console.log(findFirstGreaterThan10([3, 7, 12, 5, 13])); // 12

// Bài 14: Kiểm tra tất cả phần tử > 0
// input: [1,2,3]
// output: true

function isAllGreaterThanZero(arr) {
    return arr.every(num => num > 0);
}

console.log(isAllGreaterThanZero([3, 7, 12, 5, 13]));

// Bài 15: Có phần tử nào < 0 không
// input: [1, 2, -3]
// output: true

function isNegativeNumber(arr) {
    return arr.some(num => num < 0);
}

console.log(isNegativeNumber([3, 7, 12, 5, -3]));


// Bài 16: Đếm số lẻ
// input: [1,2,3,4,5]
// output: 3

function countOdd(arr) {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            count++;
        }
    }
    return count;
}

console.log(countOdd([3, 7, 12, 5, 13]));













