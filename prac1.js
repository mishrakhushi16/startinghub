const todaydate=new Date();
console.log(todaydate);
const arr=["Sunday","Monday","Tuesday"];
let i=todaydate.getDay();
console.log(`Today Day: ${arr[i]} `);
console.log(`Today time: ${todaydate.getHours()}: ${todaydate.getMinutes()}: ${todaydate.getSeconds()}`)