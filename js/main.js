function validateForm() {

var spans = document.getElementsByTagName ("span")
for (var i=0; spans.length; i++) {
	spans [i].parentNode.removeChild (spans[i])
};

    var nombre = document.getElementById("name").value;
    var apellido= document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var pass = document.getElementById("input-password").value;


        if (nombre == null || nombre == "" || !/^[a-z][A-Z]*$/g.test(document.getElementById("name").value)) {
            var validez =document.createElement ("span");
            validez.innerHTML = "Ingresa un nombre"
            var boxBlack = document.getElementsByClassName ("input-box") [0].appendChild(validez);
        }

        if (apellido == null || apellido == "" || !/^[a-z][A-Z]*$/g.test(document.getElementById("lastname").value)) {
            var validez =document.createElement ("span");
            validez.innerHTML = "Ingresa un apellido"
            var boxBlack = document.getElementsByClassName ("input-box") [1].appendChild(validez);

        }

        if (correo == "" ) {
            var validez =document.createElement ("span");
            validez.innerHTML = "Ingresa un correo"
            var boxBlack = document.getElementsByClassName ("input-box") [2].appendChild(validez); 
        }


        if (pass.length < 5 || pass == "123456" || pass =="password" || pass == "098754") {
        	var validez =document.createElement ("span");
            validez.innerHTML = "Ingresa una contraseña"
            var boxBlack = document.getElementsByClassName ("input-box") [3].appendChild(validez); 
       
        }
       
}
