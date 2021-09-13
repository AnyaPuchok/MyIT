var mas = ["foto/1.jpg","foto/2.png","foto/3.jpg","foto/4.jpg","foto/5.jpg"] 
var to = -1; 

function right_arrow() 
{ debugger;
 let obj = document.getElementById("img");
  if (to < mas.length-1)  to++ 
   else
     to = 0;
     obj.src = mas[to];	 
}

function left_arrow() 
{    debugger; 
 let obj = document.getElementById("img");
if (to > 0) to--;
  else
    to = mas.length-1;
    obj.src = mas[to];	  			 
}

