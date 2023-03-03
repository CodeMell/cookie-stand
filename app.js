// let SeattleSales = [];
let TokyoSales = [];
let DubaiSales = [];
let ParisSales = [];
let LimaSales = [];
let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function cookieStandLocation(location) {
    let stand = {};
    stand.location = location;
    stand.sales = [];

    

    stand.cph = function () {
        for (let x = 0; x < 14; x += 1) {
            stand.sales.push(Math.floor(Math.random() * 100 + 1));
        }
    }

    stand.CPHmath = function(){
        let initialValue = 0;
        stand.sum = stand.sales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);
        stand.average = Math.floor(stand.sum / 14);
        stand.max = Math.max(...stand.sales);
        stand.min = Math.min(...stand.sales);
    }

    stand.render = function() {
        // let tblDemo = document.createElement('table');
        // let trArr = [];
        let trData = document.createElement('tr'); 
        let localeTD = document.createElement('td');
        localeTD.innerHTML = this.location;
        trData.append(localeTD);
    
        for (let i = 0; i < this.sales.length; i++) {
            let tdSales = document.createElement('td');
            tdSales.innerHTML = this.sales[i];
            trData.append(tdSales);
        }
        let trTotal = document.createElement('td');
        trTotal.innerHTML = this.sum;
        trData.append(trTotal);
        document.getElementById('DailyData').append(trData);

        let trSubData = document.createElement('tr');
        let localeTD2 = document.createElement('td');
        localeTD2.innerHTML = this.location;
        let trMin = document.createElement('td');
        trMin.innerHTML = this.min;
        let trMax = document.createElement('td');
        trMax.innerHTML = this.max;
        let trAvg = document.createElement('td');
        trAvg.innerHTML = this.average;
        trSubData.append(localeTD2, trMin, trMax, trAvg);
        document.getElementById('DailySubData').append(trSubData);
       }
       stand.render2 = function(){}


    return stand;
}
const seattle = cookieStandLocation('Seattle');
seattle.cph();
seattle.CPHmath();
seattle.render();

const tokyo = cookieStandLocation('Tokyo')
tokyo.cph();
tokyo.CPHmath();
tokyo.render();

const dubai = cookieStandLocation('Dubai')
dubai.cph();
dubai.CPHmath();
dubai.render();

const paris = cookieStandLocation('Paris')
paris.cph();
paris.CPHmath();
paris.render();

const lima = cookieStandLocation('Lima')
lima.cph();
lima.CPHmath();
lima.render();

