let myMap = new Map();
myMap.set("student", 0);
myMap.set("Gabby", 72);
myMap.set("Eleanor", 76);
myMap.set("Tom", 73);
myMap.set("Ted", 75);
myMap.set("Tim", 79);
let select = document.getElementById("select");
for (let [key, value] of myMap) {
   let element = document.createElement("option");
   element.innerText=key
  select.append(element);
 
}
document.getElementById("select").onchange=function(e) {
  let index = e.target.selectedIndex;
  let name = e.target[index].innerText;
  // for (let [key, value] of myMap)  {
   //  let select = document.createElement("onchange") 
 alert(myMap.get(name));
  console.log(e)
 //  break;
  
// } 
}
