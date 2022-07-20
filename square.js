module.exports=(s,callback)=>{
    if(s<=0){
        setTimeout(()=>{
            callback(new Error("\nSqaure invalid"));
        },200)

    }else{
        setTimeout(()=>{
            callback(null,{
                perimeter:()=>(4*s),
                area:()=>(s*s)
            })
        },200)
    }
}