import React from 'react';
// use export default selectSong, we use import selectSong from '../actions
//import { selectSong } from '../actions';
import SongList from './SongList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
            </div>
        </div>
    );
};

export default App;