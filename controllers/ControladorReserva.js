export class ControladorReserva{

    constructor(){}

    
    insertar(request,response){
        let datosReserva = request.body // Recibir los datos de la *Petición*
        
        // Conexión con la *Base de datos*

        // Ejecutar la consulta en la Base de datos (que método utilizar (Inserte, busqué, elimine,edite))

        // Envio la respuesta
          response.status(200).json({
              mensaje:"Exito en el ingreso de la reserva",
              data:datosReserva,
              estado:true

          })

    }

    buscarPorID(request,response){
        let id=request.params.id //Id que llega por la URL
        response.status(200).json({
            mensaje:"Exito buscando la reserva por ID",
            data:"Datos del id:"+id,
            estado:true
        })
    }

    editar(request,response){
        let id=request.params.id // El id que llega por la URL
        let datosReserva=request.body // Recibo datos Body
        response.status(200).json({
            mensaje:"Exito editando la reserva por ID",
            data:"Datos del id:"+id,
            estado:true
        })
    }

    eliminar(request,response){
        let id=request.params.id //Id que llega por la URL
        response.status(200).json({
            mensaje:"Exito eliminando la reserva por ID",
            data:"Datos del id:"+id,
            estado:true
        })
    }


}