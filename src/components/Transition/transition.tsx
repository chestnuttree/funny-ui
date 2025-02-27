import React, { ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-bottom"
  | "zoom-in-right";

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  wrapper?: boolean;
  children?: ReactNode;
};

const Transition: React.FC<TransitionProps> = (props) => {
  const cssTransitionNodeRef = useRef(null);
  const {
    children,
    classNames,
    animation,
    wrapper, // 作用在按钮上时，按钮本身有transition，再包裹一层div
    ...restProps
  } = props;
  return (
    <CSSTransition
      nodeRef={cssTransitionNodeRef}
      classNames={classNames ? classNames : animation}
      appear = {true}
      unmountOnExit={true} //内部节点动态显示
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

export default Transition;
