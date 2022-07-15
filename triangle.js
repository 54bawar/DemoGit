exports.perimeter=(x,y,z)=>(x+y+z);
exports.area=(x,y,z,s)=>(Math.sqrt(s*(s-x)*(s-y)*(s-z)));


/*module.exports=(x,y,z,callback)=>{
    if(x<=0)||(y<=0)||(z<=0)||(x+y<z)||(x+z<y)||(y+z<x){
        setTimeout(()=>{
            callback(new Error("Sqaure invalid"));
        },0)

    }else{
        setTimeout(()=>{
            callback(null,{
                perimeter:()=>(x+y+z),
                area:()=>(math.sqrt(s*(s-x)*(s-y)*(s-z)))
            })
        },0)
    }
}
*/