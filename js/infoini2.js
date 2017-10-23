	var divw1=document.getElementById("dep1");
	var divw2=document.getElementById("dep2");
	var divw3=document.getElementById("dep3");
	var divw4=document.getElementById("dep4");
	var divw5=document.getElementById("dep5");
	var divw6=document.getElementById("dep6");
	var divw7=document.getElementById("dep7");
	var divw8=document.getElementById("dep8");
	var divw9=document.getElementById("dep9");
	var divw10=document.getElementById("dep10");
	var divw11=document.getElementById("dep11");
	var divw12=document.getElementById("dep12");
	var divw13=document.getElementById("dep13");
	var divw14=document.getElementById("dep14");

function init(){

	if(divw1.addEventListener) {
		divw1.addEventListener("mouseover", function(event){
			showdiv(event,'El departamento de Ahuachapán es el más occidental de los 14 departamentos en los que está dividida la República de El Salvador. Su cabecera, la ciudad de Ahuachapán se encuentra a 100 km de San Salvador. El departamento tiene una extensión de 1.239,60 km².');}, false);
	}

	else if(divw1.addEventListener) {
		divw1.addEventListener("onmouseover", function(event){
			showdiv(event,'El departamento de Ahuachapán es el más occidental de los 14 departamentos en los que está dividida la República de El Salvador. Su cabecera, la ciudad de Ahuachapán se encuentra a 100 km de San Salvador. El departamento tiene una extensión de 1.239,60 km².');});
	}

	if(divw2.addEventListener) {
		divw2.addEventListener("mouseover", function(event){
			showdiv(event, 'Departamento de Sonsonate');}, false);
	}

	else if(divw2.addEventListener) {
		divw2.addEventListener("onmouseover", function(event){
			showdiv(event, 'Departamento de Sonsonate');});
	}

	if(divw3.addEventListener) {
		divw3.addEventListener("mouseover", function(event){
			showdiv(event, 'Departamento de La Libertad');}, false);
	}

	else if(divw3.addEventListener) {
		divw3.addEventListener("onmouseover", function(event){
			showdiv(event, 'Departamento de La Libertad');});
	}

	if(divw4.addEventListener) {
		divw4.addEventListener("mouseover", function(event){
			showdiv(event,'Departamento');}, false);
	}

	else if(divw4.addEventListener) {
		divw4.addEventListener("onmouseover", function(event){
			showdiv(event,'Departamento');});
	}

	if(divw5.addEventListener) {
		divw5.addEventListener("mouseover", function(event){
			showdiv(event,'Departamento');}, false);
	}

	else if(divw5.addEventListener) {
		divw5.addEventListener("onmouseover", function(event){
			showdiv(event,'Departamento');});
	}

	if(divw6.addEventListener) {
		divw6.addEventListener("mouseover", function(event){
			showdiv(event,'Departamento');}, false);
	}

	else if(divw6.addEventListener) {
		divw6.addEventListener("onmouseover", function(event){
			showdiv(event,'Departamento');});
	}

}

function inithid(){
	//MOUSEOUT
	if(divw1.addEventListener) {
		divw1.addEventListener("mouseout", function(event){
			hiddenDiv();}, false);
	}

	else if(divw1.addEventListener) {
		divw1.addEventListener("onmouseout", function(event){
			hiddenDiv();});
	}

	if(divw2.addEventListener) {
		divw2.addEventListener("mouseout", function(event){
			hiddenDiv();}, false);
	}

	else if(divw2.addEventListener) {
		divw2.addEventListener("onmouseout", function(event){
			hiddenDiv();});
	}

	if(divw3.addEventListener) {
		divw3.addEventListener("mouseout", function(event){
			hiddenDiv();}, false);
	}

	else if(divw3.addEventListener) {
		divw3.addEventListener("onmouseout", function(event){
			hiddenDiv();});
	}

	if(divw4.addEventListener) {
		divw4.addEventListener("mouseout", function(event){
			hiddenDiv();}, false);
	}

	else if(divw4.addEventListener) {
		divw4.addEventListener("onmouseout", function(event){
			hiddenDiv();});
	}

	if(divw5.addEventListener) {
		divw5.addEventListener("mouseout", function(event){
			hiddenDiv();}, false);
	}

	else if(divw5.addEventListener) {
		divw5.addEventListener("onmouseout", function(event){
			hiddenDiv();});
	}

	if(divw6.addEventListener) {
		divw6.addEventListener("mouseout", function(event){
			hiddenDiv();}, false);
	}

	else if(divw6.addEventListener) {
		divw6.addEventListener("onmouseout", function(event){
			hiddenDiv();});
	}
}

if(window.addEventListener){
	window.addEventListener("load", init, false);
}
else if(window.attachEvent){
	window.attachEvent("onload",init);
}

/*if(window.addEventListener){
	window.addEventListener("load", inithid, false);
}
else if(window.attachEvent){
	window.attachEvent("onload",inithid);
}*/