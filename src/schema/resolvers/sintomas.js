import {createSintoma,readAllSintomas,readSintomaById,readSomeSintomas,updateSintoma,deleteSintoma} from '../../controllers/sintomas';

export default {
    Query : {
        allSintomas : async (parent,args)=>{
            const response = await readAllSintomas();
            return response; 
        },
        getSintomaById : async (parent,args)=>{
            const response = await readSintomaById(args);
            return response;
        },
        getSintomas : async (parent,args) =>{
            const response = await readSomeSintomas(args);
            return response;
        }
    },
    Mutation : {
        createSintoma : async (parent,args)=>{
            const response = await createSintoma(args);
            return response;
        },
        updateSintoma : async (parent,args)=>{
            const response = await updateSintoma(args);
            return response;
        },
        deleteSintoma : async (parent,args)=>{
            const response = await deleteSintoma(args);
            return response;
        }
    }
}