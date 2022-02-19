import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { children, is_margin, is_padding, is_width, is_background, is_color, is_border, is_radius, _onClick } = props;

  const styles = {
    is_margin: is_margin,
    is_padding: is_padding,
    is_width: is_width,
    is_color: is_color,
    is_border: is_border,
    is_radius: is_radius,
    is_background: is_background,
  }

  return (
    <>
      <ElButton {...styles} onClick={_onClick}>{children}</ElButton>
    </>
  );
};

Button.defaultProps = {
  childred: null,
  _onClick: () => {},
  is_margin: false,
  is_padding: false,
  is_width: false,
  is_height: false,
  is_background: false,
  is_color: false,
  is_border: false,
  is_radius: false,
}

const ElButton = styled.button`
  ${(props) => (props.is_margin? `margin: ${props.is_margin};` : 'margin: 0;')};
  ${(props) => (props.is_padding? `padding: ${props.is_padding};` : 'padding: 0;')};
  ${(props) => (props.is_width? `width: ${props.is_width};` : 'width: 100%;')};
  ${(props) => (props.is_height? `height: ${props.is_height};` : 'height: 100%;')};
  ${(props) => (props.is_background? `background-color: ${props.is_background};` : '')};
  ${(props) => (props.is_color? `color: ${props.is_color};` : '')};
  ${(props) => (props.is_border? `border: ${props.is_border};` : '')};
  ${(props) => (props.is_radius? `border-radius: ${props.is_radius};` : '')};
`;

export default Button;