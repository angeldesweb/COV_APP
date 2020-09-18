import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Covid = new Schema({
    paciente:{type:Schema.ObjectId,ref:'Paciente'},
    tipoPrueba:{type:String,enum:['PDR','PCR']},
    fechaPrueba:{type:Date,default:Date.now()},
    resultado:{type:Boolean,required:true},
    createdAt:{type:Date,default:Date.now(),required:true},
    updatedAt:{type:Date},
    createdBy:{type:Schema.ObjectId,ref:'Usuario'}
})

module.exports = mongoose.model('Covid',Covid)