import React, {Fragment, useState, useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto,  mostrarError } = proyectosContext;
    
   

    //State para Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: '',
        
    });

    //Extraer nombre de proyecto
    const{ nombre } = proyecto;

      //Lee los contenidos del input
      const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
      }

    // Cuando el usuario envia un proyecto

    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar el proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }
        //Agregar al state
        agregarProyecto(proyecto);

        //Reiniciar el form
        guardarProyecto(
            {NOMBRE: ''}
        )

    }

    return (
      <Fragment>
                <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
                >Nuevo Proyecto</button>
                
                { formulario
                    ? 
                     (
                        <form 
                        action=""
                        className="formulario-nuevo-proyecto"
                     >
                         <input 
                             type="text"
                             className="input-text"
                             placeholder="Nombre Proyecto"
                             name="nombre"
                             value={nombre}
                             onChange={onChangeProyecto}
                         />
                         <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                            onClick={onSubmitProyecto}
                         />
     
                     
                     </form>
                     )
                    : null
                }

                {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
                
      </Fragment>
      );
}
 
export default NuevoProyecto;