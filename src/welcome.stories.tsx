import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { styled } from '@storybook/theming';

const Content = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;

  h1 {
    margin-bottom: 1.5rem;
    color: #2c3e50;
    border-bottom: 2px solid #eee;
    padding-bottom: 0.5rem;
  }

  section {
    margin: 2rem 0;
    padding: 1.5rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  }
`;

const CodeBlock = styled.pre`
  background: #f8f8f8;
  padding: 15px;
  border-radius: 6px;
  margin: 1rem 0;
  overflow-x: auto;
  border: 1px solid #eee;

  code {
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    color: #e83e8c;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;

  div {
    padding: 1.5rem;
    background: #f9f9f9;
    border-radius: 8px;
    border-left: 4px solid #3498db;
    
    h3 {
      margin: 0 0 0.5rem;
      color: #2c3e50;
    }
    
    p {
      margin: 0;
      color: #7f8c8d;
    }
  }
`;

const meta = {
  title: 'Welcome',
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
    docs: {
      page: null // 禁用自动生成的文档页
    }
  },
//   tags: ['autodocs'] // Storybook 7.0+ 的新标签系统
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const WelcomePage: Story = {
  render: () => (
    <Content>
      <h1>欢迎使用 Funny UI</h1>
      
      <section>
        <h2>📦 安装</h2>
        <CodeBlock>
          <code>npm install @yuntang/funny-ui --save</code>
        </CodeBlock>
        <small>或使用 yarn</small>
        <CodeBlock>
          <code>yarn add @yuntang/funny-ui</code>
        </CodeBlock>
      </section>

      <section>
        <h2>🚀 快速开始</h2>
        <CodeBlock>
          <code>{`import { Button } from '@yuntang/funny-ui';

function App() {
  return (
    <Button btnType="primary">
      立即体验
    </Button>
  );
}`}</code>
        </CodeBlock>
      </section>

      <section>
        <h2>✨ 核心特性</h2>
        <FeatureGrid>
          <div>
            <h3>海洋/森林主题定制</h3>
            <p>支持 CSS 变量和主题配置文件</p>
          </div>
          <div>
            <h3>TypeScript 支持</h3>
            <p>完整的类型定义和智能提示</p>
          </div>
          <div>
            <h3>响应式设计</h3>
            <p>完美适配移动端和桌面端</p>
          </div>
          {/* <div>
            <h3>无障碍访问</h3>
            <p>符合 WAI-ARIA 标准</p>
          </div> */}
        </FeatureGrid>
      </section>

      {/* <section>
        <h2>📚 文档资源</h2>
        <ul>
          <li><a href="/docs">组件文档</a></li>
          <li><a href="/theme">主题定制指南</a></li>
          <li><a href="https://github.com/your-repo">GitHub 仓库</a></li>
          <li><a href="/changelog">更新日志</a></li>
        </ul>
      </section> */}
    </Content>
  )
};