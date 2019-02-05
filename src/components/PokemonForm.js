import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  // handleChange = (event) => {
  //   console.log(event.target.name); // the name of the form element
  //   console.log(event.target.value); // the value of the form element
  //   console.log(event.target.hp)
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  //   console.log('change:' + this.state)
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log('State: ' + this.state)
  // }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
