/* eslint-disable testing-library/no-container */
import React from 'react'
import { config } from 'react-transition-group'
import { render, fireEvent ,screen} from '@testing-library/react'

import Select, { SelectProps } from './select'
import Option from './option'
config.disabled = true

jest.mock('../Icon/icon', () => {
  return (props: any) => {
    return <span onClick={props.onClick}>{props.icon}</span>
  }
})

const testProps: SelectProps = {
  defaultValue: '',
  placeholder: 'test',
  onChange: jest.fn(),
  onVisibleChange: jest.fn(),
}

const multipleProps: SelectProps = {
  ...testProps,
  multiple: true,
}
describe('test Select component', () => {
  it('should render the correct Select component', () => {
    const { getByPlaceholderText } = render(
      <Select
        {...testProps}
      >
        <Option value="id1" label="nihao"/>
        <Option value="id2" label="nihao2"/>
        <Option value="id3" disabled label="disabled"/>
      </Select>
    )
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const inputEle = getByPlaceholderText('test') as HTMLInputElement
    expect(inputEle).toBeInTheDocument()
    // click the input
    fireEvent.click(inputEle)
    const firstItem = screen.getByText('nihao')
    const disabledItem = screen.getByText('disabled')
    expect(firstItem).toBeInTheDocument()
    expect(testProps.onVisibleChange).toHaveBeenCalledWith(true)
    // click disabled item should not working
    fireEvent.click(disabledItem)
    expect(disabledItem).toBeInTheDocument()
    // click the dropdown
    fireEvent.click(firstItem)
    expect(firstItem).not.toBeInTheDocument()

    // check  the events
    expect(testProps.onVisibleChange).toHaveBeenCalledWith(false)
    expect(testProps.onChange).toHaveBeenCalledWith('id1', ['id1'])
    expect(inputEle.value).toEqual('id1')
    // test focus
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.activeElement).toEqual(inputEle)
  })
  it('Select in multiple mode should works fine', () => {
    const { getByPlaceholderText, getByText, container } = render(
      <Select
        {...multipleProps}
      >
        <Option value="id1" label="first"/>
        <Option value="id2" label="second"/>
        <Option value="id3" label="third"/>
      </Select>
    )
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const inputEle = getByPlaceholderText('test') as HTMLInputElement
    fireEvent.click(inputEle)
    const firstItem = screen.getByText('first')
    const secondItem = screen.getByText('second')

    fireEvent.click(firstItem)
    expect(firstItem).toBeInTheDocument()
    // add selected classname 
    expect(firstItem).toHaveClass('is-selected')
    // add check icon
    expect(screen.getByText('check')).toBeInTheDocument()
    // fire events
    expect(multipleProps.onChange).toHaveBeenCalledWith('id1', ['id1'])
    // add tags
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.querySelectorAll('.funny-tag').length).toEqual(1)
    //remove placeholder
    expect(inputEle.placeholder).toEqual('')
    // click 2nd item
    fireEvent.click(secondItem)
    expect(multipleProps.onChange).toHaveBeenLastCalledWith('id2', ['id1', 'id2'])
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.querySelectorAll('.funny-tag').length).toEqual(2)
    //reclick 2nd item
    fireEvent.click(secondItem)
    // remove acitve class
    expect(secondItem).not.toHaveClass('is-selected')
    // remove tags
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.querySelectorAll('.funny-tag').length).toEqual(1)
    expect(multipleProps.onChange).toHaveBeenLastCalledWith('id2', ['id1'])
    // click tag close
    fireEvent.click(screen.getByText('times'))
    expect(multipleProps.onChange).toHaveBeenLastCalledWith('id1', [])
    //remove all tags
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelectorAll('.funny-tag').length).toEqual(0)
    //refill placeholder text
    expect(inputEle.placeholder).toEqual('test')
  })
})

