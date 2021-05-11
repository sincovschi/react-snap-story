import React from 'react'
import { render } from '@testing-library/react'
import { ComponentSampleStory } from './component-sample.stories'

describe('ComponentSample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentSampleStory />)
    expect(baseElement).toMatchSnapshot()
  })
})
