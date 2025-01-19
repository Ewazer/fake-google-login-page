function show(){

  var password= document.getElementById('pass1');
  confirm= document.getElementById('pass2');
  image= document.getElementById('eye');

  if (password.type==="password",confirm.type==="password") {
    password.type="text";
    confirm.type="text";
    image.setAttribute('src', 'image/eyeshow.png');

  }else if (password.type==="text",confirm.type==="text"){
    password.type="password";
    confirm.type="password";
    image.setAttribute('src', 'image/eyehide.png');
  }
}

function go() {
    window.location.href = "https://rs4siteg.lerequin.repl.co/error.php";
}
