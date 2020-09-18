import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Sintoma = new Schema({
    anosmia:{type:Boolean,default:false},
    disgeusia:{type:Boolean,default:false},
    fiebre:{type:Boolean,default:false},
    cefalea:{type:Boolean,default:false},
    tos:{type:Boolean,default:false},
    rinorrea:{type:Boolean,default:false},
    mialgia:{type:Boolean,default:false},
    artralgia:{type:Boolean,default:false},
    astenia:{type:Boolean,default:false},
    nausias:{type:Boolean,default:false},
    vomitos:{type:Boolean,default:false},
    diarrea:{type:Boolean,default:false},
    otro:{type:String}
});

module.exports = mongoose.model('Sintoma',Sintoma)