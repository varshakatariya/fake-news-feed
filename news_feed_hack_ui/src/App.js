import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweet from './Components/Tweet';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tweet: {
                userName: "Nikhil",
                tweetData: "2+2 = 6"
            },
            positiveTweets: [
                {
                    userName: "John Walters",
                    tweetData: "2+2 = 6"
                },
                {
                    userName: "Oliver Kahm",
                    tweetData: "2+2 = 6 is actually True"
                },
                {
                    userName: "Tony King",
                    tweetData: "2+2 = 6 is 100% True"
                }
            ],
            negativeTweets: [
                {
                    userName: "James Anderson",
                    tweetData: "2+2 = 4. These guys do not know maths."
                },
                {
                    userName: "Mary Adams",
                    tweetData: "2+2 = 4. Where do these people come from?"
                },
                {
                    userName: "Shane Mark",
                    tweetData: "2+2 = 4. Period."
                }
            ]
        }
		
		this.checkNodeCall = this.checkNodeCall.bind(this);
    }
	
	checkNodeCall(){

        axios.get('http://localhost:3000/users/getData')
            .then(response => {
                var r = response.data.result;

                console.log("Data coming from Node",response);

            })
            .catch(err => {
                console.log(err, 'No Response from Node JS');
            });
    }

    render() {
        let tweet = {
            userName: "Nikhil",
            tweetData: "2+2 = 6"
        }

        let positiveNews = this.state.positiveTweets.map((elem) => {
            return <Tweet data={elem} />
        });

        let negativeNews = this.state.negativeTweets.map((elem) => {
            return <Tweet data={elem} />
        });
		
		this.checkNodeCall();

        return (
            <div className="App container align-content-center ">

                <div className=""> Twitter </div>
                <div className="row">


                </div>

                <div className="row">
                </div>




            </div>
        );
    }
}

export default App;

