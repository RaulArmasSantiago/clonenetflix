import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
}from 'graphql'

export const GenreType = new GraphQLObjectType({

    name:"ListGeneres",
    description:"Generos de peliculas de la BD",
    fields: () =>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        },
        is_active:{
            type:GraphQLBoolean,
        }
    })
});

export const GenreInputType = new GraphQLInputObjectType({
    name:"AddGenre",
    description:"Agrega, modifica generos de la BD",
    fields: () =>({
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        }
    })
})

