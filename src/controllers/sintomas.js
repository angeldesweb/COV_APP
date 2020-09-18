import {Sintoma} from '../models';

const createSintoma = async (args)=>{
    const sintoma = new Sintoma(args);
    try {
        const response = await sintoma.save();
        return {
            status:200,
            success:true,
            message:'Registrado correctamente',
            sintoma:response
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se encontraron errores'
        }
    }
}

const readAllSintomas = async ()=>{
    try {
        const sintomas = await Sintoma.find();
        if(!sintomas.length){
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
            sintomas
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se encontraron errores'
        }
    }
}

const readSintomaById = async (args)=>{
    let sintomaid = args._id;
    try {
        const sintoma = await Sintoma.findById(Sintomaid)
        if(!sintoma){
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
            sintoma
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const readSomeSintomas = async (args)=>{
    try {
        const sintomas = await Sintoma.find().where(args.key).equals(args.value)
        if(!sintomas.length){
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
            sintomas
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const updateSintoma = async (args)=>{
    let sintomaid = args._id
    let update = args;
    try {
        const updated = await Sintoma.findByIdAndUpdate(sintomaid,update);
        return {
            status:200,
            success:true,
            message:'Registro actualizado',
            sintoma:updated
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const deleteSintoma = async (args)=>{
    let sintomaid = args._id
    try {
        const sintoma = await Sintoma.findById(sintomaid);
        if(!Sintoma){
            return{
                status:404,
                success:false,
                message:'No se encontró el registro'
            }
        }
        await sintoma.remove();
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
    createSintoma,
    readAllSintomas,
    readSintomaById,
    updateSintoma,
    deleteSintoma,
    readSomeSintomas
}