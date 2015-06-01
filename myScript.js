function load(){
	var myData = JSON.parse(rectangles);
	//alert(myData.length);
	var can = document.getElementById('rectangleCanvas');
	var context = can.getContext('2d');

	for (i=0; i<myData.length; i++){
		context.fillStyle =   myData[i].color;
		context.fillRect(myData[i].x, myData[i].y, myData[i].width, myData[i].height);
	}
}