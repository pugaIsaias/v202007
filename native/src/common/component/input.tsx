import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import {
	AlignItemsProps,
	BackgroundColorProps,
	border,
	BorderProps,
	color,
	ColorStyleProps,
	compose,
	display,
	flexbox,
	height,
	space,
	SpaceProps,
	typography,
	width,
} from 'styled-system';

export const InputLayout = compose(color, space, display, width, height, border, flexbox, typography);

type InputTextProps =
	| TouchableOpacityProps
	| ColorStyleProps
	| BackgroundColorProps
	| SpaceProps
	| BorderProps
	| AlignItemsProps;

const InputBase = styled.TextInput<InputTextProps>`
	${InputLayout}
`;

InputBase.defaultProps = {
	paddingTop: 21,
	paddingBottom: 21,
};

export const PrimaryInput: React.FC<InputTextProps> = ({ children, ...props }) => (
	<InputBase
		{...props}
		autoFocus
		paddingTop={2}
		paddingBottom={2}
		borderColor={'#000000'}
		borderWidth={1}
		borderRadius={5}
		textAlign={'center'}
	></InputBase>
);
