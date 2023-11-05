const conexion = require ('./conexionBD');


const buscarporId = async (idEstudiante) => {

    const consulta = 'SELECT * FROM estudiante WHERE activo = 1 AND idEstudiante = ?';

    const [estudiante] = (await conexion).query(consulta,[idEstudiante]);

    return estudiante;
}

module.exports = { buscarporId};