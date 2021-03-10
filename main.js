var pizza_names=["1 Margharita pizza","2 Veg party pizza","3 Green farmhouse","4 Chicken Tandoori pizza"]
console.log(pizza_names);
var added_pizza=document.getElementById(p1).value;

function additem(){
   var updated_menu=pizza_names.push(added_pizza);
   console.log(updated_menu);
   document.getElementById(s5).innerHTML="5";
   document.getElementById(p5).innerHTML=added_pizza;
}