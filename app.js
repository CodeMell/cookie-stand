let SeattleSales = [];

let Seattlevalue = {
    //min hourly customers
    min:1,
    //max hourly customers
    max: 70,
    //average cookies per customer
    average: 0,
};

function randomNum() {
  return Math.floor(Math.random() * 100);
}
//customers per hour
function SeattleCPH(){
    for(let x = 0; x < 15; x += 1){
        // console.log(randomNum());
        SeattleSales.push(randomNum());
    }
    SeattleMath();
}
function SeattleMath(){
    let initialValue = 0;
    Seattlevalue.average = SeattleSales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue) /15 ;
    Seattlevalue.max = Math.max(SeattleSales);
    Seattlevalue.min = Math.min(SeattleSales);
}



SeattleCPH();