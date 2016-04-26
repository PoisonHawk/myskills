<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My skills</title>



    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

<script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.0.1/Chart.min.js'></script>

<link rel="stylesheet" href='/css/style.css'>
<script src='/js/main.js'></script>

</head>
<body>
    <main class='container'>
    	<header class="text-center">
    	<h1>My Skills Track</h1>
    	</header>
    	<section class='chart'>
    		<div class='chart-nav'>
    			<a href='#'>Chart</a>
    			<a href='#'>Active</a>
			</div>
    			<div>
    				<canvas id="myChart" width="400" height="100"></canvas>
    				<script>
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
</script>

    			</div>
    		<div>
    			<a href='#'>All</a>
    			<a href='#'>Month</a>
    			<a href='#'>Week</a>
    			<a href='#'>Day</a>
    		</div>
    	</section>
    	<section class="skills">
    		<button class="btn btn-default">Laravel</button>
    		<button class="btn btn-default">PHP</button>
    		<button class="btn btn-default">JS</button>
    		<button class="btn btn-default">Angular</button>
    		<button class="btn btn-default">Wordpress</button>
    		<button class="btn btn-default">React</button>
    		<div><a href='#'>Add skill</a></div>
    	</section>
    	<section class="register">
    		<table class="table table-striped">
			  <thead>
			  	<th>Skill</th>
			  	<th>Active</th>
			  </thead>
			  <tbody>
			  	<tr>
			  		<td>Laravel</td>
			  		<td>Статья на хабре</td>
			  	</tr>
			  	<tr>
			  		<td>Laravel</td>
			  		<td>Статья на хабре</td>
			  	</tr>
			  	<tr>
			  		<td>Laravel</td>
			  		<td>Статья на хабре</td>
			  	</tr>
			  	<tr>
			  		<td>Laravel</td>
			  		<td>Статья на хабре</td>
			  	</tr>
			  </tbody>
			</table>
    	</section>
    </main>
</body>
</html>