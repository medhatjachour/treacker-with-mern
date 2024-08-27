// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components'

import PropTypes from "prop-types";
function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;


Button.propTypes = {
    name: PropTypes.any,
    onClick: PropTypes.any,
    icon: PropTypes.any,
    bg: PropTypes.any,
    bPad: PropTypes.any,
    color: PropTypes.any,
    bRad: PropTypes.any,
  };
export default Button