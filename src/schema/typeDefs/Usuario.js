export default `

type Usuario {
    _id:ID!
    tipoCedula:String!
    cedula:String!
    nombre:String!
    apellido:String!
    password:String!
    email:String!
    question:String!
    reply:String!
    isActive:Boolean!
    createdAt:String!
    updatedAt:String!
    role:String!
}
type UsuarioResponse {
    status:String!
    success:Boolean!
    message:String!
    token:String
    usuario:Usuario
    usuarios:[Usuario]
}

type Query {
    allUsuarios:UsuarioResponse!
    getUsuarioById(_id:ID!):UsuarioResponse!
    getUsuarios(key:String!,value:String!):UsuarioResponse!
}

type Mutation {
    SignUp(tipoCedula:String!,cedula:String!,nombre:String!,apellido:String!,password:String!,email:String!,question:String!,reply:String!,isActive:Boolean!,role:String!):UsuarioResponse!
    SignIn(tipoCedula:String,cedula:String!,password:String!):UsuarioResponse!
    updateUsuario(_id:ID!,tipoCedula:String,cedula:String,nombre:String,apellido:String,password:String,email:String,question:String,reply:String,isActive:Boolean,role:String):UsuarioResponse!
    deleteUsuario(_id:ID!):UsuarioResponse!
}

`