import React from 'react';
import { connect } from 'react-redux';
import TopicsList from './topicsList';
import { refreshTopics } from '../redux/actions';

class Dashboard extends React.Component {
  state = {
    titleText: ''
  };

  componentDidMount() {
    fetch('http://localhost:4000/topics')
      .then(res => res.json())
      .then(topics => this.props.refreshTopics(topics));
  }

  addTopic() {
    fetch('http://localhost:4000/topics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ title: this.state.titleText })
    })
      .then(res => res.json())
      .then(topics => this.props.refreshTopics(topics));
    this.setState({ titleText: '' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="add a topic"
          value={this.state.titleText}
          onChange={event => this.setState({ titleText: event.target.value })}
        />
        <button type="submit" onClick={() => this.addTopic()}>
          Add
        </button>
        <TopicsList topics={this.props.topics} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topics
});

const mapDispatchToProps = dispatch => ({
  refreshTopics: topics => dispatch(refreshTopics(topics))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
