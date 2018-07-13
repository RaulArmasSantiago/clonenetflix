import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLInt
}from 'graphql'

export const RatingType = new GraphQLObjectType({

    name:"ListRating",
    description:"Clasificaciones de peliculas de la BD",
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
        age:{
            type:GraphQLInt
        },
        is_active:{
            type:GraphQLBoolean,
        }
    })
});

export const RatingInputType = new GraphQLInputObjectType({
    name:"AddRating",
    description:"Agrega, modifica clasificaiones de la BD",
    fields: () =>({
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        },
        age:{
            type:GraphQLInt
        }
    })
})

