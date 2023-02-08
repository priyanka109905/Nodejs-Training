// There are two ways to define function
// first is function declration
// function expression

function run(){
    console.log('run');
}

let walk=function(){
console.log('walk')
};

let move=walk;
run();
move();