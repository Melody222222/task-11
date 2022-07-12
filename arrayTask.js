
//Use a loop to
//display each programming language in ‘favLanguages’ I researched and found a code that worked with appendChild

let array = ["HTML", "CSS", "JavaScript", "Python", "SQL"];
//let list = '<ul>' i dont think this belong here :) 
for (i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(array[i]);
    li.appendChild(text);
    document.getElementById("favLanguages").appendChild(li);
}


let myJSTestResults = [20, 40, 50, 60, 77];
arrayLength = myJSTestResults.length;
for (i = 0; i < arrayLength; i++)  {
document.getElementById("myJSTestResults").innerHTML = myJSTestResults;
}
let averages = (20 + 40 + 50 + 60 + 77)/5;
document.getElementById("averages").innerHTML = averages;


if(averages < 49) {
    document.getElementById("myGrade").innerHTML = "F";
}
else if(averages < 59 && averages > 49) {
    document.getElementById("myGrade").innerHTML = "D";
}
else if(averages < 69 && averages > 59) {
    document.getElementById("myGrade").innerHTML = "C";
}
else if(averages > 80 && averages < 69) {
document.getElementById("myGrade").innerHTML = "B";
}
else {
    document.getElementById("myGrade").innerHTML = "A";
}

//for (i = 0; i < myJSTestResults.length; i++)  {
//document.getElementById("myGrade").innerHTML = average;
//}
//let myJSTestResults;
//myJSTestResults.forEach(function(myJSTestResults) {
//document.getElementById("myJSTestResults").innerHTML = myJSTestResults[i];
    
//});
//arrayLength = myJSTestResults.length;
//for (i = 0; i < arrayLength; i++) {
//text += myJSTestResults[i];
//}
/*




//Write the code that will calculate the average grade based on the
//results in my ‘myJSTestResults’. For example, the average grade
//based on the values in the example above would be:
//let average = (40 + 60 + 80 + 80 + 85)/5;
//Based on the average grade, decide which letter symbol should be
//assigned. Use the table below

//function return average of array
/*function average(a, n) 
{
    //sum of element
    let sum = 0;
    for (let i = 0; i < n; i++) sum  += a[i];
    return parseFloat(sum / n);

}
let myJSTestResults = [30, 40, 50, 60, 77];
let n = myJSTestResults.length;
document.write(average(myJSTestResults, n));
document.write("<p>");


*/
//GradeArray= [];
//function mean(gradeArray) {
  //  let num=0;
    //for (let i = 0; i <gradeArray.length; i++) num=num+gradeArray;
    //let divide=num/myJSTestResults.length;
   // document.write("<h2>").innerHTML = (divide);
//}

/*let myJSTestResults = [30, 40, 50, 60, 77];
let average = (30 + 40 + 50 + 60 + 77)/5;
arrayLength = myJSTestResults.length;
for (i = 0; i < arrayLength; i++)  {
document.getElementById("myJSTestResults").innerHTML = (average);
}

myJSTestResults.forEach(function(element) {
    
    ("myGrade").innerHTML;
})*/
  // document.getElementById("myGrade").innerHTML = averageGrade;


