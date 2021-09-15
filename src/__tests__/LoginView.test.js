  import React from 'react';
  import ReactDOM from 'react-dom';
  import { render, fireEvent } from '@testing-library/react'
  import LoginView from './../LoginView'

it('calls onLogin prop on form submission with a given value', () => {
  const onLogin = jest.fn()
  const wrapper = render(<LoginView onLogin={onLogin}/>)

  const call_with = 'Nathan'

  // fills out the form
  fireEvent.change(wrapper.getByLabelText(/Name/i), { target: {value: call_with}})
  fireEvent.click(wrapper.getByText(/Login/i))
  
  // assert function is called correctly
  expect(onLogin).toBeCalled()
  expect(onLogin).toBeCalledWith(call_with)
})