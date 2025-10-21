import { TextStyle, ViewStyle } from "react-native";

export interface IMVerticalPTWithCounterProps {

	data:List[];

	childProp?: JSX.Element;

	textStyleProp?:TextStyle;

	itemContainerStyle?:ViewStyle;
	itemSeparatorStyle?:ViewStyle;
	mainContainerStyle?:ViewStyle;
	renderContainerStyle?:ViewStyle;
}

export interface List {
	item?: JSX.Element | string;
	key?: number;
	status: 'success' | 'inProgress' | 'unChecked';
}