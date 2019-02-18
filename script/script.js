var ctx = document.getElementById('myChart1').getContext('2d');
var brandstof = [0, 14, 28, 35, 42, 52, 59];
var stuwstof = [16, 52, 48, 32, 28, 14, 5];
var chart = new Chart(ctx, {
    type: 'line', //deze kan je veranderen naar "bar", of "doughtnut & pie" en dan laat hij elke keer zien.

    data: {
        labels: ["8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00"],
        datasets: [{
            label: "Verbruikte brandstof",
            backgroundColor: 'rgb(216, 216, 216, 0.5)',
            borderColor: 'rgb(76, 0, 117)',
            data: brandstof,
        },
          {  label: "Verbruikte stuwstof",
            backgroundColor: 'rgb(235, 206, 255, 0.5)',
            borderColor: 'rgb(0, 0, 0)',
            data: stuwstof,
        }] //hoe dit eruitziet, blijft bij elke grafiek hetzelfde, je verandert eigelijk alleen je "type".
    },

    options: {
        scales: { //dit is voor de assen (x-as en y-as)
            xAxes: [{
                display: true, //je laat de x-as zien
                scaleLabel: {
                    display: true,
                    labelString: 'Tijd'
                }
            }],

            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Kiloliters'
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChart2').getContext('2d');
var afstand = [25, 35, 30, 20, 15, 37, 23];
var chart = new Chart(ctx, {
    type: 'polarArea', 

    data: {
        labels: ["8.00-10.00", "10.00-12.00", "12.00-14.00", "14.00-16.00", "16.00-18.00", "18.00-20.00"],
        datasets: [{
            label: "Afstand afgelegd over tijd",
            backgroundColor: [
                'rgb(76, 0, 117)',
                'rgb(149, 136, 155)',
                'rgb(72, 47, 84)',
                'rgb(0, 0, 0)',
                'rgb(241, 209, 255)',
                'rgb(67, 59, 71)'
            ],
   
            data: afstand,
        }] 
    },

    options: {

    }
});

var ctx = document.getElementById('myChart3').getContext('2d');
var voorraad = [25, 40, 10, 35, 50, 30, 45];
var chart = new Chart(ctx, {
   
    type: 'bar', 

    data: {
        labels: ["Broccoli", "Rijst", "Lam", "Koekjes", "Crackers", "Chocolade", "Water"],
        datasets: [{
            label: "Voorraden", 
            backgroundColor: [
                'rgb(76, 0, 117)',
                'rgb(149, 136, 155)',
                'rgb(72, 47, 84)',
                'rgb(0, 0, 0)',
                'rgb(241, 209, 255)',
                'rgb(67, 59, 71)',
                'rgb(152, 85, 186)'],
            // pointBackgroundColor: Color[rgb(0,0,0)],
            
            data: voorraad,
        }] 
    },

    options: {
          scales: { //dit is voor de assen (x-as en y-as)
            xAxes: [{
                display: true, //je laat de x-as zien
                scaleLabel: {
                    display: true,
                    labelString: 'Product'
                }
            }],

            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Hoeveelheid'
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChart4').getContext('2d');
var bemanning = [57, 28, 15];
var chart = new Chart(ctx, {
    
    type: 'doughnut', 

    data: {
        labels: ["David", "John", "Charles"],
        datasets: [{
            label: "Bemanning op wacht",
            backgroundColor: [
               'rgb(76, 0, 117)',
                'rgb(149, 136, 155)',
                'rgb(48, 47, 48)',
            ],
            data: bemanning,
        }] 

    },

    options: {}
});
