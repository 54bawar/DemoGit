const rectangle=require('./rectangle');
const rectangle=require('./square');
const rectangle=require('./circle');

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
    console.log("Solving Square");
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
    console.log("Solving Circle");
    if(r<=0)
        console.log("Circle dimensions invalid");
    else
    {
        console.log("Area",circle.area(r));
        console.log("Perimeter",circle.perimeter(r));
    }
}






