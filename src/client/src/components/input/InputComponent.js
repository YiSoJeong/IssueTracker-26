import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SharedStyle from '../SharedStyle';

const InputTag = styled.input`
  font-size: ${(props) => props.fontSize};
  border: 1px solid ${(props) => props.theme.Color.border};
  border-radius: 5px;
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  padding: 0 0.5rem;
  ${(props) =>
    props.outlineColor
      ? SharedStyle.warningOutlineStyle
      : SharedStyle.inputOutlineStyle}
`;

function Input(props) {
  const {
    type,
    placeholder,
    value,
    name,
    onChange,
    width = '100%',
    height = '42px',
    fontSize = '18px',
    outlineColor,
  } = props;

  return (
    <InputTag
      width={width}
      height={height}
      fontSize={fontSize}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      outlineColor={outlineColor}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  name: PropTypes.string,
  outlineColor: PropTypes.bool,
};

export default Input;
