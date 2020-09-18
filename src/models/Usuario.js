import mongoose, { deleteModel } from 'mongoose'

const Schema = mongoose.Schema;

const Usuario = new Schema({
    tipoCedula:{type:String,required:true},
    cedula:{type:String,required:true,unique:true},
    nombre:{type:String,required:true},
    apellido:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    question:{type:String,required:true},
    reply:{type:String,required:true},
    isActive:{type:Boolean,required:true},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date},
    role:{type:String,enum:['Basico','Intermedio','Avanzado']}
});

module.exports = mongoose.model('Usuario',Usuario);
