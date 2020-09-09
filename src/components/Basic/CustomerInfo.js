import React from 'react'
import { useContext } from 'react'
import { CustomerContext } from './CustomerContext'

const CustomerInfo = () => {
  const customerContext = useContext(CustomerContext);
  const { name, username, email, gender } = customerContext;
  return (
    <div>
      <h2>Context Example</h2>
      <h3>Customer Info</h3>
      <div>
        Name  - {name}
      </div>
      <div>
        username  - {username}
      </div>
      <div>
        Email - {email}
      </div>
      <div>
        Gender - {gender}
      </div>
    </div>
  )
}

export default CustomerInfo
