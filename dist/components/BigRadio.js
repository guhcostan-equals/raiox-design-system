import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Tokens } from '../tokens'

const BigRadioStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${props => props.size}px;
	width: ${props => props.size}px;
	position: relative;
	cursor: pointer;
	
	& > span {
		position: absolute;
		border: 4px solid ${Tokens.colors.neutral.dark["02"]};
		width: inherit;
		height: inherit;
		${props => props.active && `border-color: ${Tokens.colors.brand.primary.darkest}`};
		border-radius: ${Tokens.border.radius.circular};
		transition: 0.15s;
	}
	
	&::before {
		content: '';
		position: absolute;
		background: ${Tokens.colors.brand.primary.darkest};
		border-radius: ${Tokens.border.radius.circular};
		transition: 0.15s;
		height: 0;
		width: 0;
		${props => props.active && `
			height: ${props.size * 0.70}px;
			width: ${props.size * 0.70}px;
		`};
	}
	
	pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && Tokens.opacity.level.medium};
`

const BigRadio = props => (
	<BigRadioStyle disabled={props.disabled} active={props.active} onClick={()=> props.setActive()} size={props.size || '21'}>
		<span />
	</BigRadioStyle>
)

export default BigRadio

BigRadio.propTypes = {
	active: PropTypes.bool,
	setActive: PropTypes.func,
	disabled: PropTypes.bool,
	size: PropTypes.string,
}