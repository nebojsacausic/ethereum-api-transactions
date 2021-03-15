<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="bootstrap-5.0/css/bootstrap.css">
        <title>Document</title>
    </head>
    <body>

        <div class="container-xl">
          <form action="POST" class="eth_form">
            <div class="row g-3">
              <div class="col-sm-5">
                <input type="text" class="form-control" placeholder="Address" aria-label="Address" id="address">
              </div>
              <div class="col">
                <input type="number" class="form-control" placeholder="From block" aria-label="From block" id="fromBlock">
              </div>
              <div class="col">
                <input type="number" class="form-control" placeholder="To block" aria-label="To block" id="toBlock">
              </div>
              <div class="col">
                <input type="button" class="form-control" value="Search" id="search_btn">
              </div>
            </div>
          </form>

          <div id="list_transaction"></div>


          




        </div>

        
        
        <script src="bootstrap-5.0/js/bootstrap.min.js"></script>
        <script src="js/jquery.min.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>