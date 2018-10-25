import types from './actionTypes';

export function refreshTopics (topics) {
  return {
    type: types.REFRESH_TOPICS,
    topics
  }
}