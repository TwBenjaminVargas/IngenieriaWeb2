window.onload = function()
{
    const splash = document.getElementById("splashscreen");
    const passinput = document.getElementById("logininput_pass");
    const userinput = document.getElementById("logininput_user");
    const advspan =document.getElementById("advertencia-span");
    const submitBtn = document.getElementById("loginbutton");
    submitBtn.disabled = true;
    
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
    
    function inputsComplete()
    {
        if(userinput.value.length > 0 && passinput.value.length > 0)
            submitBtn.disabled = false;
        else
        submitBtn.disabled = true;
    }
    
    userinput.addEventListener("input",inputsComplete);
    passinput.addEventListener("input",inputsComplete);
    
    document.getElementById("loginform").addEventListener("submit",
        function(e)
        {
            advspan.style.display = "none";
            advspan.textContent = "";
            userinput.style.border = "";
            passinput.style.border = "";
            if (!esCorreoValido(userinput.value))
                showError(e, "El correo no es válido", userinput);
            else if(passinput.value.length <= 8)
                showError(e,"La contraseña debe tener mas de 8 caracteres",passinput);
            else
            {
                localStorage.setItem("user",userinput.value);
                localStorage.setItem("pass",passinput.value);
                window.location.href
            }
        }
    )
}

1