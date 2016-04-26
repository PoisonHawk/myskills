console.log('main.js');
$(document).ready(function(){
//Chart

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Laravel", "PHP", "JS", "Angular", "Wordpress", "React"],
        datasets: [{
            label: 'Rate of skills',
            data: [12, 19, 3, 5, 2, 3]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

})