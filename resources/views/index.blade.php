<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My skills</title>

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.js'></script>
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>


<script src="/js/node_modules/es6-shim/es6-shim.min.js"></script>
<script src="/js/node_modules/systemjs/dist/system-polyfills.js"></script>
<script src="/js/node_modules/angular2/es6/dev/src/testing/shims_for_IE.js"></script>
<script src="/js/node_modules/angular2/bundles/angular2-polyfills.js"></script>
<script src="/js/node_modules/systemjs/dist/system.src.js"></script>
<script src="/js/node_modules/rxjs/bundles/Rx.js"></script>
<script src="/js/node_modules/angular2/bundles/angular2.dev.js"></script>
<script src='/js/node_modules/chart.js/dist/Chart.js'></script>
<script>
      System.config({
        packages: {
          'js/app': {
            format: 'register',
            defaultExtension: 'js'
          },
        }

      });
      System.import('/js/app/main')
            .then(null, console.error.bind(console));
    </script>

<link rel="stylesheet" href='/css/style.css'>

</head>
<body>
	<my-app>Loading...</my-app>
</body>
</html>
