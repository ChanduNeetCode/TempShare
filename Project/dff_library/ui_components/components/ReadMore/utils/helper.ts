import React from 'react';
import { Line } from '../IMReadMore/types';

const getStringChild = (child: any) => {
  return {
    type: 'string',
    content: child,
    child,
  };
};

const getTextChild = (child: any) => {
  return {
    type: child?.type?.displayName,
    content: child.props.children,
    child: React.cloneElement(child, child.props, child.props.children),
  };
};

export const getTextByChildren = (children: any, TextComponent?: any): any => {
  if (typeof children === 'string') {
    return [getStringChild(children)];
  }

  if (typeof children === 'object' && children.props?.children) {
    return getTextByChildren(React.Children.toArray(children.props.children));
  }

  if (Array.isArray(children)) {
    return children
      .filter((_child: any) => {
        return (
          typeof _child === 'string' ||
          _child?.type?.displayName === TextComponent?.displayName
        );
      })
      .map((_child: any) => {
        if (typeof _child === 'string') {
          return getStringChild(_child);
        }
        return getTextChild(_child);
      });
  }

  return null;
};

export const linesToCharacters = (lines: Line[]): string => {
  return lines.map((_line: Line) => _line?.text || '').join('');
};
export const insertAt = (str: string, sub: string, pos: number): string =>
  `${str.slice(0, pos)}${sub}${str.slice(pos)}`;
