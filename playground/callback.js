const add = (a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}

add(1,4,(sum)=>{
    console.log(sum);
})




const fullName = (first,second,callback) =>{
    callback(first+second)
}


fullName('brian','mbugua',(sum)=>{
    console.log(sum);
})