global.d=0;

function thirdJob(data) {
    return new Promise((resolve, reject) =>{
        if(typeof data !== 'number'){
            reject("data is not a number");
        }
        else{
            data % 2 == 1 ? setTimeout(() => resolve("odd"), 1000) :
                            setTimeout(() => reject("even"),2000)
        }
    });
}

thirdJob(d).then((result) =>{
    console.log("С использованием обработчиков Promise:", result);
}).catch((error) => {
    console.log("Ошибка:", error);
}); 

async function performThirdJob(data) {
    try {
      const result = await thirdJob(data);
      d=data;
      console.log("С использованием async/await: ", result);
    } catch (error) {
      console.error("Ошибка:", error);
    }
}
performThirdJob(3);
//performThirdJob(4);
//performThirdJob("a");

