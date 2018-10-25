import React from 'react';
import { connect } from 'react-redux';
import { refreshTopics } from '../redux/actions';

class Topic extends React.Component {

  deleteTopic () {
    fetch(`http://localhost:4000/topics/${this.props.topic._id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(topics => this.props.refreshTopics(topics));
  }

  updateVoteScore (newCount) {
    const action = newCount > this.props.topic.score ? 'up' : 'down';
    fetch(`http://localhost:4000/topics/${this.props.topic._id}/${action}`, {
      method: 'PUT'
    }).then(res => res.json())
      .then(topics => this.props.refreshTopics(topics))
  }


  render () {
    return (
      <div className="topic">
        <div className="voting">
          <button onClick={() => this.updateVoteScore(this.props.topic.score + 1)}>LOVE</button>
            {this.props.topic.score}
          <button onClick={() => this.updateVoteScore(this.props.topic.score - 1)}>HATE</button>
        </div>
        <div>
          <p>{this.props.topic.title}</p>
          <p>{this.props.topic.published_at.toString()}</p>
        </div>
        <div>
          <button onClick={() => this.deleteTopic()}>Delete</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
  refreshTopics: topics => dispatch(refreshTopics(topics))
});

export default connect (mapStateToProps, mapDispatchToProps)(Topic);