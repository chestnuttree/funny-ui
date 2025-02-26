import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'link'

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// Partial<T>：是 TypeScript 的工具类型，将 T 中的所有属性变为可选（即每个属性都可以不传）
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * ### 引用方法
 * 
 * ```javascript
 * import { Button } from 'funny-ui'
 * ```
 */
export const Button: FC<ButtonProps> = (props) => {
  const { 
    btnType = 'default',
    className,
    disabled = false,
    size,
    children,
    href,
    ...restProps
  } = props
  // btn, btn-lg, btn-primary
  // A simple JavaScript utility for conditionally joining classNames together.
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href ) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        <span className="bubbles"></span>
        {children}
      </button>
    )
  }
}

export default Button;