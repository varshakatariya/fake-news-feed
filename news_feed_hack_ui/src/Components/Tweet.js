import React, {Component} from 'react';
import './Tweet.css';

const Tweet = (props) => {
    return (
        <div classNam="tweetContainer">
            <div>{props.data.userName}</div>
            <div>{props.data.tweetData}</div>
        </div>
    );
}

export default Tweet;