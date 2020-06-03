function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function change(){
  var x = getRandomColor();
  document.getElementById('box').style.backgroundColor = x;
  document.getElementById('colorrgb').innerHTML = x;
}
