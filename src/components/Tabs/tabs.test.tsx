import { render, fireEvent, RenderResult, screen } from '@testing-library/react'

import Tabs, { TabsProps } from './tabs'
import TabItem from './tabItem'

const testProps: TabsProps = {
  defaultIndex: 1,
  onSelect: jest.fn()
}
let wrapper: RenderResult
describe('test Tabs Component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    wrapper = render(
      <Tabs {...testProps}>
        <TabItem label="tab1">content1</TabItem>
        <TabItem label="tab2">content2</TabItem>
        <TabItem label="disabled" disabled>content3</TabItem>
      </Tabs>
    )
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render the correct default Tabs', () => {
    // eslint-disable-next-line testing-library/no-node-access
    expect(wrapper.container.querySelector('.funny-tabs-nav')).toHaveClass('nav-line')
    const activeElement = screen.queryByText('tab2')
    expect(activeElement).toBeInTheDocument()
    expect(activeElement).toHaveClass('is-active')
    expect(screen.getByText('tab1')).not.toHaveClass('is-active')
    expect(screen.getByText('content2')).toBeInTheDocument()
    expect(screen.queryByText('content1')).not.toBeInTheDocument()
  })
  it('click tabItem should switch to content', () => {
    const clickedElement = screen.getByText('tab1')
    fireEvent.click(clickedElement)
    expect(clickedElement).toHaveClass('is-active')
    expect(screen.queryByText('tab2')).not.toHaveClass('is-active')
    expect(screen.getByText('content1')).toBeInTheDocument()
    expect(screen.queryByText('content2')).not.toBeInTheDocument()
    expect(testProps.onSelect).toHaveBeenCalledWith(0)
  })
  it('click disabled tabItem should not works', () => {
    const disableElement = screen.getByText('disabled')
    expect(disableElement).toHaveClass('disabled')
    fireEvent.click(disableElement)
    expect(disableElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalled()
  })
})