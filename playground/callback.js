const doMorCallback = (callback) => {
    setTimeout(()=>{
        callback(undefined, [1, 4, 7])
    }, 2000)
}


doMorCallback((error, result)=>{
    if(error) {
        return console.log(error);
    }

    console.log(result);
})