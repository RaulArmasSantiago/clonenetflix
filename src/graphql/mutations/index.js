import Users from './users';
import Movies from './movies';
import Genres from './genres';
import Rating from './ratings';

export default {
    ...Users,
    ...Movies,
    ...Genres,
    ...Rating
}
