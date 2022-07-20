//exports.perimeter=(r)=>2*22*r/7;
//exports.area=(r)=>(22*r*r/7);

module.exports=(r,callback)=>{
    if(r<=0){
        setTimeout(()=>{
            callback(new Error("\nCircle invalid"));
        },400)
    }else{
        setTimeout(()=>{
            callback(null,{
                perimeter:()=>(22*r/7),
                area:()=>(22*r*r/7)
            })
        },400)
    }
}
