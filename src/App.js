import React from 'react';
import {Button, Image, Divider, Header, Icon} from 'semantic-ui-react'
import Comments from './comment.js'
import Karina from "./Karina.jpg"

function App() {
  return (
    <div>
    <Image src = {Karina} size = 'medium' centered/ >
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='comment alternate' / >
        댓글을 달아주세요!
      </Header>
      </Divider>

      <Comments / >
</div>

  );
}

export default App;
