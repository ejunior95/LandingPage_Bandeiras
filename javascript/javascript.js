
// Função para abrir outra landing page pela NavBar

function AbrirSecao(secao) {
  window.open("" + secao + "", "_parent");
}

// Função para abrir outra landing page pela NavBar

//Função para descer o menureduzido
var verificadorMenu = false
function DescerMenu() {
  var x = document.getElementById("menureduzidoID");
  if (verificadorMenu===false) {
    x.classList.add('active');
    verificadorMenu = true;
  } else {
    x.classList.remove('active');
    verificadorMenu = false;
  }
}

//Função para descer o menureduzido