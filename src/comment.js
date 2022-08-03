import React from 'react';
import Human from "./human.png"
import {Comment, Form, Button, Header, Icon} from 'semantic-ui-react'

class Comments extends React.Component{

  render(){
    return(  <Comment.Group style = {{marginLeft: "630px"}}>
       <Header as='h3' dividing>
         Comments
       </Header>

       <Comment>
         <Comment.Avatar src= {Human} />
         <Comment.Content>
           <Comment.Author as='a'>Matt</Comment.Author>
           <Comment.Metadata>
             <div>Today at 5:42PM</div>
           </Comment.Metadata>
           <Comment.Text>How artistic!</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>


       <Form reply>
         <Form.TextArea />
         <Button content='Add Reply' labelPosition='left' icon='edit' primary />
       </Form>
       <br/>
       <Button color='facebook'>
         <Icon name='facebook' /> Facebook
       </Button>
       <Button color='instagram'>
         <Icon name='instagram' /> Instagram
       </Button>
       <Button color='youtube'>
         <Icon name='youtube' /> YouTube
       </Button>
     </Comment.Group>
    )
  }
}

export default Comments
