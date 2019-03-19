import React, { Component } from 'react';
import { HeaderContainer, Button } from './StyledComponents';

interface TopNavProps {
  actions: {
    appSignIn: () => any
  },
  user: String,
}
class TopNav extends Component<TopNavProps,{}> {

  constructor(props: TopNavProps) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn() {
    this.props.actions.appSignIn();
  }


  render() {
    return (
      <HeaderContainer>
        {this.props.user === '' ? (
          <Button onClick={this.handleSignIn}>
              Sign In
        </Button> ) : <p>{this.props.user}</p>}
      </HeaderContainer>
    );
  }
}

export default TopNav;
