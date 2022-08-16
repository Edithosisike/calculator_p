let result=document.getElementById("display");
let culate=(number)=>{
  result.value=result.value+number;
}
let Answer=()=>{
  try{
result.value=eval(result.value)
  }
  catch(err){
    alert("Enter a valid input");
  }
}
function clr(){
  result.value= " ";
}
function del(){
  result.value= result.value.slice(0,-1);
}