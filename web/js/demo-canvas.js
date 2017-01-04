$(function() {
	color();

	line();

	rect();

	path();

	convertion();

	font();

	image();
});

function color() {
	var c = document.getElementById("canvas-color");
	var ctx = c.getContext("2d");
	ctx.save();
	ctx.fillStyle = "#FF0000"; // 填充绘画的颜色、渐变或模式
	ctx.fillRect(10, 15, 240, 20);
	ctx.fillText("填充绘画的颜色、渐变或模式:", 10, 10);

	ctx.strokeStyle = "#00FF00"; // 笔触的颜色、渐变或模式
	ctx.strokeRect(10, 55, 240, 20);
	ctx.fillText("笔触的颜色、渐变或模式:", 10, 50);

	// 阴影
	ctx.shadowBlur = 5;
	ctx.shadowColor = "#0000FF";
	ctx.shadowOffsetX = 3;
	ctx.shadowOffsetY = 3;
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(10, 95, 240, 20);
	ctx.fillText("阴影:", 10, 90);

	ctx.restore();
	// 创建线性渐变,参数(开始点: x 坐标,y 坐标,结束点: x 坐标, y 坐标)
	var grd = ctx.createLinearGradient(0, 0, 240, 0);
	grd.addColorStop(0, "#FF0000");
	grd.addColorStop(1, "#00FFFF");
	ctx.fillStyle = grd;
	ctx.fillRect(10, 135, 240, 20);
	ctx.fillText("创建线性渐变:", 10, 130);

	// 放射状/圆形渐变,参数(开始圆: x 坐标,y 坐标,半径,结束圆: x 坐标, y 坐标,半径)
	var rg = ctx.createRadialGradient(130, 215, 20, 130, 215, 120);
	rg.addColorStop(0, "#FF0000");
	rg.addColorStop(1, "#00FFFF");
	ctx.fillStyle = rg;
	ctx.fillRect(10, 175, 240, 80);
	ctx.fillText("放射状/圆形渐变,:", 10, 170);

}

function line() {
	var c = document.getElementById("canvas-line");
	var ctx = c.getContext("2d");
	ctx.save();
	ctx.strokeStyle = "#FF0000";

	ctx.fillText("结束端点样式:", 10, 10);
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.lineCap = "butt"; // 默认。向线条的每个末端添加平直的边缘
	ctx.moveTo(10, 20);
	ctx.lineTo(240, 20);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineCap = "round"; // 向线条的每个末端添加圆形线帽
	ctx.moveTo(10, 40);
	ctx.lineTo(240, 40);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineCap = "square"; // 向线条的每个末端添加正方形线帽
	ctx.moveTo(10, 60);
	ctx.lineTo(240, 60);
	ctx.stroke();

	ctx.fillText("两条线相交时，所创建的拐角类型:", 10, 90);
	ctx.beginPath();
	// 两条线相交时，所创建的拐角类型, bevel:创建斜角; round:创建圆角; miter:默认。创建尖角。
	ctx.lineJoin = "round";
	ctx.moveTo(10, 105);
	ctx.lineTo(100, 115);
	ctx.lineTo(10, 125);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineJoin = "bevel";
	ctx.moveTo(10, 135);
	ctx.lineTo(100, 145);
	ctx.lineTo(10, 155);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineJoin = "miter";
	ctx.moveTo(10, 165);
	ctx.lineTo(100, 175);
	ctx.lineTo(10, 185);
	ctx.stroke();
}

function rect() {
	var c = document.getElementById("canvas-rect");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.rect(10, 10, 240, 60);
	ctx.stroke();

	// 创建矩形
	ctx.beginPath();
	ctx.lineWidth = 8;
	ctx.strokeStyle = "#De88C4";
	ctx.rect(20, 20, 220, 40);
	ctx.stroke();

	ctx.beginPath();
	ctx.fillRect(10, 80, 240, 60);
	ctx.stroke();

	// 绘制"被填充"的矩形
	ctx.beginPath();
	ctx.fillStyle = "#De88C4";
	ctx.fillRect(20, 90, 220, 40);
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle = "#De88C4";
	ctx.fillRect(10, 150, 240, 60);
	ctx.stroke();

	// 在给定的矩形内清除指定的像素
	ctx.beginPath();
	ctx.clearRect(20, 160, 220, 20);
	ctx.stroke();

	ctx.beginPath();
	ctx.clearRect(110, 180, 30, 20);
	ctx.stroke();
}

