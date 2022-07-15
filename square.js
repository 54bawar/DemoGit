module.exports=(s,callback)=>{
    if(s<=0){
        setTimeout(()=>{
            callback(new Error("Sqaure invalid"));
        },0)

    }else{
        setTimeout(()=>{
            callback(null,{
                perimeter:()=>(4*s),
                area:()=>(s*s)
            })
        },0)
    }
}