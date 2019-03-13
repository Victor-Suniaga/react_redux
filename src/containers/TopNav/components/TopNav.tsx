import React, { Component } from 'react';
import { HeaderContainer, Button } from './StyledComponents';

class TopNav extends Component {
  render() {
    return (
      <HeaderContainer>
          <Button>
              Sign In
          </Button>
      </HeaderContainer>
    );
  }
}

export default TopNav;
