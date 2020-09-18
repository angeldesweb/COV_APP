export default `

type Covid {
    _id:ID!
    paciente:Paciente!
    tipoPrueba:String!
    fechaPrueba:String
    resultado:Boolean!
    createdAt:String
    updatedAt:String
    createdBy:Usuario!
}

type CovidResponse {
    status:String!
    success:Boolean!
    message:String!
    covid:Covid
    covids:[Covid]
}

type Query {
    allCovids:CovidResponse!
    getCovidById(_id:ID!):CovidResponse!
    getCovids(key:String!,value:String!):CovidResponse!
}

type Mutation {
    createCovid(paciente:String!,tipoPrueba:String!,fechaPrueba:String,resultado:Boolean!,createdAt:String,updatedAt:String,createdBy:String!):CovidResponse!
    updateCovid(_id:ID!,paciente:String,tipoPrueba:String,fechaPrueba:String,resultado:Boolean,createdAt:String,updatedAt:String,createdBy:String):CovidResponse!
    deleteCovid(_id:ID!):CovidResponse!
}

`