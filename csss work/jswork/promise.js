const mypromise=new Promise (
    (resolve,reject)=>{
        let a=12;
        if(a>10){
            resolve("data resolved");
        }
        else{
            reject("Data is rejected ");
        }
    }
);
mypromise.then(msg=>console.log(msg))
.catch(error=>console.log(error));