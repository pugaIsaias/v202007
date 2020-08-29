import React from 'react';
import { Dimensions, TouchableOpacityProps } from 'react-native';
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
	FlexProps,
	height,
	JustifyContentProps,
	space,
	SpaceProps,
	typography,
	width,
} from 'styled-system';

export const ViewLayout = compose(color, space, display, width, height, border, flexbox, typography);

type ViewProps =
	| TouchableOpacityProps
	| FlexProps
	| JustifyContentProps
	| ColorStyleProps
	| BackgroundColorProps
	| SpaceProps
	| BorderProps
	| AlignItemsProps;

const ViewBase = styled.View<ViewProps>`
	${ViewLayout}
`;

const width_windows = Dimensions.get('window').width;
const height_windows = Dimensions.get('window').height;

ViewBase.defaultProps = {};

export const View: React.FC<ViewProps & { container?: boolean }> = ({ children, container, ...props }) => {
	return (
		<ViewBase {...props} px={container ? 14 : 0}>
			{children}
		</ViewBase>
	);
};

export const SecundaryView: React.FC<ViewProps & { container?: boolean }> = ({ children, container, ...props }) => {
	return (
		<ViewBase {...props} px={container ? 14 : 0}>
			{children}
		</ViewBase>
	);
};

export const FooterView: React.FC<ViewProps & { container?: boolean }> = ({ children, container, ...props }) => {
	return (
		<ViewBase {...props} flex={1} justifyContent={'flex-end'} marginBottom={36}>
			{children}
		</ViewBase>
	);
};
