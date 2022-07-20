module.exports=(x,y,callback)=>{
    if(x<=0||y<=0){
        setTimeout(()=>{
            callback(new Error("\nRectangle invalid"));
        },100)
    }else{
        setTimeout(()=>{
            callback(null,{
                perimeter:()=>(2*(x+y)),
                area:()=>(x*y)
            })
        },100)
    }
}