function path() {
	var c = document.getElementById("canvas-path");
	var ctx = c.getContext("2d");
	ctx.save();

	// 填充当前绘图（路径）
	ctx.rect(10, 10, 240, 60);
	ctx.fillStyle = "red";
	ctx.fill();

	// 绘制已定义的路径
	ctx.beginPath();
	ctx.moveTo(10, 80);
	ctx.lineTo(250, 80);
	ctx.lineTo(250, 110);
	ctx.closePath();
	ctx.strokeStyle = "red";
	ctx.stroke();

	// 剪切,只有被剪切区域内的红色矩形部分是可见的
	/**
	 * 一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。 您也可以在使用 clip() 方法前通过使用
	 * save() 方法对当前画布区域进行保存， 并在以后的任意时间对其进行恢复（通过 restore() 方法）。
	 */

	ctx.beginPath();
	ctx.rect(10, 120, 240, 120);
	ctx.fill();
	ctx.clip();
	// 剪切之后画一个矩形
	ctx.fillStyle = "green";
	ctx.fillRect(30, 120, 150, 140);// 此部分超出剪切高度，超出部分不可见

	// 二次贝塞尔曲线
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(10, 270);
	ctx.quadraticCurveTo(10, 350, 240, 270);
	ctx.stroke();

	drawDashLine(ctx, 10, 270, 10, 350, 1);
	drawDashLine(ctx, 10, 350, 240, 270, 1);
	ctx.fillText("(10, 270)", 0, 270);
	ctx.fillText("(10, 350)", 0, 360);
	ctx.fillText("(240, 270)", 200, 270);

	// 三次贝塞尔曲线
	ctx.beginPath();
	ctx.moveTo(10, 370);
	ctx.bezierCurveTo(10, 470, 240, 470, 240, 370);
	ctx.stroke();

	drawDashLine(ctx, 10, 370, 10, 470, 1);
	drawDashLine(ctx, 240, 370, 240, 470, 1);
	drawDashLine(ctx, 10, 470, 240, 470, 1);

	ctx.fillText("(10, 370)", 0, 370);
	ctx.fillText("(10, 470)", 0, 480);
	ctx.fillText("(240, 470)", 200, 480);
	ctx.fillText("(240, 370)", 200, 370);

	// 弧/曲线
	ctx.beginPath();
	ctx.fillStyle = "#FF0000"
	ctx.arc(60, 540, 50, 0, 1.5 * Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(170, 540, 50, 0, 1.5 * Math.PI);
	ctx.fill();

	// 介于两个切线之间的弧
	ctx.beginPath();
	ctx.moveTo(10, 600);
	ctx.lineTo(100, 600);
	ctx.arcTo(150, 600, 150, 670, 50);
	ctx.stroke();
}

function convertion() {
	var c = document.getElementById("canvas-convertion");
	var ctx = c.getContext("2d");
	ctx.save();

	// 如果您对绘图进行缩放，所有之后的绘图也会被缩放。定位也会被缩放。
	ctx.strokeRect(10, 10, 70, 40);
	// 缩放
	ctx.scale(2, 2);
	ctx.strokeRect(10, 10, 70, 40);

	ctx.restore();
	ctx.save();
	// 旋转
	ctx.rotate(20 * Math.PI / 180);
	ctx.strokeRect(80, 90, 70, 40);

	ctx.restore();
	ctx.save();
	ctx.strokeRect(10, 180, 70, 40);
	// 移动
	ctx.translate(40, 20);
	ctx.strokeRect(10, 180, 70, 40);

	ctx.restore();
	ctx.save();
	ctx.fillStyle = "yellow";
	ctx.fillRect(10, 250, 240, 60);
	// 参数(水平缩放, 水平倾斜, 垂直倾斜, 垂直缩放, 水平移动, 垂直移动)
	ctx.transform(1, 0.2, -0.2, 1, 60, 10);
	ctx.fillStyle = "red";
	ctx.fillRect(10, 250, 240, 60);

	ctx.restore();
	ctx.fillStyle = "yellow";
	ctx.fillRect(10, 400, 240, 60)
	ctx.setTransform(1, 0.2, -0.2, 1, 80, 10);
	ctx.fillStyle = "red";
	ctx.fillRect(10, 400, 240, 60);
	ctx.setTransform(1, 0.2, -0.2, 1, 80, 10);
	ctx.fillStyle = "blue";
	ctx.fillRect(10, 400, 240, 60);
}

function font() {
	var c = document.getElementById("canvas-font");
	var ctx = c.getContext("2d");
	ctx.save();

	ctx.strokeStyle = "red";
	ctx.moveTo(150, 20);
	ctx.lineTo(150, 170);
	ctx.stroke();

	ctx.font = "15px Arial";

	// textAlign 对齐
	ctx.textAlign = "start";
	ctx.fillText("textAlign=start", 150, 60);
	ctx.textAlign = "end";
	ctx.fillText("textAlign=end", 150, 80);
	ctx.textAlign = "left";
	ctx.fillText("textAlign=left", 150, 100);
	ctx.textAlign = "center";
	ctx.fillText("textAlign=center", 150, 120);
	ctx.textAlign = "right";
	ctx.fillText("textAlign=right", 150, 140);

	// textBaseline 基线
	ctx.strokeStyle = "red";
	ctx.moveTo(00, 210);
	ctx.lineTo(240, 210);
	ctx.stroke();
	ctx.font = "12px Arial"

	// Place each word at y=100 with different textBaseline values
	ctx.textBaseline = "top";
	ctx.fillText("Top", 20, 210);
	ctx.textBaseline = "bottom";
	ctx.fillText("Bottom", 70, 210);
	ctx.textBaseline = "middle";
	ctx.fillText("Middle", 120, 210);
	ctx.textBaseline = "alphabetic";
	ctx.fillText("Alphabetic", 190, 210);
	ctx.textBaseline = "hanging";
	ctx.fillText("Hanging", 240, 210);

	ctx.restore();
	ctx.font = "30px Verdana";
	// Create gradient
	var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
	gradient.addColorStop("0", "magenta");
	gradient.addColorStop("0.5", "blue");
	gradient.addColorStop("1.0", "red");
	// Fill with gradient
	ctx.fillStyle = gradient;
	ctx.fillText("Big smile!", 10, 270);

	ctx.strokeStyle = gradient;
	ctx.strokeText("Big smile!", 10, 300);

	ctx.font = "30px Arial";
	var txt = "Hello World"
	ctx.fillText("计算文本宽度:" + ctx.measureText(txt).width, 10, 360);
	ctx.fillText(txt, 10, 390);
}

function image() {
	var c = document.getElementById("canvas-image");
	var ctx = c.getContext("2d");
	var img = document.getElementById("canvas-img");
	ctx.drawImage(img, 10, 10);

	ctx.drawImage(img, 10, 300, 80, 90);

	ctx.drawImage(img, 80, 120, 120, 130, 10, 400, 120, 130);
}

// 求斜边长度
function getBeveling(x, y) {
	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

function drawDashLine(context, x1, y1, x2, y2, dashLen) {
	dashLen = dashLen === undefined ? 5 : dashLen;
	// 得到斜边的总长度
	var beveling = getBeveling(x2 - x1, y2 - y1);
	// 计算有多少个线段
	var num = Math.floor(beveling / dashLen);

	for (var i = 0; i < num; i++) {
		context[i % 2 == 0 ? 'moveTo' : 'lineTo'](x1 + (x2 - x1) / num * i, y1
				+ (y2 - y1) / num * i);
	}
	context.stroke();
}
