$(document).ready(function(){
	var tab = document.getElementById("contTable").innerHTML;
	$("#bod").html('<div id="all"><from id="frmEst"><div id="nombre"><label>Nombre:</label><input type="text" id="txtnom"/><div id="edad"><label>Edad:<input type="text" id="txtedad"</div><div id="email"><label>Correo Electronico:</label><input type="text" id="txtemail"/></div><div id="pais"><label>Pais:</label><select id="cmbPais"><option>Seleccione su Pais<option>Canada</option><option>Estados Unidos(EUA)</option><option>Mexico</option><option>Belice</option><option>El Salvador</option><option>Guatemala</option><option>Honduras</option><option>Costa Rica</option><option>Nicaragua</option><option>Panama</option></select></div><div id"btn"><input type="button" id="btnAdd" value="Agregar"></input></div></form>'+tab+'</div>');
		//alert("sup desde jquery");
	});


$(document).on("click","#btnAdd",function(event){
		
			event.preventDefault();
			var _nom = document.getElementById("txtnom").value;
			var _edad=document.getElementById("txtedad").value;
			var _email = document.getElementById("txtemail").value;
			var _Carrera = document.getElementById("cmbPais").value;
			
			var error = "Correo Electronico Ingresado Incorrecto";

			var goodEmail = new RegExp(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/);

			if($("#txtemail").val().indexOf('@',0) == -1 || $("#txtemail").val().indexOf('.',0) == -1){
				var bef= document.getElementById("email").innerHTML;
    		$("#email").html(bef+'<div id="divError">'+error+'</div>');
    		$("#divError").fadeOut(5000, function(){
    			$("#divError").remove();
    		});
    	}else{
    		var fila = "<tr><td>"+_nom+"</td><tr><td>"+_edad+"</td><tr><td>"+_email+"</td><td>"+_Carrera+"</td></tr>"

			var btn = document.createElement("TR");

			btn.innerHTML=fila;
    		document.getElementById("datos").appendChild(btn);
    	}

			
	});

