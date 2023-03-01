let SeattleSales = [];
let TokyoSales = [];
let DubaiSales = [];
let ParisSales = [];
let LimaSales = [];

let SeattleValue = {
    //min hourly customers
    min:1,
    //max hourly customers
    max: 70,
    //average cookies per customer
    average: 0,
    randomNum() {
        return Math.floor(Math.random() * 100);
    },
};

let TokyoValue = {
    //min hourly customers
    min:1,
    //max hourly customers
    max: 70,
    //average cookies per customer
    average: 0,
    randomNum() {
        return Math.floor(Math.random() * 100);
    },
};

let DubaiValue = {
    //min hourly customers
    min:1,
    //max hourly customers
    max: 70,
    //average cookies per customer
    average: 0,
    randomNum() {
        return Math.floor(Math.random() * 100);
    },
};

let ParisValue = {
    //min hourly customers
    min:1,
    //max hourly customers
    max: 70,
    //average cookies per customer
    average: 0,
    randomNum() {
        return Math.floor(Math.random() * 100);
    },
};

let LimaValue = {
    //min hourly customers
    min:1,
    //max hourly customers
    max: 70,
    //average cookies per customer
    average: 0,
    randomNum() {
        return Math.floor(Math.random() * 100);
    },
};





//customers per hour
function SeattleCPH(){
    for(let x = 0; x < 15; x += 1){
        // console.log(randomNum());
        SeattleSales.push(SeattleValue.randomNum());
    }
    
}

//customers per hour
function TokyoCPH(){
    for(let x = 0; x < 15; x += 1){
        // console.log(randomNum());
        TokyoSales.push(TokyoValue.randomNum());
    }
    // DubaiCPH();
}
//customers per hour
function DubaiCPH(){
    for(let x = 0; x < 15; x += 1){
        // console.log(randomNum());
        DubaiSales.push(DubaiValue.randomNum());
    }
    // ParisCPH();
}
//customers per hour
function ParisCPH(){
    for(let x = 0; x < 15; x += 1){
        // console.log(randomNum());
        ParisSales.push(ParisValue.randomNum());
    }
    // LimaCPH();
}
//customers per hour
function LimaCPH(){
    for(let x = 0; x < 15; x += 1){
        // console.log(randomNum());
        LimaSales.push(LimaValue.randomNum());
    }
    // CPHmath();
}


function CPHmath(){
    let initialValue = 0;
    SeattleValue.average = Math.floor(SeattleSales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue) /15);
    TokyoValue.average = Math.floor(TokyoSales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue) /15);
    DubaiValue.average = Math.floor(DubaiSales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue) /15);
    ParisValue.average = Math.floor(ParisSales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue) /15);
    LimaValue.average = Math.floor(LimaSales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue) /15);
    
    SeattleValue.max = Math.max(...SeattleSales);
    TokyoValue.max = Math.max(...TokyoSales);
    DubaiValue.max = Math.max(...DubaiSales);
    ParisValue.max = Math.max(...ParisSales);
    LimaValue.max = Math.max(...LimaSales);

    SeattleValue.min = Math.min(...SeattleSales);
    TokyoValue.min = Math.min(...TokyoSales);
    DubaiValue.min = Math.min(...DubaiSales);
    ParisValue.min = Math.min(...ParisSales);
    LimaValue.min = Math.min(...LimaSales);

    console.log(SeattleValue.max);
    document.getElementById('SeattleMax').innerHTML += SeattleValue.max;
    document.getElementById('SeattleMin').innerHTML += SeattleValue.min;
    document.getElementById('SeattleAvg').innerHTML += SeattleValue.average;
    
    document.getElementById('TokyoMax').innerHTML += TokyoValue.max;
    document.getElementById('TokyoMin').innerHTML += TokyoValue.min;
    document.getElementById('TokyoAvg').innerHTML += TokyoValue.average;

    document.getElementById('DubaiMax').innerHTML += DubaiValue.max;
    document.getElementById('DubaiMin').innerHTML += DubaiValue.min;
    document.getElementById('DubaiAvg').innerHTML += DubaiValue.average;

    document.getElementById('ParisMax').innerHTML += ParisValue.max;
    document.getElementById('ParisMin').innerHTML += ParisValue.min;
    document.getElementById('ParisAvg').innerHTML += ParisValue.average;

    document.getElementById('LimaMax').innerHTML += LimaValue.max;
    document.getElementById('LimaMin').innerHTML += LimaValue.min;
    document.getElementById('LimaAvg').innerHTML += LimaValue.average;


}



SeattleCPH();
TokyoCPH();
DubaiCPH();
ParisCPH();
LimaCPH();
CPHmath();