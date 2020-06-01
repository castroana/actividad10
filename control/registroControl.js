/* este es el archivo de control */

const Registro = require("../modelo/registroEstudiante")


//INSERTAR REGISTRO
function insertarRegistro(req, res){
    var registro = new Registro();
    var parametros = req.body;

    registro.NombreEstudiante = parametros.NombreEstudiante;
    registro.Facultad = parametros.Facultad;
    registro.EstadoEstudiante = parametros.EstadoEstudiante;

    registro.save((err, registroNuevo)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!registroNuevo){
                res.status(200).send({message:"No fue posible insertar el registro"});
            }else{
                res.status(200).send({
                    status: "Registro Insertado" ,
                    registros: registroNuevo
                })
            }

        }

    })

}

//MODIFICAR REGISTRO
function modificarRegistro(req, res){
    Registro.find((err, registroModificado)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!registroModificado){
                res.status(200).send({message:"No fue posible realizar la modificación del registro"});
            }else{
                res.status(200).send({
                    status: "Registro Modificado" ,
                    registros: registroModificado
                })
            }
        }
    })
}    
             
//LISTAR REGISTRO
function listarRegistro(req, res){
    var registroId = req.params.id;
    var nuevosDatosRegistro = req.body;

    Registro.findByIdAndUpdate(registroId, nuevosDatosRegistro,(err, ListadeRegistros)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(! ListadeRegistro){
                res.status(200).send({message:"No fue posible Listar el Registro"});
            }else{
                res.status(200).send({
                    status: "Registro Listado" ,
                    registros: nuevosDatosRegistro
                })
            }
        }
    } )
}

//ELIMINAR REGISTRO
function eliminarRegistro (req, res){
    var registroId = req.params.id;

    Registro.findByIdAndDelete (registroId, (err, registroEliminado)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(! registroEliminado){
                res.status(404).send({message:"No fue posible Eliminar el Registro"});
            }else{
                res.status(200).send({
                    status: "Registro Eliminado" ,
                    registros: registroEliminado
                })
            }
        }


    })

}


//Exportar funciones

module.exports = {
    insertarRegistro,
    modificarRegistro,
    listarRegistro,
    eliminarRegistro,   
}