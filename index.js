var rect={
    perimeter: (x,y)=>(2*(x+y)),
    area:(x,y)=>(x*y)
};

function solveRect(l,b){
    console.log("Solving Rectangle");
    if(l<=0||b<=0){
        console.log("Rectangle dimensions invalid");
    }else{
        console.log("Area",rect.area(l,b));
        console.log("Perimeter",rect.perimeter(l,b));
    }
}


solveRect(2,4);
solveRect(5,4);
