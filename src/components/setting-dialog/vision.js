import React from 'react'
import Input from 'material-ui/Input'
import { FormGroup, FormLabel } from 'material-ui/Form'

class Vision extends React.Component {
  render() {
    return (
      <div>
        <FormGroup>
          <FormLabel>111:
            <input type='checkbox' />
            <Input type='time' value='1' name='j' />
          </FormLabel>
          <FormLabel required>111: <Input type='text' /></FormLabel>
        </FormGroup>
      </div>
    )
  }
}

export default Vision
