import React from 'react';
// use export default selectSong, we use import selectSong from '../actions
import { selectSong } from '../actions';
import SongList from './SongList';

const App = () => {
    return (
        <div>
            <SongList />
        </div>
    );
};

export default App;