import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  handleSubmitComment(comment) {
    if (comment) {
      this.state.comments.push(comment);
      this.setState({
        comments: this.state.comments
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentApp;
