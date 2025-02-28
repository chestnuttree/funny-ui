import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { Input, InputProps } from './input'
export default {
  title: 'Input',
  id: 'Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Input>

export const ADefault:StoryObj<typeof Input> = (args:InputProps) => <Input {...args} />
ADefault.args = {
  placeholder: '漂亮的 Input'
}
ADefault.storyName = '默认的 Input'
export const BDisabled :StoryObj<typeof Input> = (args:InputProps) => <Input {...args} />
BDisabled.args = {
  placeholder: 'disabled input',
  disabled: true
}
BDisabled.storyName = '被禁用的 Input'

export const CIcon: StoryObj<typeof Input> = (args:InputProps) => <Input {...args} />
CIcon.args = {
  placeholder: 'input with icon',
  icon: 'search'
}
CIcon.storyName = '带图标的 Input'

export const DSizeInput = () => (
  <>
    <Input
      defaultValue="large size"
      size="lg"
    />
    <Input
      placeholder="small size"
      size="sm"
    />
  </>
)
DSizeInput.storyName = '大小不同的 Input'
export const EPandInput = () => (
  <>
    <Input
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      defaultValue="google"
      append=".com"
    />
    
  </>
)

EPandInput.storyName = '带前后缀的 Input'

