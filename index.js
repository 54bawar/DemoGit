const rectangle=require('./rectangle');

function solveRect(l,b){
    console.log("Solving Rectangle");
    if(l<=0||b<=0){
        console.log("Rectangle dimensions invalid");
    }else{
        console.log("Area",rectangle.area(l,b));
        console.log("Perimeter",rectangle.perimeter(l,b));
    }
}


solveRect(2,4);
solveRect(5,4);
