var app = function(){
  var canvas = document.querySelector('#main-canvas');
  var context = canvas.getContext('2d');

  // context.fillStyle = 'cadetBlue';
  // context.fillRect(10, 10, 50, 50);
  // context.fillRect(60, 60, 50, 50);
  //
  // context.beginPath();
  // context.strokeStyle = 'cadetBlue';
  // context.moveTo(110, 110);
  // context.lineTo(160, 160);
  // context.stroke();
  //
  // context.beginPath();
  // context.moveTo(160, 160);
  // context.lineTo(160, 220);
  // context.lineTo(100, 220);
  // context.closePath();
  // context.stroke();
  //
  // context.beginPath();
  // context.moveTo(160, 160);
  // context.lineTo(220, 160);
  // context.lineTo(220, 100);
  // context.closePath();
  // context.stroke();
  //
  // context.beginPath();
  // context.moveTo(280, 220);
  // context.arc(220, 220, 60, 0, 2*(Math.PI), true);
  // context.stroke();
  //
  // context.beginPath();
  // context.moveTo(280, 280);
  var mouseDown = false;

  var drawCircle = function(x, y, size){
    context.beginPath();
    context.arc(x, y, size, 0, 2*(Math.PI), true);
    context.stroke();
    context.fill();
  };

  canvas.onmousedown = function(event){
    var sizeInput = document.querySelector('#size-input');
    // drawCircle(event.x, event.y, sizeInput.value);
    mouseDown = true;
  };

  canvas.onmousemove = function(event){
    var sizeInput = document.querySelector('#size-input');
    if(mouseDown){
      drawCircle(event.x, event.y, sizeInput.value);
    }
  };

  canvas.onmouseup = function(event){
    mouseDown = false;
  };

  var changeColor = function(){
    context.strokeStyle = this.value;
    context.fillStyle = this.value;
  };

  var colorPicker = document.querySelector('#color-input');
  colorPicker.onchange = changeColor;
  //
  // canvas.onclick = function(event){
  //   var x = event.x;
  //   var y = event.y;
  //
  //   drawCircle(x, y);
  // };

  // var img = document.createElement('img');
  // img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png";
  //
  // var drawDoge = function(event){
  //   context.drawImage(img, event.x - 30, event.y - 30, 60, 60);
  // };
  // img.onload = function(){
  //   canvas.onclick = drawDoge;
  // };

  var urlInput = document.querySelector('#url-input');

  var img = document.createElement('img');

  urlInput.onchange = function(){
    img.id = 'sticker';
    img.src = this.value;
    console.log(this.value);
  };

  canvas.oncontextmenu = function(event){
    mouseDown = false;
    var sizeInput = document.querySelector('#size-input');
    context.drawImage(img, event.x - sizeInput.value, event.y - sizeInput.value, 2*sizeInput.value, 2*sizeInput.value);
    return false;
  };

  var clearButton = document.querySelector('#clear-button');
  clearButton.onclick = function(event){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

};

window.onload = app;
