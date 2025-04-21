window.onload = function()
{
    const passinput = document.getElementById("logininput_pass");
    const userinput = document.getElementById("logininput_user");
    const submitBtn = document.getElementById("loginbutton");
    const advspan =document.getElementById("advertencia-span");
    const splash = document.getElementById("splashscreen");

    //splashcreen
    setTimeout(()=>
        {
            splash.style.opacity="0";
            setTimeout(()=>splash.style.display = "none",1000);  
    
        },4000);

    function showError(e,mensaje, campo)
    {
        e.preventDefault();
        advspan.style.display = "flex";
        advspan.textContent = mensaje;
        campo.style.border = "2px solid var(--red-intense)";
    }
    
    function esCorreoValido(correo)
    {
        // Regex simple para validar email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    }

   
    
    document.getElementById("loginform").addEventListener("submit",
        function(e)
        {
            advspan.style.display = "none";
            advspan.textContent = "";
            userinput.style.border = "";
            passinput.style.border = "";
    
            if (userinput.value.length == 0)
                showError(e,"Todos los campos deben completarse",userinput);
            if (passinput.value.length == 0)
                showError(e,"Todos los campos deben completarse",passinput);
            else if (!esCorreoValido(userinput.value))
                showError(e, "El correo no es válido", userinput);
            else if(passinput.value.length <= 8)
                showError(e,"La contraseña debe tener mas de 8 caracteres",passinput);
        }
    )
}

