import React from 'react';
import {Contact, Text} from './styles'
export default function FormContact() {

  return (
    <Contact>
    <div className="mb-3">
        <input type="email" className="form-control" placeholder='Email address' name="email" id="InputEmail" aria-describedby="email" />
    </div>
    <div className="mb-3">
        <Text className="form-control" id="InputText" name="text" placeholder='Send an awesome message! :D' aria-describedby="text" />
    </div>
    </Contact>
  )
}
