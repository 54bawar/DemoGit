const rectangle=require('./rectangle');
const square=require('./square');
const circle=require('./circle');

function solveRect(l,b)
{
    console.log("Solving Rectangle");
    if(l<=0||b<=0)
        console.log("Rectangle dimensions invalid");
    else
    {
        console.log("Area",rectangle.area(l,b));
        console.log("Perimeter",rectangle.perimeter(l,b));
    }
}

function solvesquare(s)
{
    console.log("\nSolving Square");
    if(s<=0)
        console.log("Square dimensions invalid");
    else
    {
        console.log("Area",square.area(s));
        console.log("Perimeter",square.perimeter(s));
    }
}

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

solveRect(5,4);

solvesquare(5);

solveCircle(6);




