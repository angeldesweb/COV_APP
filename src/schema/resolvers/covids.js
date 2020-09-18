import {createCovid,readAllCovids,readCovidById,readSomeCovids,updateCovid,deleteCovid} from '../../controllers/covids';

export default {
    Query : {
        allCovids : async (parent,args)=>{
            const response = await readAllCovids();
            return response
        },
        getCovidById : async (parent,args)=>{
            const response = await readCovidById(args);
            return response
        },
        getCovids : async (parent,args) =>{
            const response = await readSomeCovids(args)
            return response
        }
    },
    Mutation : {
        createCovid : async (parnt,args)=>{
            const response = await createCovid(args);
            return response
        },
        updateCovid : async (parent,args)=>{
            const response = await updateCovid(args);
            return response
        },
        deleteCovid : async (parent,args)=>{
            const response = await deleteCovid(args);
            return response
        }
    }
}


