import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const colorStyles = css`
  ${({ theme, color, hoverColor }) => {
    const selectedColor = color || theme.Color.button;
    const selectedHover = hoverColor || theme.Color.buttonHover;
    return css`
      background: ${selectedColor};
      &:hover {
        background: ${selectedHover};
      }
    `;
  }}
`;

const sizeStyles = css`
  ${({ width, height, fontSize }) => css`
    width: ${width};
    height: ${height};
    font-size: ${fontSize};
  `}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  ${sizeStyles}

  ${colorStyles}

  ${fullWidthStyle}
`;

function Button({
  children,
  color,
  width = '90px',
  height = '30px',
  fontSize = '0.8em',
  fullWidth,
  handler,
}) {
  return (
    <StyledButton
      color={color}
      width={width}
      height={height}
      fontSize={fontSize}
      fullWidth={fullWidth}
      onClick={handler}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  fullWidth: PropTypes.string,
  handler: PropTypes.func,
};

export default Button;