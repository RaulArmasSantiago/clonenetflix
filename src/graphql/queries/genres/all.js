import {
    GraphQLList
} from 'graphql';

import Genre from '../../../models/generes';
import {GenreType} from '../../types/generes';

const queryAllGenres = {

    type:new GraphQLList(GenreType),
    resolve(){
        const genres = Genre.find().exec()
        if(!genres) throw new Error("Error al traer de la BD")
        return genres;
    }
}

export default queryAllGenres;