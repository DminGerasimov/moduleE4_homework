const arg = {
    key1:1,
    key2:2,
    key3:"3"
}

const func = (str, obj) =>{
    for (let key in obj){
        if (key === str){
            return true;
        }
    }
    return false;
}

console.log(func("key3", arg))