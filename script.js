var canvas=document.getElementById('mycanvas');
var ctx=canvas.getContext('2d');
var drawing=false;
var playing=false;
function draw(){
ctx.fillStyle='black';
ctx.fillRect(0,0,500,500);
}
draw();
canvas.addEventListener('mousedown',function(event){
  drawing=true;
  playing=false;
  ctx.fillRect(0,0,500,500);
  ctx.lineWidth=10;
  ctx.lineCap='round';
  ctx.strokeStyle='white';
  ctx.beginPath();
  ctx.moveTo(event.offsetX,event.offsetY);
});
canvas.addEventListener('mousemove',function(event){
  if (drawing){
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
  }
  if (playing){
    var insideLine=ctx.isPointInStroke(event.offsetX,event.offsetY);
    if(!insideLine){
      playing=false;
      alert('you loose');
      ctx.strokeStyle='red';
      ctx.stroke();
    }
   
  }
});
canvas.addEventListener('mouseup',function(event){
  drawing=false;
  playing=true;
});
