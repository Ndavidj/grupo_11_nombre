window.addEventListener('load', function(){
    let login = document.querySelector("#login-form");
    login.email.focus();

    login.addEventListener("submit", function(e){

        let errors = [];

        let email = document.querySelector("#email");
        let password = document.querySelector("#password");       


        // --------- EMAIL (regex) ------------
        let regEmail = /\S+@\S+\.\S+/;
        if (!regEmail.test(email.value)) {
            errors.push("Debe ingresar un email válido");
            email.classList.add("is-invalid");
        } else {
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            login.password.focus();
        };

        // --------- PASSWORD ------------
        if (password.value == "") {
            errors.push("El campo contraseña no puede estar vacío");
            password.classList.remove("is-valid");
            password.classList.add("is-invalid");
        } else {
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
        };


        // Controlamos si hay errores 
        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector(".errores");
            ulErrors.classList.add("alert-warning");
            ulErrors.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            };
        } else {
            login.submit();
        }
    })



})