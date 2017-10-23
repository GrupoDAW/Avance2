$(document).ready(function(){

	function showdiv(event,text)
	{
		margin=5;
 
		var IE = document.all?true:false;
 
		var tempX = 0;
		var tempY = 0;
 

		if(IE)
		{ 
			IE6=navigator.userAgent.toLowerCase().indexOf('msie 6');
			IE7=navigator.userAgent.toLowerCase().indexOf('msie 7');

			if(IE6>0 || IE7>0)
			{
				tempX = event.x
				tempY = event.y
				if(window.pageYOffset){
					tempY=(tempY+window.pageYOffset);
					tempX=(tempX+window.pageXOffset);
				}else{
					tempY=(tempY+Math.max($("body").scrollTop,document.documentElement.scrollTop));
					tempX=(tempX+Math.max($("body").scrollLeft,document.documentElement.scrollLeft));
				}
			}else{
				
				tempX = event.x
				tempY = event.y
			}
		}else{ 
			document.captureEvents(Event.MOUSEMOVE);
			tempX = event.pageX;
			tempY = event.pageY;
		}
 
		if (tempX < 0){tempX = 0;}
		if (tempY < 0){tempY = 0;}

 
		$("#flotante").html(text);
 
		//document.getElementById('flotante').style.top = (tempY+margin)+"px";
		//document.getElementById('flotante').style.left = (tempX+margin)+"px";
		//document.getElementById('flotante').style.display='block';
		$("#flotante").css('top', (tempY+margin) + 'px');
		$("#flotante").css('left', (tempX+margin) + 'px');
		$("#flotante").show();

		return;
	}
 
	function hiddenDiv()
	{
		$("#flotante").hide();
	}

	$("#dep1").hover(function(event){
		showdiv(event,'El departamento de Ahuachapán es el más occidental de los 14 departamentos en los que está dividida la República de El Salvador. Su cabecera, la ciudad de Ahuachapán se encuentra a 100 km de San Salvador. El departamento tiene una extensión de 1.239,60 km².');
	},function(event){
			hiddenDiv();
		});
	$("#dep2").hover(function(event){
		showdiv(event,'Sonsonate es un departamento de El Salvador cuya cabecera es el municipio homónimo.');
	},function(event){
			hiddenDiv();
		});
	$("#dep3").hover(function(event){
		showdiv(event,'La Libertad es un departamento de El Salvador. Su capital es la ciudad de Santa Tecla, capital también del municipio homónimo.');
	},function(event){
			hiddenDiv();
		});
	$("#dep4").hover(function(event){
		showdiv(event,'La Paz es uno de los catorce departamentos que conforman la República de El Salvador. La cabecera departamental es la ciudad de Zacatecoluca. El departamento de La Paz se halla situado en el sector centro-sur de El Salvador.');
	},function(event){
			hiddenDiv();
		});
	$("#dep5").hover(function(event){
		showdiv(event,'Usulután ubicado en la zona oriental es uno de los catorce departamentos que conforman la República de El Salvador.');
	},function(event){
			hiddenDiv();
		});
	$("#dep6").hover(function(event){
		showdiv(event,'San Vicente es uno de los catorce departamentos que conforman la República de El Salvador, en la región Paracentral. La ciudad cabecera es San Vicente. San Vicente es la ciudad cabecera del municipio y departamento homónimos en El Salvador. Fue fundada en el año 1635 y llegó a ser capital de la república en el siglo XIX. Durante la colonización española, fue una de las localidades más importantes de la Intendencia de San Salvador. San Vicente es uno de los catorce departamentos que conforman la República de El Salvador, en la región Paracentral. La ciudad cabecera es San Vicente. El departamento fue creado, el 12 de junio de 1824 y funcionó como capital de El Salvador de 1834 a 1840.');
	},function(event){
			hiddenDiv();
		});
	$("#dep7").hover(function(event){
		showdiv(event,'San Salvador es uno de los 14 departamentos de El Salvador ubicado en la zona central.');
	},function(event){
			hiddenDiv();
		});
	$("#dep8").hover(function(event){
		showdiv(event,'Cuscatlán es uno de los catorce departamentos que conforman la República de El Salvador');
	},function(event){
			hiddenDiv();
		});
	$("#dep9").hover(function(event){
		showdiv(event,'Cabañas es un departamento de la zona paracentral de El Salvador. Su cabecera departamental es Sensuntepeque. Esta región tiene muchas reservas naturales.');
	},function(event){
			hiddenDiv();
		});
	$("#dep10").hover(function(event){
		showdiv(event,'Santa Ana es un departamento ubicado en la zona occidental de El Salvador. Su cabecera es la ciudad de Santa Ana que cuenta con aproximadamente una población de 245,421 habitantes.');
	},function(event){
			hiddenDiv();
		});
	$("#dep11").hover(function(event){
		showdiv(event,'Chalatenango es un departamento de El Salvador. Su cabecera departamental es Chalatenango, se encuentra ubicado al norte de la capital del país, San Salvador, fronterizo con Honduras. En este departamento se ubica el cerro El Pital con 2730 m de altitud sobre el nivel del mar, el punto más elevado del país. El clima más frío de El Salvador tiene lugar en estas alturas. El actual gobernador departamental es José Raimundo Alas Alas, nombrado en julio de 2014 por el actual Presidente Salvador Sánchez Cerén.');
	},function(event){
			hiddenDiv();
		});
	$("#dep12").hover(function(event){
		showdiv(event,'San Miguel es un departamento de El Salvador. Su cabecera departamental es San Miguel, ciudad que se encuentra a 138 km de San Salvador. Limita al Norte con la República de Honduras; al Este con los departamentos de Morazán y La Unión; al Oeste con los departamentos de Cabañas y Usulután; y al Sur con el océano Pacífico. Cubre un área de 2.077,1 km² y tiene una población que sobrepasa los 480.000 habitantes. Fue declarado departamento el 12 de junio de 1824.');
	},function(event){
			hiddenDiv();
		});
	$("#dep13").hover(function(event){
		showdiv(event,'Morazán es un departamento de El Salvador ubicado en la zona oriental del país. Limita al Norte con la república de Honduras; al Sur y al Oeste con el departamento de San Miguel, y al Sur y al Este con el departamento de La Unión. Su cabecera departamental es San Francisco.');
	},function(event){
			hiddenDiv();
		});
	$("#dep14").hover(function(event){
		showdiv(event,'La Unión es un departamento de la zona oriental de El Salvador. Es el más oriental de los departamentos salvadoreños y el que posee en su jurisdicción las aguas e islas cuzcatlecas del Golfo de Fonseca, bahía compartida con Honduras y Nicaragua. En este departamento y golfo se encuentra el único municipio insular de El Salvador, Meanguera del Golfo.');
	},function(event){
			hiddenDiv();
		});


});