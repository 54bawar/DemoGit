const rectangle=require('./rectangle');
const square=require('./square');
const circle=require('./circle');
const triangle=require('./triangle');

/*
function solveRect(l,b)
{
    console.log("Solving Rectangle "+l+" "+b);
    rectangle(l,b,(err,rect)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("\nThe Area ",rect.area());
            console.log("The Perimeter ",rect.perimeter());
        }
    })
    console.log("The function has completed");
}*/



function solvesquare(s)
{
    console.log("Solving Square "+s);
    square(s,(err,sq)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("\nThe Area :",sq.area());
            console.log("\nThe Perimeter :",sq.perimeter());
        }
    })
    console.log("The Function has completed");
}


/*
function solveCircle(r)
{
    console.log("\nSolving Circle");
    if(r<=0)
        console.log("Circle dimensions invalid");
    else
    {
        console.log("Area",circle.area(r));
        console.log("Perimeter",circle.perimeter(r));
    }
}
*/

/*
function solvetriangle(x,y,z)
{
    console.log("\nSolving Triangle");
    if(x<=0||y<=0||z<=0)
        console.log("Triangle dimensions invalid");
    else
    {
        var s=(x+y+z)/2;
        console.log("Area",triangle.area(x,y,z,s));
        console.log("Perimeter",triangle.perimeter(x,y,z));
    }
}
*/


//solveRect(0,4);

solvesquare(5);

//solveCircle(6);

//solvetriangle(3,4,5);




