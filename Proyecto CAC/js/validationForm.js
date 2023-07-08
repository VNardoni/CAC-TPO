const form = document.getElementById('form');

console.log(form);

const nombre = document.getElementById('nombre');

console.log(nombre);
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const nombreRestaurante = document.getElementById('nombre_restaurante');
const descripcionRestaurante = document.getElementById('descripcion_restaurante');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	validarEntradas();
});
function validarEntradas() {
    const nombreValue = nombre.value.trim();
    const telefonoValue = telefono.value.trim();
    const emailValue = email.value.trim();
    const nombreRestauranteValue = nombreRestaurante.value.trim();
    const descripcionRestauranteValue = descripcionRestaurante.value.trim();

    if (nombreValue === '') {
        setErrorFor(nombre,'INGRESE NOMBRE Y APELLIDO');
    } else {
        setSuccessFor(nombre);
    }

    if (telefonoValue === '') {
        setErrorFor(telefono, 'INGRESE UN NUMERO DE TELEFONO')
    } else {
        if (isTelefono(telefonoValue)) {
            setSuccessFor(telefono);
        } else {
            setErrorFor(telefono, 'INGRESE UN NUMERO DE TELEFONO VALIDO')
        }
        
        isTelefono(telefonoValue);
    }

    if (emailValue === '') {
        setErrorFor(email, 'INGRESE UN CORREO ELECTRONICO')
    } else {
        if (!isEmail(emailValue)) {
            setErrorFor(email, 'INGRESE UN CORREO EMAIL VALIDO');
        } else {
            setSuccessFor(email);
        }
    }

    if (nombreRestauranteValue === '') {
        setErrorFor(nombreRestaurante,'INGRESE EL NOMBRE DE SU COMERCIO');
    } else {
        setSuccessFor(nombreRestaurante);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'data error';
    small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'data success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isTelefono(telefonoValue) {
    var longitudTelefono = telefonoValue.split('').length;
    
    console.log(longitudTelefono);
    if (longitudTelefono > 9) {
        return true;
    }
    
    return false;
}