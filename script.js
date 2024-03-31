// ---chapter 13-15 ---
// ---------Q1-------

// var studentName = [];

// --------Q2-------

// var stringArray = ["Wahaj","Ali","Muzzammil","Akkaz"];

// ---------Q3-------

// var numberArray = [12,24,38,48];

// ---------Q4-------

// var booleanArray = [true,false,true,false];

// ---------Q5-------

// var mixedArray = ["Wahaj",21,true,"Karach"];

// ---------Q6-------

// var educationQualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.phil.","PhD"];

// for(var i=0;i<educationQualifications.length;i++){
//     console.log(`${i}) ${educationQualifications[i]}`);
// }

// ---------Q7-------

// var studentName = ["Michael","John","Tony"];
// var studentMarks = [320,230,480];
// var percentageStudent1 = (studentMarks[0]/500)*100;
// var percentageStudent2 = (studentMarks[1]/500)*100;
// var percentageStudent3 = (studentMarks[2]/500)*100;

// console.log(`Score of ${studentName[0]} is ${studentMarks[0]} Percentage: ${percentageStudent1}%`);
// console.log(`Score of ${studentName[1]} is ${studentMarks[1]} Percentage: ${percentageStudent2}%`);
// console.log(`Score of ${studentName[2]} is ${studentMarks[2]} Percentage: ${percentageStudent3}%`);

// ---------Q8-------

// var color = ["red", "blue", "green"];
// console.log(color);

// var addColorToStart = prompt("Enter color name : ")
// color.unshift(addColorToStart);
// console.log(color);

// var addColorToEnd = prompt("Enter color name : ");
// color.push(addColorToEnd);
// console.log(color);

// var add2ColorToStart = prompt("Enter color name1 : ");
// var add3ColorToEnd = prompt("Enter  color name2 : ");
// color.splice(0,0,add2ColorToStart,add3ColorToEnd);
// console.log(color);

// color.shift();
// console.log(color);

// color.pop();
// console.log(color);

// var index = +prompt("Enter index number : ");
// var newColor = prompt("Enter color name : ");

// color[idx] = newColor;
// console.log(color);
// if (index >= 0 && index < color.length) {

//     color[index] = newColor;

//     console.log(color);
// } else {

//     console.log("Invalid index.");
// }

// var indexToDelete = +prompt("Enter index number : ");

// if (indexToDelete >= 0 && indexToDelete < color.length) {
//     colors.splice(indexToDelete, 1);
//     console.log("Updated array:", color);
// } else {
//     console.log("Invalid index.");
// }

// ---------Q9-------

// var studentsScores = [320,230,480,120];

// console.log(studentsScores.sort());

// ---------Q10-------

// var cityList = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

// var selectedCityList = cityList.slice(2,4);

// console.log(`Cities List:`)
// console.log(cityList);
// console.log(`Selected cities list:`)
// console.log(selectedCityList);

// ---------Q11-------

// var arr = ["This","is","my","cat"];
// console.log("Array")
// console.log(arr);
// console.log("String")
// console.log(arr.join(" "));
