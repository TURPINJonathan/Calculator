<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Bootstrap import -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <body style="background-image: url('https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></body>
  <title>Calculator</title>
</head>
<body>
  <?php
    // If POST is not null
    if( isset($_POST['result']) ) { 
      //Recove the file content
      $content = file_get_contents('history.txt');
      $newContent = $content . ' ' . $_POST['result'];
      // Writte datas in the file
      file_put_contents("history.txt", $newContent);
      $result = explode(' ', $newContent);
    } else {
      //Recove the file content
      $content = file_get_contents('history.txt');
      $result = explode(' ', $content);
    }
  ?>
    <!-- Render -->
    <div class="container position-absolute top-50 start-50 translate-middle">    
      <h1 class="d-flex justify-content-center" style="color: #ececec">
        Calculator
      </h1>
      <form class="col buttons form" method="post" action="./index.php">
        <!-- Results -->
        <div class="row d-flex justify-content-center m-5">
          <input type="text" class="col-1 border-0" id="calcul" value="" name="calcul">
          <input type="text" class="col-1 border-0" id="currentNumber" value="" name="result">
        </div>
        <!-- Buttons -->
        <div class="row">
          <button type="button" class="btn btn-info col m-2 number" id="seven" value="7">7</button>
          <button type="button" class="btn btn-info col m-2 number" id="eight" value="8">8</button>
          <button type="button" class="btn btn-info col m-2 number" id="nine" value="9">9</button>
          <button type="button" class="btn btn-warning col-2 m-2 sign" id="division" value="/">&#247;</button>
        </div>  
        <div class="row">
          <button type="button" class="btn btn-info col m-2 number" id="four" value="4">4</button>
          <button type="button" class="btn btn-info col m-2 number" id="five" value="5">5</button>
          <button type="button" class="btn btn-info col m-2 number" id="six" value="6">6</button>
          <button type="button" class="btn btn-warning col-2 m-2 sign" id="multiplication" value="*">&#215;</button>
        </div>
        <div class="row">
          <button type="button" class="btn btn-info col m-2 number" id="one" value="1">1</button>
          <button type="button" class="btn btn-info col m-2 number" id="two" value="2">2</button>
          <button type="button" class="btn btn-info col m-2 number" id="three" value="3">3</button>
          <button type="button" class="btn btn-warning col-2 m-2 sign" id="substraction" value="-">&#8722;</button>
        </div>  
        <div class="row">
          <button type="button" class="btn btn-info col m-2 number" id="zero" value="0">0</button>
          <button type="reset" class="btn btn-danger col m-2" id="reset" value="reset">&#8634;</button>
          <button type="button" class="btn btn-warning col-2 m-2 sign" id="addition" value="+">&#43;</button>
        </div>    
        <div class="row">
          <button type="button" class="btn btn-success col m-2" id="equal" value="="><img src="https://img.icons8.com/ios-filled/50/000000/equal-sign.png"/></button>
          <button type="submit" class="btn btn-success col m-2" id="save" value="save"><img src="https://img.icons8.com/ios/50/000000/save--v1.png"/></button>
        </div>  
      </form>
        <!-- History -->
      <div class="historique border border-3 rounded p-2" style="color: #ececec">
        <p style="font-size: 1.5rem; font-weight: bold">History of saved results :</p>
        <?php foreach($result as $value) { ?>
          <?= $value ?> </br>
        <?php } ?>
      </div>
    </div>
  <!-- Bootstrap script -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
  <!-- JS script -->
  <script src="./app.js"></script>
</body>
</html>