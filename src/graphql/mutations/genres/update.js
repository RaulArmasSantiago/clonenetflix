
import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import Genre from '../../../models/generes';
import {GenreInputType,GenreType} from '../../types/generes';

export default {
    type:GenreType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:"data",
            type:new GraphQLNonNull(GenreInputType)
        }
    },
    resolve(root,params){
        return Genre.findByIdAndUpdate(params.id,
            {$set:{...params.data}}
        ).then((genre)=> {
            return genre
        }).catch((err) => {
            throw new Error("Error al hacer update")
        })
    }
}