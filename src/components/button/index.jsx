import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

const Button = ({
  type,
  text,
  margin,
  width,
  height,
  color,
  bgColor,
  padding,
  disabled
}) => {
  return (
    <StyledButton
      type={type}
      margin={margin}
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
      padding={padding}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  margin: "0",
  width: "100%",
  height: "100%",
  color: "#fff",
  bgColor: "#448e9d",
  padding: "0",
  disabled: false
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  padding: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
