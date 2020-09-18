import {Covid} from '../models';

const createCovid = async (args)=>{
    const covid = new Covid(args);
    try {
        const response = await covid.save();
        return {
            status:200,
            success:true,
            message:'Registrado correctamente',
            covid:response
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se encontraron errores'
        }
    }
}

const readAllCovids = async ()=>{
    try {
        const covids = await Covid.find().populate('createdBy').populate('paciente');
        if(!covids.length){
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
            covids
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se encontraron errores'
        }
    }
}

const readCovidById = async (args)=>{
    let covidid = args._id;
    try {
        const covid = await Covid.findById(covidid)
        if(!covid){
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
            covid
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const readSomeCovids = async (args)=>{
    try {
        const covids = await Covid.find().where(args.key).equals(args.value)
        if(!covids.length){
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
            covids
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const updateCovid = async (args)=>{
    let covidid = args._id
    let update = args;
    try {
        const updated = await Covid.findByIdAndUpdate(covidid,update);
        return {
            status:200,
            success:true,
            message:'Registro actualizado',
            covid:updated
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const deleteCovid = async (args)=>{
    let covidid = args._id
    try {
        const covid = await Covid.findById(covidid);
        if(!covid){
            return{
                status:404,
                success:false,
                message:'No se encontró el registro'
            }
        }
        await covid.remove();
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
    createCovid,
    readAllCovids,
    readCovidById,
    updateCovid,
    deleteCovid,
    readSomeCovids
}