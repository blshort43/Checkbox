import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxContainer = styled.div``;

const Icon = styled.svg`
  vertical-align: baseline;
  fill: none;
  stroke: white;
  stroke-width: 3px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: 2px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 0px;
`;

const StyledCheckbox = styled.div`
  cursor: pointer;
  vertical-align: center;
  width: 16px;
  height: 16px;
  background: ${props => {
    if (props.disabled) {
      return '#a3a09a' || '#007eff';
    }
    return props.background || '#007eff';
  }};
  border-radius: 3px;
  transition: all 150ms;
  ${Icon} {
    fill: none;
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px lightgray;
  }
  pointer-events: ${props => (props.disabled ? 'none' : 'pointer')};
`;

const Checkbox = ({ checked, disabled, onClick, ...props }) => {
  const disableClick = e => {
    if (disabled === true) {
      e.preventDefault();
    }
  };
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox
        {...props}
        checked={checked}
        onClick={disabled ? disableClick : onClick}
        disabled={disabled}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};
Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Checkbox;
