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
  pointer-events: '${props => (props.disabled ? 'none' : 'pointer')}';
`;

const StyledCheckbox = styled.div`
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
  pointer-events: '${props => (props.disabled ? 'none' : 'pointer')}';
  ${Icon} {
    fill: none;
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px lightgray;
  }
`;

const Checkbox = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} {...props}>
      <Icon cursor="pointer" viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
};

export default Checkbox;
