import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext'

const NuevaCuenta = () => {

    // extraer los valores del context
    const alertaContext = useContext()

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });


    //extraer de usuario

    const {nombre, email, password, confirmar} = usuario;

    const onChange = e => {
     guardarUsuario({
         ...usuario,
         [e.target.name] : e.target.value
        })
    }
    

    //Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();


        // Validar que no este vacio

        // Password minimo de 6 caracteres

        // Los password iguales

        // Pasarlo al action.
    }

    
    return ( 
      
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                 <h1>Obtener una cuenta</h1>

                <form 
                  onSubmit={onSubmit}
                >

                     <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu Nombre"
                        value={nombre}
                        onChange={onChange}

                        />
                      </div>
                      <div className="campo-form">
                           <label htmlFor="email">Email</label>
                           <input 
                             type="email"
                             id="email"
                             name="email"
                             placeholder="Tu Email"
                             value={email}
                             onChange={onChange}

                           />
                      </div>
                      <div className="campo-form">
                           <label htmlFor="email">Password</label>
                           <input 
                             type="password"
                             id="password"
                             name="password"
                             placeholder="Tu password"
                             value={password}
                             onChange={onChange}

                           />
                      </div>
                      <div className="campo-form">
                      <label htmlFor="email">Confirmar Password</label>
                      <input 
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        placeholder="Repite tu password"
                        value={confirmar}
                        onChange={onChange}

                      />
                 </div>

                      <div className="campo-form"> 
                            <input 
                               type="submit"
                               className="btn btn-primario btn-block"
                               value="Registrarme"
                            />
                      </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                      Volver a iniciar sesión
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;
