let SeattleSales = [];
let TokyoSales = [];
let DubaiSales = [];
let ParisSales = [];
let LimaSales = [];
let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];


let SeattleValue = {
    //min hourly customers
    min:1,
    //max hourly customers
    max: 70,
    //average cookies per customer
    average: 0,
    sum: 0,
    randomNum() {
        return Math.floor(Math.random() * 100);
    },
    hours(){
        let hoursArray = document.querySelector('.SeattleOutput');
        for(let i = 0; i < hoursDemo.length; i++) {
            //hoursDemo[i].innerHTML
            let variable = document.createElement("li");
            variable.innerHTML = `${hoursDemo[i]}: ${SeattleSales[i]} cookies`;
            hoursArray.append(variable);
        }
        
    },
    
};

let TokyoValue = {
    //min hourly customers
    min:1,
    //max hourly customers
    max: 70,
    //average cookies per customer
    average: 0,
    sum: 0,
    randomNum() {
        return Math.floor(Math.random() * 100);
    },
    hours(){
        let hoursArray = document.querySelector('.TokyoOutput');
        for(let i = 0; i < hoursDemo.length; i++) {
            //hoursDemo[i].innerHTML
            let variable = document.createElement("li");
            variable.innerHTML = `${hoursDemo[i]}: ${TokyoSales[i]} cookies`;
            hoursArray.append(variable);
        }
    },
};

let DubaiValue = {
    //min hourly customers
    min:1,
    //max hourly customers
    max: 70,
    //average cookies per customer
    average: 0,
    sum: 0,
    randomNum() {
        return Math.floor(Math.random() * 100);
    },
    hours(){
        let hoursArray = document.querySelector('.DubaiOutput');
        for(let i = 0; i < hoursDemo.length; i++) {
            //hoursDemo[i].innerHTML
            let variable = document.createElement("li");
            variable.innerHTML = `${hoursDemo[i]}: ${DubaiSales[i]} cookies`;
            hoursArray.append(variable);
        }
    },
};

let ParisValue = {
    //min hourly customers
    min:1,
    //max hourly customers
    max: 70,
    //average cookies per customer
    average: 0,
    sum: 0,
    randomNum() {
        return Math.floor(Math.random() * 100);
    },
    hours(){
        let hoursArray = document.querySelector('.ParisOutput');
        for(let i = 0; i < hoursDemo.length; i++) {
            //hoursDemo[i].innerHTML
            let variable = document.createElement("li");
            variable.innerHTML = `${hoursDemo[i]}: ${ParisSales[i]} cookies`;
            hoursArray.append(variable);
        }
    },
};

let LimaValue = {
    //min hourly customers
    min:1,
    //max hourly customers
    max: 70,
    //average cookies per customer
    average: 0,
    sum: 0,
    randomNum() {
        return Math.floor(Math.random() * 100);
    },
    hours(){
        let hoursArray = document.querySelector('.LimaOutput');
        for(let i = 0; i < hoursDemo.length; i++) {
            //hoursDemo[i].innerHTML
            let variable = document.createElement("li");
            variable.innerHTML = `${hoursDemo[i]}: ${LimaSales[i]} cookies`;
            hoursArray.append(variable);
        }
    },
};



//customers per hour
function SeattleCPH(){
    for(let x = 0; x < 14; x += 1){
        SeattleSales.push(SeattleValue.randomNum());
    }
    SeattleValue.hours();
}

//customers per hour
function TokyoCPH(){
    for(let x = 0; x < 14; x += 1){
        TokyoSales.push(TokyoValue.randomNum());
    }
    TokyoValue.hours();
}
//customers per hour
function DubaiCPH(){
    for(let x = 0; x < 14; x += 1){
        DubaiSales.push(DubaiValue.randomNum());
    }
    DubaiValue.hours();
}
//customers per hour
function ParisCPH(){
    for(let x = 0; x < 14; x += 1){
        ParisSales.push(ParisValue.randomNum());
    }
    ParisValue.hours();
}
function LimaCPH(){
    for(let x = 0; x < 14; x += 1){
        LimaSales.push(LimaValue.randomNum());
    }
    LimaValue.hours();
}



function CPHmath(){
    //
    let initialValue = 0;
    SeattleValue.sum = SeattleSales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);
    TokyoValue.sum = TokyoSales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);
    DubaiValue.sum = DubaiSales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);
    ParisValue.sum = ParisSales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);
    LimaValue.sum = LimaSales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);

    SeattleValue.average = Math.floor(SeattleValue.sum /14);
    TokyoValue.average = Math.floor(TokyoValue.sum /14);
    DubaiValue.average = Math.floor(DubaiValue.sum /14);
    ParisValue.average = Math.floor(ParisValue.sum /14);
    LimaValue.average = Math.floor(LimaValue.sum /14);
    //
    SeattleValue.max = Math.max(...SeattleSales);
    TokyoValue.max = Math.max(...TokyoSales);
    DubaiValue.max = Math.max(...DubaiSales);
    ParisValue.max = Math.max(...ParisSales);
    LimaValue.max = Math.max(...LimaSales);
    //
    SeattleValue.min = Math.min(...SeattleSales);
    TokyoValue.min = Math.min(...TokyoSales);
    DubaiValue.min = Math.min(...DubaiSales);
    ParisValue.min = Math.min(...ParisSales);
    LimaValue.min = Math.min(...LimaSales);
    //print max,min,avg to html
    console.log(SeattleValue.max);
    document.getElementById('SeattleMax').innerHTML += SeattleValue.max;
    document.getElementById('SeattleMin').innerHTML += SeattleValue.min;
    document.getElementById('SeattleAvg').innerHTML += SeattleValue.average;
    document.getElementById("SeattleSum").innerHTML += `Total: ${SeattleValue.sum} cookies`;

    
    document.getElementById('TokyoMax').innerHTML += TokyoValue.max;
    document.getElementById('TokyoMin').innerHTML += TokyoValue.min;
    document.getElementById('TokyoAvg').innerHTML += TokyoValue.average;
    document.getElementById("TokyoSum").innerHTML += `Total: ${TokyoValue.sum} cookies`;


    document.getElementById('DubaiMax').innerHTML += DubaiValue.max;
    document.getElementById('DubaiMin').innerHTML += DubaiValue.min;
    document.getElementById('DubaiAvg').innerHTML += DubaiValue.average;
    document.getElementById("DubaiSum").innerHTML += `Total: ${DubaiValue.sum} cookies`;


    document.getElementById('ParisMax').innerHTML += ParisValue.max;
    document.getElementById('ParisMin').innerHTML += ParisValue.min;
    document.getElementById('ParisAvg').innerHTML += ParisValue.average;
    document.getElementById("ParisSum").innerHTML += `Total: ${ParisValue.sum} cookies`;

    document.getElementById('LimaMax').innerHTML += LimaValue.max;
    document.getElementById('LimaMin').innerHTML += LimaValue.min;
    document.getElementById('LimaAvg').innerHTML += LimaValue.average;
    document.getElementById("LimaSum").innerHTML += `Total: ${LimaValue.sum} cookies`;
}



SeattleCPH();
TokyoCPH();
DubaiCPH();
ParisCPH();
LimaCPH();
CPHmath();