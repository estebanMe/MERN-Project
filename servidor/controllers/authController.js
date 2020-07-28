const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');


exports.autenticarUsuario = async (req, res) => {

    //revisar si hay errores
    const errores = validationResult(req);

    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    const { email, password } = req.body;

    try {
        //Revisa que sea un usuario registrado
        let usuario = await Usuario.findOne({email});
        if(!usuario){
           return res.status(400).json({msg: 'El usuario no exite'});
        }

        //Revisar password
        const passCorrecto = await bcryptjs.compare(password, usuario.password);
        if(!passCorrecto){
        return res.status(400).json({msg: 'Password Incorrecto'});
        }


        //Si todo es correcto, crear y firmar el jwt
        const payload = {
            usuario: {
                id: usuario.id
            }
        };

        //Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: '24h' //1hora
        }, (error, token) => {
            if(error) throw error;

            //Mensaje de confirmación
            res.json({ token });
        });

    } catch (error){
      console.log(error);
    }

}

//Obtiene que usuario esta autenticado
exports.usuarioAutenticado = async (req, res) => {
     try {
         const usuario  = await Usuario.findById(req.usuario.id).select('-password');
         res.json({usuario});

     } catch (error) {
         console.log(error);
         res.status(500).json({msj: 'Hubo un error'});
     }
}