export default `

    type Paciente{
        _id:ID
        tipoCedula:String!
        cedula:String!
        nombre:String!
        apellido:String!
        sexo:Boolean!
        edad:String!
        fechaNac:String
        lugarNac:String
        ocupacion:String
        representante:String
        cedulaRepresentante:String
        direccion:String
        municipio:String
        unidad:String
        parroquia:String
        localidad:String
        estado:String
        telefono:String
        email:String
        createdAt:String
        updatedAt:String
        createdBy:Usuario!
        resultado:Boolean!
        sintomas:Sintoma!
    }

    type PacienteResponse {
        status:String!
        success:Boolean!
        message:String
        pacientes:[Paciente]
        paciente:Paciente
    }
    type Query {
        allPacientes : PacienteResponse!
        getPacienteById(_id:ID!):PacienteResponse!
        getPacientes(key:String!,value:String!):PacienteResponse!
    }

    type Mutation {
        createPaciente(tipoCedula:String!,cedula:String!,nombre:String!,apellido:String!,sexo:Boolean!,edad:String!,fechaNac:String,lugarNac:String,ocupacion:String,representante:String,cedulaRepresentante:String,direccion:String,municipio:String,unidad:String,parroquia:String,localidad:String,estado:String,telefono:String,email:String,createdAt:String,updatedAt:String,createdBy:String!,resultado:Boolean!,sintomas:String!):PacienteResponse!
        updatePaciente(_id:ID!,tipoCedula:String,cedula:String,nombre:String,apellido:String,sexo:Boolean,edad:String,fechaNac:String,lugarNac:String,ocupacion:String,representante:String,cedulaRepresentante:String,direccion:String,municipio:String,unidad:String,parroquia:String,localidad:String,estado:String,telefono:String,email:String,createdAt:String,updatedAt:String,createdBy:String,resultado:Boolean,sintomas:String):PacienteResponse!
        deletePaciente(_id:ID!):PacienteResponse!
    }
`