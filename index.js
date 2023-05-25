function convC(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputF").innerHTML=((valNum*1.8)+32).toFixed(2);
}

function convF(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputC").innerHTML=((valNum-32)/1.8).toFixed(2);
}

function refresh() {
  window.location.reload();
}