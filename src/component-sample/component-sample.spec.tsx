import React from 'react'
import { render } from '@testing-library/react'
import { ComponentSample } from './component-sample'

describe('ComponentSample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentSample />)
    expect(baseElement).toMatchSnapshot()
  })
})
