// El controlador tiene la lógica del negocio. (El que tengo que hacer)

export class ControladorHabitacion{

    constructor(){}

    insertar(request,response){
        let datosPeticion = request.body // Recibir los datos de la *Petición*
        
        // Conexión con la *Base de datos*

        // Ejecutar la consulta en la Base de datos (que método utilizar (Inserte, busqué, elimine,edite))

        // Envio la respuesta
          response.status(200).json({
              mensaje:"Exito en el ingreso de datos",
              data:datosPeticion,
              estado:true

          })


    }

    buscarTodos(request,response){
        let datosPrueba=[{nombre:"hab1",precio:300000},{nombre:"hab2",precio:450000}] // Quitar cuando tengamos base de datos
        response.status(200).json({
            mensaje:"Exito buscando la información",
            data:datosPrueba,
            estado:true
        })
    }

    buscarPorID(request,response){
        let id=request.params.id //Id que llega por la URL
        response.status(200).json({
            mensaje:"Exito buscando habitación por ID",
            data:"Datos del id:"+id,
            estado:true
        })
    }

    editar(request,response){
        let id=request.params.id // El id que llega por la URL
        let datosPeticion=request.body // Recibo datos Body
        response.status(200).json({
            mensaje:"Exito editando habitación por ID",
            data:"Datos del id:"+id,
            estado:true
        })
    }

    eliminar(request,response){
        let id=request.params.id //Id que llega por la URL
        response.status(200).json({
            mensaje:"Exito eliminando habitación por ID",
            data:"Datos del id:"+id,
            estado:true
        })
    }



}