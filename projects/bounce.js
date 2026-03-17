const canvas=document.getElementById("mycanvas");
const ctx.canvas.getContext("2d");
let x=0;
let y=0;

let vx=1;
let vy=2;
let gravity =1;
function animate(){
	ctx.clearRect(0,0,800,800);
ctx.fillrect(x,y,50,50);
requestAnimationFrame(animate);
}

animate();
function handlekeydown(e){
	e.preventDefault();
	if(e.key == "ArrowDown"){
	y = y+yv;
	}

}
document.addEventListner('keydown',handleKeydown)

