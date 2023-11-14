/*
1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).
2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).
4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).
5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
*/

// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).

let array = [3,5,7,9,10,4,5];

let arrayMap = array.map((item) => {
    if(item > 5){
        return item;
    }else{
        return null;
    }
});
let arrayFilter = array.filter((item) => item > 5);
console.log(arrayMap);
console.log(arrayFilter);
// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.

let totalArray = array.reduce((total,item) => total + item);
console.log(totalArray);

// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).

let message = array.some((item) => item == 5);
function check(){
    if(message == false){
        return "không tìm thấy";
    }else{
        return 5;
    }
}
console.log(check());
// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).

let elementEvery = array.every((item) => item > 0);
console.log(elementEvery);

// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.

let result = array.filter( (item) => item > 3);
console.log(result[0]);

// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".

let [first,...rest] = array;
console.log(first);
console.log(rest);

// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".

let personArray = [
    {
    name : "Lam",
    age : 22
    },
    {
    name : "Nam",
    age : 27
     },
     {    
    name : "Thanh",
    age : 23
  }
];
personArray.forEach( person => {
    let {name,age} = person
    console.log(name);
    console.log(age);
});

// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.

let total = [...array];
let resultTotal = total.reduce((total,item)=> total+item);
console.log(resultTotal);

// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.

let nameArray = ["Nam","Thành","Trí"];
let welcomeName = `welcome ` + [...nameArray];
console.log(welcomeName);

// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.

let book = {
    title : 'Tôi tài giỏi, bạn cũng thế',
    author : 'Adam Khoo',
    pages : '306',
    displayInfo : () => {
        let {title,author,pages} = book;
        console.log(title);
        console.log(author);
        console.log(pages);
    }
}
book.displayInfo();