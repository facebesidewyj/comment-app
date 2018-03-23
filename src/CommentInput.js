import React, { Component } from 'react';

class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      content: ''
    };
  }

  /**
   * 监听用户名改变
   */
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  /**
   * 监听评论内容改变
   */
  handleContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  /**
   * 点击发布按钮
   */
  handleSubmit(event) {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content });
    }

    // 清空内容
    this.setState({
      content: ''
    });
  }
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
