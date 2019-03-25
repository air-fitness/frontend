import React, { Component } from 'react';
import { Button, Modal, Grid } from 'semantic-ui-react';
import moment from 'moment';
import 'semantic-ui-css/semantic.min.css'


class ClassTypeCard extends Component {
  render() {
    return (
      <div>
        <Modal trigger={<Button icon={'arrow circle right'} />}>
          <Modal.Header>
            <h1>Yoga</h1>
          </Modal.Header>

          <Modal.Header>
            <h2>Friday Morning Beach Mindfulness</h2>
            <h3>
              <em>with Ryan Hamlin</em>
            </h3>
          </Modal.Header>
          <Modal.Header>
            <Grid celled="internally">
              <Grid.Row>
                <Grid.Column width={3} />
                <Grid.Column width={10}>
                  <h4>Date</h4>
                </Grid.Column>
                <Grid.Column width={3}>
                  <h4>Attend!</h4>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3} />
                <Grid.Column width={10}>
                  <h4>{moment().format('LLLL')}</h4>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Button icon={'calendar check outline'}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Header>

          <Modal.Actions>
            {/* <Button primary>
              Go Back <Icon name="right chevron" />
            </Button> */}
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
export default ClassTypeCard;
