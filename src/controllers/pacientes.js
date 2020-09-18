import {Paciente} from '../models';
import {formatErrors} from './Errors';

const createPaciente = async (args)=>{
    try {
        const paciente = new Paciente(args);
        const reponse = await paciente.save()
        return {
            status:200,
            success:true,
            message:'Registrado correctamente',
            paciente:reponse
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:formatErrors({errors:reponse.errors})
        }
    }
}

const readAllPacientes = async ()=>{
    try {
        const pacientes = await Paciente.find().populate('createdBy').populate('sintomas')
        if(!pacientes.length){
            return {
                status:404,
                success:false,
                message:'Sin registros'
            }
        }
        return {
            status:200,
            success:true,
            message:'Petición realizada con éxito',
            pacientes
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se encontraron errores'
        }
    }
}

const readPacienteById = async (args)=>{
    let pacienteid = args._id;
    try {
        const paciente = await Paciente.findById(pacienteid).populate('createdBy').populate('sintomas')
        if(!Paciente){
            return{
                status:404,
                success:false,
                message:'No se encontró el registro'
            }
        }
        return {
            status:200,
            success:true,
            message:'Petición realizada con éxito',
            paciente
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const readSomePacientes = async (args)=>{
    try {
        const pacientes = await Paciente.find().where(args.key).equals(args.value).populate('createdBy').populate('sintomas')
        if(!pacientes.length){
            return {
                status:404,
                success:false,
                message:'No se encontraron registros'
            }
        }
        return{
            status:200,
            success:true,
            message:'Petición realizada con éxito',
            pacientes
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const updatePaciente = async (args)=>{
    let pacienteid = args._id
    let update = args;
    try {
        const updated = await paciente.findByIdAndUpdate(pacienteid,update);
        return {
            status:200,
            success:true,
            message:'Registro actualizado',
            paciente:updated
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const deletePaciente = async (args)=>{
    let pacienteid = args._id
    try {
        const paciente = await Paciente.findById(pacienteid);
        if(!Paciente){
            return{
                status:404,
                success:false,
                message:'No se encontró el registro'
            }
        }
        await paciente.remove();
        return{
            status:200,
            success:true,
            message:'Registro eliminado'
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

export {
    createPaciente,
    readAllPacientes,
    readPacienteById,
    updatePaciente,
    deletePaciente,
    readSomePacientes
}