export default `

type Sintoma {
    _id:ID!
    anosmia:Boolean!
    disgeusia:Boolean!
    fiebre:Boolean!
    cefalea:Boolean!
    tos:Boolean!
    rinorrea:Boolean!
    mialgia:Boolean!
    artralgia:Boolean!
    astenia:Boolean!
    nausias:Boolean!
    vomitos:Boolean!
    diarrea:Boolean!
    otro:String
}

type SintomaResponse {
    status:String!
    success:Boolean!
    message:String!
    sintoma:Sintoma
    sintomas:[Sintoma]
}

type Query {
    allSintomas:SintomaResponse!
    getSintomaById(_id:ID!):SintomaResponse!
    getSintomas(key:String!,value:String!):SintomaResponse!
}

type Mutation {
    createSintoma(anosmia:Boolean!,disgeusia:Boolean!,fiebre:Boolean!,cefalea:Boolean!,tos:Boolean!,rinorrea:Boolean!,mialgia:Boolean!,artralgia:Boolean!,astenia:Boolean!,nausias:Boolean!,vomitos:Boolean!,diarrea:Boolean!,otro:String):SintomaResponse!
    updateSintoma(_id:ID!,anosmia:Boolean,disgeusia:Boolean,fiebre:Boolean,cefalea:Boolean,tos:Boolean,rinorrea:Boolean,mialgia:Boolean,artralgia:Boolean,astenia:Boolean,nausias:Boolean,vomitos:Boolean,diarrea:Boolean,otro:String):SintomaResponse!
    deleteSintoma(_id:ID!):SintomaResponse!
}

`