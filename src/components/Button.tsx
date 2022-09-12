import styled from "styled-components/macro";

const StyledPrimaryButton = styled.button`
  color: #fff;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  background-color: #569099;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: light;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

const StyledTertiaryButton = styled.button`
  color: #1a1a1a;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
  background-color: transparent;

  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export { StyledPrimaryButton, StyledTertiaryButton };
