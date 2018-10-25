import React from 'react';
import Topic from './topic';

export default class TopicsList extends React.Component {
  render () {
    return (
      this.props.topics.map(el => <Topic topic={el} key={el._id}/>)
    );
  }
}

