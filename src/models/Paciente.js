import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Paciente = new Schema({
    tipoCedula:{type:String,required:true},
    cedula:{type:Number,required:true,unique:true},
    nombre:{type:String,required:true},
    apellido:{type:String,required:true},
    sexo:{type:Boolean,required:true},
    edad:{type:Number,required:true},
    fechaNac:{type:Date},
    lugarNac:{type:String},
    ocupacion:{type:String,default:'CNE'},
    representante:{type:String},
    cedulaRepresentante:{type:String},
    direccion:{type:String,default:'Sede Principal del CNE'},
    municipio:{type:String,default:'Libertador'},
    unidad:{type:String},
    parroquia:{type:String},
    localidad:{type:String},
    estado:{type:String,default:'Distrito Capital'},
    telefono:{type:String},
    email:{type:String},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date},
    createdBy:{type:Schema.ObjectId,ref:'Usuario'},
    resultado:{type:Boolean,required:true},
    sintomas:{type:Schema.ObjectId,ref:'Sintoma'}
});

module.exports = mongoose.model('Paciente',Paciente);