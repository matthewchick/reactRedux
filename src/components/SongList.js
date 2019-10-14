import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
//https://redux.js.org/api/bindactioncreators
import { bindActionCreators } from "redux";

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={()=> this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        console.log('this.props', this.props);
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {   //get MyState from store
    console.log(state);

    return { songs: state.songs };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ selectSong }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);

//export default connect(mapStateToProps, { selectSong })(SongList);

/*
function connect() {
    return function() {
        return 'Hi there';
    }
}
connect ()();

const mapDispatchToProps = dispatch => ({  // https://react-redux.js.org/using-react-redux/connect-mapdispatch
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
*/