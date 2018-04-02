import React, { Component } from 'react';
import '../styles/App.css';

import UsernameInput from './UsernameInput';
import ConfidentialText from './ConfidentialText';
import TextInput from './TextInput';
import UsernameOutput from './UsernameOutput';

import usernameToZeroWidth from '../utils/usernameToZeroWidth';
import zeroWidthToUsername from '../utils/zeroWidthToUsername';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      revealedUsername: '',
      zeroWidthUsername: '',
      confidentialHeading: 'Confidential Announcement: ',
      confidentialText: "This is some confidential text that you really shouldn't be sharing anywhere else.",
    };
    this.getUsername = this.getUsername.bind(this);
    this.revealUsername = this.revealUsername.bind(this);
  }

  getUsername(event) {
    this.setState({
      zeroWidthUsername: usernameToZeroWidth(event.target.value),
    });
  }

  revealUsername(event) {
    const confidentialInformation = event.target.value.replace(this.state.confidentialHeading, '');
    const zeroWidthUsername = confidentialInformation.replace(this.state.confidentialText, '');
    this.setState({
      revealedUsername: zeroWidthToUsername(zeroWidthUsername),
      dontBelieve: "Don't believe me? Try pasting the text here again in a different browser or through incognito mode.",
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row-4">
            <h2>1: Enter username:</h2>
            <UsernameInput
              username={this.state.username}
              handleChange={this.getUsername}
            />
          </div>

          <div className="row-4">
            <h2>2: Copy text below</h2>
            <ConfidentialText
              heading={this.state.confidentialHeading}
              text={this.state.confidentialText}
              username={this.state.zeroWidthUsername}
            />
          </div>

          <div className="row-4">
            <h2>3: Paste copied text here:</h2>
            <TextInput
              handleChange={this.revealUsername}
            />
          </div>

          <div className="row-4">
            <h2>4: Your username is...</h2>
            <UsernameOutput username={this.state.revealedUsername} />
            {this.state.dontBelieve &&
              <p className="text-muted">
                {this.state.dontBelieve}
              </p>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
