module.exports=(x,y,z,callback)=>{
    if((x<=0)||(y<=0)||(z<=0)||(x+y<z)||(x+z<y)||(y+z<x)){
        setTimeout(()=>{
            callback(new Error("\nTriangle invalid"));
        },300)

    }else{
        var s=(x+y+z)/2;
        setTimeout(()=>{
            callback(null,{
                perimeter:()=>(x+y+z),
                area:()=>(Math.sqrt(s*(s-x)*(s-y)*(s-z)))
            })
        },300)
    }
}
