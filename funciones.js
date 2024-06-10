function confirmar() {
    let v_nombres = document.getElementById("in_nombre").value.trim();
    let v_apellidos = document.getElementById("in_apellido").value.trim();
    let v_fecha = new Date(document.getElementById("in_fecha").value);
    let mes_reg = String(v_fecha.getMonth() + 1).padStart(2, '0');
    let dia_reg = String(v_fecha.getDate()).padStart(2, '0');
    let anio_reg = String(v_fecha.getFullYear());
    let num_format = dia_reg + mes_reg + anio_reg;
    let v_genero = document.getElementById("in_gen").value;
    v_correo_creado = document.getElementById("in_correo").value.trim();
    v_contra_creada = document.getElementById("in_reg_contra").value;
    let v_contra_conf = document.getElementById("in_conf_contra").value;
    if (!v_nombres || !v_apellidos || !v_genero || !v_correo_creado || !v_contra_creada || !v_contra_conf || isNaN(v_fecha)) {
        alert("Por favor ingrese todos los valores requeridos");
        return;
    } else {
        if (v_contra_creada != v_contra_conf) {
            alert("Las contraseñas no coinciden");
            return;
        } else {
            alert("Registro completado");
            localStorage.setItem('correoCreado', v_correo_creado);
            localStorage.setItem('contraCreada', v_contra_creada);
            window.location.href = "inicio de secion.html";
        }
    }
}
function ingresar() {
    let v_correo_lg = document.getElementById("in_correo_lg").value.trim();
    let v_contra_lg = document.getElementById("in_contra_lg").value;
    let correoCreado = localStorage.getItem('correoCreado');
    let contraCreada = localStorage.getItem('contraCreada');
    if (v_correo_lg === correoCreado && v_contra_lg === contraCreada) {
        alert("Ingreso exitoso, bienvenido");
        window.location.href = "index.html";
    } else {
        alert("Correo o contraseña incorrectos");
    }
}

function searchRecipes() {
    // Obtiene el valor del campo de búsqueda
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();
    
    // Obtiene el contenedor de recetas
    var recipes = document.getElementById("recipes");
  
    // Si el campo de búsqueda está vacío, oculta el contenedor de recetas
    if (filter === "") {
      recipes.style.display = "none";
      return;
    }
  
    // Si hay un valor en el campo de búsqueda, muestra el contenedor de recetas
    recipes.style.display = "block";
  
    // Obtiene todas las recetas
    var recipeItems = recipes.getElementsByClassName("recipe");
  
    // Itera sobre las recetas y muestra/oculta según el filtro de búsqueda
    for (var i = 0; i < recipeItems.length; i++) {
      var recipe = recipeItems[i];
      var title = recipe.textContent || recipe.innerText;
      if (title.toUpperCase().indexOf(filter) > -1) {
        recipe.style.display = "";
      } else {
        recipe.style.display = "none";
      }
    }
  }
  
  function goToRecipePage(page) {
    // Redirecciona a la página de la receta correspondiente
    window.location.href = page;
  }
    
  