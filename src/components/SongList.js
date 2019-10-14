import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        console.log('this.props', this.props);
        return <div>SongList</div>
    }
}

const mapStateToProps = (state) => {   //get MyState from store
    console.log(state);

    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);

/*
function connect() {
    return function() {
        return 'Hi there';
    }
}
connect ()();
*/