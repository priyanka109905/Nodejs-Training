let n=prompt("enter your age")
n=Number.parseInt(n);
if(n<0){
    alert("Not valid age to drive");
}
else if(n<9){
    alert("You are kid and ypu cannot drive");
}
else if(n<18 && n<=9){
    alert("you can think of drive after 18");
}
else{
    alert("You can drive you are above 18")
}