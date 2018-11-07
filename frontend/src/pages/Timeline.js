import React, { Component } from 'react';
import socket from 'socket.io-client';

import api from '../services/api';
import Tweet from '../components/Tweet';

import './Timeline.css';
import twitterLogo from '../twitter.svg';

export default class Timeline extends Component {
  state = {
    tweets: [],
    newTwitte: '',
  };

  async componentDidMount(){
    this.subscribeToEvents();

    const response = await api.get('/tweets');

    this.setState({tweets: response.data});
  }

  subscribeToEvents = () => {
    const io = socket('http://localhost:3001');

    io.on('tweet', data => {
      this.setState({ tweets:[data, ...this.state.tweets] })
    })

    io.on('like', data => {
      this.setState({ tweets: this.state.tweets.map(tweet =>
        tweet._id === data._id ? data : tweet
        ) })
    })
  }

  handleInputChand = (evento) =>{
    this.setState({newTwitte: evento.target.value});
  }

  handleNewTweet = async (evento) =>{
    if(evento.keyCode !== 13) return;

    const content = this.state.newTwitte;
    const author = localStorage.getItem('@GoTwitter:username');

    await api.post('tweets', {content, author});

    this.setState({newTwitte: ''});
  }

  render() {
    return (
      <div className="timeline-wrapper">
        <img src={twitterLogo} height={24} alt="GoTwitter"/>
        <form>
          <textarea
            value={this.state.newTwitte} onChange={this.handleInputChand}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?"/>

        </form>
        <ul className="tweet-list">        
          {this.state.tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet}/>       
          ))}
        </ul>
      </div>
    );
  }
}
