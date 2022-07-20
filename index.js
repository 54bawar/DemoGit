const rectangle=require('./rectangle');
const square=require('./square');
const circle=require('./circle');
const triangle=require('./triangle');

function solveRect(l,b)
{
    console.log("\nSolving Rectangle "+l+" "+b);
    rectangle(l,b,(err,rect)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("\nThe Area ",rect.area());
            console.log("The Perimeter ",rect.perimeter());
        }
    })
    console.log("The function has completed");
}


function solvesquare(s)
{
    console.log("\nSolving Square "+s);
    square(s,(err,tr)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("\nThe Area :",tr.area());
            console.log("\nThe Perimeter :",tr.perimeter());
        }
    })
    console.log("The Function has completed");
}

function solveCircle(r)
{
    console.log("\nSolving Circle "+r);
    circle(r,(err,cir)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("\nThe Area : ",cir.area());
            console.log("\nThe Perimeter : ",cir.perimeter());
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

function solvetriangle(x,y,z)
{
    console.log("\nSolving Triangle having sides "+x+' '+y+' '+z);
    triangle(x,y,z,(err,sq)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("\nThe Area :",sq.area());
            console.log("\nThe Perimeter :",sq.perimeter());
        }
    })
    console.log("The Function has completed");
}

solveRect(0,4);

solvesquare(5);

solveCircle(6);

solvetriangle(3,4,5);




