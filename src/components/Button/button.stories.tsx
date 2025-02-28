import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import Button, { BaseButtonProps } from './button'

// https://github.com/storybookjs/storybook/issues/15574
export default {
  title: 'Button',
  id: 'Button',
  component: Button,
  tags: ['autodocs'],
} as Meta<typeof Button>
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story =(args:BaseButtonProps)=>( <Button {...args}> Default Button </Button>)
DefaultButton.storyName = '默认按钮样式'


export const BButtonWithSize: Story = () => (
  <>
    <div style={{ margin: '3em' }}><Button size="lg"> large button </Button></div>
    <div style={{ margin: '3em' }}> <Button size="sm"> small button </Button></div>
  </>
)
BButtonWithSize.storyName = '不同尺寸的按钮'

export const CButtonWithType: Story = () => (
  <>
    <div style={{ margin: '3em' }}><Button btnType="primary"> primary button </Button></div>
    <div style={{ margin: '3em' }}><Button btnType="default"> default button </Button></div>
    <div style={{ margin: '3em' }}> <Button btnType="link" href="https://google.com"> link button </Button></div>
    {/* <div style={{ margin: '3em' }}> <Button disabled href="https://google.com"> link button </Button></div> */}
  </>
)

CButtonWithType.storyName = '不同类型的按钮'