import {createPaciente,readAllPacientes,readPacienteById,updatePaciente,deletePaciente,readSomePacientes} from '../../controllers/pacientes'
export default {
    Query : {
        allPacientes : async (parent,args)=>{
            const response = await readAllPacientes();
            return response
        },
        getPacienteById : async (parent,args)=>{
            const response = await readPacienteById(args);
            return response
        },
        getPacientes : async (parent,args)=>{
            const response = await readSomePacientes(args);
            return response
        }
    },
    Mutation : {
        createPaciente : async (parent,args)=>{
            const response = await createPaciente(args);
            return response
        },
        updatePaciente : async (parent,args)=>{
            const response = await updatePaciente(args);
            return response
        },
        deletePaciente : async (parent,args)=>{
            const response = await deletePaciente(args);
            return response
        }
    }
}