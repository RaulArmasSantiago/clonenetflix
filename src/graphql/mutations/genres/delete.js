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
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteGenre = Genre.findByIdAndRemove(params.id).exec()
        if (!deleteGenre) throw new Error("Error al borrar usuario");
        return deleteGenre;
    }
}