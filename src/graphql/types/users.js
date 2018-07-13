import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
}from 'graphql'

export const UserType = new GraphQLObjectType({

    name:"ListUsers",
    description:"Usuario de la BD",
    fields: () =>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString,
        },
        photo:{
            type:GraphQLString,
        },
        is_admin:{
            type:GraphQLBoolean,
        },
        create_at:{
            type:GraphQLString
        },
        is_active:{
            type:GraphQLBoolean,
        },
        client_id:{
            /* Este es para el procesador de pagos */
            type:GraphQLString
        }
    })
});

export const UserInputType = new GraphQLInputObjectType({
    name:"AddUsers",
    description:"Agrega, modifica nuevos usuario de la BD",
    fields: () =>({
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        password:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString,
        },
        photo:{
            type:GraphQLString,
        }
    })
})

