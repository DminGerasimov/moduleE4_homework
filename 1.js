const arg = {
    key1:1,
    key2:2,
    key3:"3"
}

const func = obj =>{
    for (let key in obj){
        console.log(key + " : " + obj[key]);
    }
}

func(arg);