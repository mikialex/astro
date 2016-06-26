
var can ;
var ctx ;

var worldSize;//m
var timeStep;//s

var stars=new Array();
var G=10000;

// var s1={
// 	x:100.0,//m
// 	y:.0,
// 	vx:.0,
// 	vy:100.0,
// 	ax:.0,
// 	ay:.0,
// 	fx:.0,//N
// 	fy:.0,
// 	r:100,
// 	r2:10000.0,
// 	m:1.0,//kg
// };

// var s2={
//   	x:.0,//m
// 	y:.0,
// 	vx:.0,
// 	vy:.0,
// 	ax:.0,
// 	ay:.0,
// 	fx:.0,//N
// 	fy:.0,
// 	r:100,
// 	r2:10000.0,
// 	m:100.0,//kg  
// }

// var s3={
//   	x:.0,//m
// 	y:-100.0,
// 	vx:100.0,
// 	vy:.0,
// 	ax:.0,
// 	ay:.0,
// 	fx:.0,//N
// 	fy:.0,
// 	r:100,
// 	r2:10000.0,
// 	m:100.0,//kg  
// }

var s1={
	x:0,//m
	y:0,
	vx:0,
	vy:0,
	ax:.0,
	ay:.0,
	fx:.0,//N
	fy:.0,
	m:1000,//kg
};

var s2={
  	x:.0,//m
	y:-100.0,
	vx:250.0,
	vy:200.0,
	ax:.0,
	ay:.0,
	fx:.0,//N
	fy:.0,
	m:10,//kg  
}

var s3={
  	x:100,//m
	y:0,
	vx:0,
	vy:316.2,
	ax:.0,
	ay:.0,
	fx:.0,//N
	fy:.0,
	m:10,//kg  
}

function init(){
can = document.getElementById("can");
ctx = can.getContext("2d");
worldSize=700;
can.height=worldSize;
can.width=worldSize;

timeStep=0.01;

//add stars
stars.push(s1);
stars.push(s2);
stars.push(s3);

ctx.beginPath();
ctx.lineTo(0,350);
ctx.lineTo(700,350);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(350,0);
ctx.lineTo(350,700);
ctx.stroke();

ctx.beginPath();

// for(i=1;i<=100000;i++){
// ctx.lineTo(s1.x+350,s1.y+350);
// next(s1);
// }
// ctx.stroke();
//on();
}

window.onload=init;

function next(s){
	s.r2=s.x*s.x+s.y*s.y;
	s.r=Math.sqrt(s.r2);
	var f=-1000000*s.m/s.r2;
	s.fx=f*s.x/s.r;
	s.fy=f*s.y/s.r;
    s.ax=s.fx/s.m;
    s.ay=s.fy/s.m;
    s.vx=s.vx+s.ax*timeStep;
    s.vy=s.vy+s.ay*timeStep;
    s.x=s.x+s.vx*timeStep;
    s.y=s.y+s.vy*timeStep;
}

function nextAll(){
   for(i=0;i<=stars.length-1;i++){
   	stars[i].fx=.0;
   	stars[i].fy=.0;
   	    for(j=0;j<=stars.length-1;j++){
   		    if(j!=i){
   		    	var r2=Math.pow((stars[j].x-stars[i].x),2)+Math.pow((stars[j].y-stars[i].y),2);
   		    	var r=Math.sqrt(r2);
   		    	var mp=stars[j].m*stars[i].m;
   		    	var F=G*mp/r2;
   		        stars[i].fx=stars[i].fx+F*(stars[j].x-stars[i].x)/r;
   		        stars[i].fy=stars[i].fy+F*(stars[j].y-stars[i].y)/r;
    		}
   	    }

   	stars[i].ax=stars[i].fx/stars[i].m;
   	stars[i].ay=stars[i].fy/stars[i].m;
   	stars[i].vx=stars[i].vx+stars[i].ax*timeStep;
   	stars[i].vy=stars[i].vy+stars[i].ay*timeStep;
   	stars[i].x=stars[i].x+stars[i].vx*timeStep;
   	stars[i].y=stars[i].y+stars[i].vy*timeStep;
    }
}

function drawAll(){

}


function move(){
//for(i=1;i<=1;i++){
ctx.beginPath();
ctx.lineTo(stars[0].x+350,stars[0].y+350);
ctx.lineTo(stars[0].x+351,stars[0].y+350);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(stars[1].x+350,stars[1].y+350);
ctx.lineTo(stars[1].x+351,stars[1].y+350);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(stars[2].x+350,stars[2].y+350);
ctx.lineTo(stars[2].x+351,stars[2].y+350);
ctx.stroke();
//next(s1);
nextAll();
//}
//ctx.stroke();
}

function go(){
	god=self.setInterval("move()",10);
}
function stop(){
	god=window.clearInterval(god);
}






