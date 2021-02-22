import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Tokens } from '../tokens'
import { fontStyleMaker }from '../utils/FontUtil'
import Icon from "./Icon";
import BigRadio from "./BigRadio";

const CardSelectorStyle = styled.div`
	transition: 0.15s;
	background: ${Tokens.colors.neutral.light.base};
	box-shadow: 0 0 0 1px ${Tokens.colors.neutral.dark["03"]};
	${props => props.selected && `box-shadow: 0 0 0 2px ${Tokens.colors.brand.primary.darkest};`};
	border-radius: ${Tokens.border.radius.sm};
	user-select: none;
	cursor: pointer;
	
	pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && Tokens.opacity.level.medium};
`
const Title = styled.span`
	${fontStyleMaker({
		fontFamily: "head",
		fontWeight: "medium",
		fontSize:"sm" 
	})};
	color: ${Tokens.colors.neutral.dark.base};
`
const Subtitle = styled.span`
	${fontStyleMaker({
		fontFamily: "head",
		fontWeight: "regular",
		fontSize: "xs" 
	})};
	color: ${Tokens.colors.neutral.dark["01"]};
`
const TitlesContainer = styled.div`
	display: flex;
	flex-flow: column;
	flex: 1;
	padding: 0 16px;
	height: 100%;
	justify-content: space-evenly;
`

const DescriptionText = styled.div`
	background: ${Tokens.colors.neutral.light["02"]};
	padding: ${Tokens.spacing.squish.nano};
	${fontStyleMaker({
		fontFamily: "body",
		fontWeight: "regular",
		fontSize: "xs"
	})};
	line-height: 21px;
	color: ${Tokens.colors.neutral.dark["01"]};
	border-bottom-left-radius: ${Tokens.border.radius.sm};
	border-bottom-right-radius: ${Tokens.border.radius.sm};
`
const UpperContainer = styled.div`
	display: flex;
	height: 80px;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	box-sizing: border-box;
`

const CardSelector = props => (
	<CardSelectorStyle disabled={props.disabled} selected={props.selected} onClick={()=> props.setSelected()}>
			<div>
				<UpperContainer>
					<Icon path={Tokens.illustrations.establishRadial} size={'51px'}/>
					<TitlesContainer>
						<Title>Adicionar um CNPJ</Title>
						<Subtitle>Tenho um estabelecimento com CNPJ</Subtitle>
					</TitlesContainer>
					<BigRadio active={props.selected} disabled={props.disabled} size={18}/>
				</UpperContainer>
				<DescriptionText>
					Quem tem CNPJ pode adicionar todos os meios de pagamentos disponíveis no Raio-X.
				</DescriptionText>
			</div>
	</CardSelectorStyle>
)

export default CardSelector

CardSelector.propTypes = {
	selected: PropTypes.bool,
	setSelected: PropTypes.func,
	disabled: PropTypes.bool,
}
