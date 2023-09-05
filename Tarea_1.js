var credencial = {
    nombre: "Jose Carlos ",
    apellidoPaterno: "Herrera ",
    apellidoMaterno: "Duarte", 
    edad: 23,
  
    
    esMayorDeEdad: function() {
      return this.edad >= 18;
    },

    NombreCompleto: function(){
        return this.nombre + "" + this.apellidoPaterno + "" + this.apellidoMaterno
    },
  
    
    mensajeBienvenida: function() {
      return "¡Hola, " + this.nombre + "" + this.apellidoPaterno + "" + this.apellidoMaterno + "! Bienvenido/a."
    },
  
    obtenerResumen: function() {
        return "Nombre: " + this.nombre + "" + this.apellidoPaterno + "" + this.apellidoMaterno + "\n" +
               "Edad: " + this.edad + "\n" 
      }

  };
  
      
  console.log(credencial.nombre);             
  console.log(credencial.esMayorDeEdad());    
  console.log(credencial.mensajeBienvenida()); 
  console.log("Credencial", credencial.obtenerResumen());  
  