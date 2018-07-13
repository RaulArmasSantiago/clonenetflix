 import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLList
}from 'graphql'

import {GenreType} from './generes';
import {RatingType} from './ratings';
import Genre from '../../models/generes';
import Rating from '../../models/ratings';

export const MovieType = new GraphQLObjectType({
    name:"Listmovies",
    description:"Peliculas de la BD",
    fields: () =>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        plot:{
            type:GraphQLString
        },
        genre:{
            type:GenreType,
            resolve(movie){
                const {genre} = movie
                return Genre.findById(genre).exec()
            }
        },
        url:{
            type:GraphQLString,
        },
        director:{
            type:GraphQLString,
        },
        year:{
            type:GraphQLString
        },
        rate:{
            type:GraphQLList(GraphQLFloat),
        },
        raiting:{
            /* Este es para el procesador de pagos */
            type:RatingType,
            resolve(movie){
                const {ratin} = movie
                return Rating.findById(rating).exec()
            }
        },
        is_active:{
            type:GraphQLBoolean,
        },
        upload_at:{
            type:GraphQLString,
        }
    })
});

export const MovieInputType = new GraphQLInputObjectType({
    
    name:"AddMovies",
    description:"Agrega, modificar peliculas de la BD",
    fields: () =>({
        name:{
            type:GraphQLString
        },
        plot:{
            type:GraphQLString
        },
        genre:{
            type:GraphQLString,
        },
        url:{
            type:GraphQLString,
        },
        director:{
            type:GraphQLString,
        },
        year:{
            type:GraphQLString
        },
        raiting:{
            type:GraphQLString,
        }
    })
})

export const RateMovieType = new GraphQLInputObjectType({
    name:"addRate",
    descriptions:"Agrega rate a Movie",
    fields:() =>({
        rate:{
            type: GraphQLFloat
        }
    })
});