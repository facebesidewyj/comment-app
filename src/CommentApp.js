import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

class CommentApp extends Component {
  constructor() {
    super();
    /**
     * 当某个状态被多个组件依赖或者影响时，就该把该状态提升到这些组件最近的公共父组件中，
     * 用props传递数据或者函数来管理。
     */
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
