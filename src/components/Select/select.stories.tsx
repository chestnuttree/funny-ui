import React from 'react'
import { Meta } from '@storybook/react'


import Select from './index'
import { SelectProps } from './select'
export default {
  title: 'Select',
  component: Select,
  id: 'Select',
  tags: ['autodocs'],
  subcomponents: { 'Option': Select.Option },
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Select>

export const ADefaultSelect = (args:SelectProps) => (
  <Select
    {...args}
    placeholder="请选择"
  >
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
    <Select.Option value="disabled" disabled/>
    <Select.Option value="nihao5" />
  </Select>
)
ADefaultSelect.storyName = '默认的Select'
export const BMultipleSelect = (args:SelectProps) => (
  <Select
    {...args}
    placeholder="支持多选欧！"
    multiple
  >
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
    <Select.Option value="funny" />
    <Select.Option value="viking2" />
  </Select>
)
BMultipleSelect.storyName = '支持多选的 Select'
export const CDisabledSelect = (args:SelectProps) => (
  <Select
    {...args}
    placeholder="禁用啦！"
    disabled
  >
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
  </Select>  
)
CDisabledSelect.storyName = '被禁用的 Select'