import React from 'react'
import { StoryObj, Meta } from '@storybook/react'


import Alert, { AlertProps } from './alert'

export default { 
  title: 'Alert 组件',
  id: 'Alert',
  component: Alert,
  tags: ['autodocs'],
} as Meta<typeof Alert>

export const ADefaultAlert:StoryObj<typeof Alert> = (args:AlertProps) => <Alert {...args} />
ADefaultAlert.args = {
  title: 'this is alert!'
}
ADefaultAlert.storyName = '基本样式'
export const CDescAlert:StoryObj<typeof Alert> = (args:AlertProps) => <Alert {...args} />
CDescAlert.args = {
  title: '提示标题欧亲',
  description: 'this is a long description'
}
CDescAlert.storyName = '带描述的 Alert'
export const BStylesAlert = () => {
  return (
    <>
      <Alert title="this is Success" type="success"></Alert>
      <Alert title="this is Danger!" type="danger"></Alert>
      <Alert title="this is Warning!" type="warning" closable={false}></Alert>
    </>
  )
}
BStylesAlert.storyName = '不同样式的 Alert'