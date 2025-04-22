// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.getTime());
// console.log(myDate.getFullYear);
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.toTimeString());
// console.log(myDate.getMonth());
// console.log(myDate.getHours());
// console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate1 = new Date(2023, 0, 23)
// let myCreatedDate3 = new Date("2024-4-27")
// let myCreatedDate2 = new Date(2023, 0, 5, 4)
// let myCreatedDate4 = new Date("01-14-2025")
// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate2.toDateString());
// console.log(myCreatedDate3.toDateString());
// console.log(myCreatedDate4.toDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// `${newDate.getDate()}` and the time is

newDate.toLocaleString('default',{
    weekday: "long",
})