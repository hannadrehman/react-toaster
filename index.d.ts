import React, { ReactNode, MouseEventHandler } from 'react';
export interface IconProps {
	[key: string]: string|number;
  }
export interface Theme {
  success: '#6EC05F';
  info: '#1271EC';
  warn: '#FED953';
  error: '#D60A2E';
  loading: '#0088ff';
}

export interface Icons {
  success: React.FC<IconProps>;
  info: React.FC<IconProps>;
  warn: React.FC<IconProps>;
  error: React.FC<IconProps>;
  loading: React.FC<IconProps>;
}

export type CTOptions = Partial<{
  hideAfter: number;
  position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  heading: string;
  role: string;
  toastContainerID: string;
  renderIcon: Function;
  bar: Partial<{
    size: string;
    style: 'solid' | 'dashed' | 'dotted';
    color: string;
  }>;
  onClick: MouseEventHandler;
  onHide: Function;
  theme?: InterfaceTheme;
  icons?: Icons;
}>;

export type CTMethodOptions = CTOptions & { type: string };

export type HideToastFunction = () => void;

export type Message = string | ReactNode;

export type CTReturn = (Promise<void> & { hide?: HideToastFunction }) | void;

export type CTMethod = (message: Message, options?: CTOptions) => CTReturn;

export type CTMainMethod = (
  message: Message,
  options?: CTMethodOptions,
) => CTReturn;

export type CToast = {
  success: CTMethod;
  warn: CTMethod;
  info: CTMethod;
  error: CTMethod;
  loading: CTMethod;
};

declare namespace cogoToast {
  const success: CTMethod;
  const info: CTMethod;
  const loading: CTMethod;
  const warn: CTMethod;
  const error: CTMethod;
}

export default cogoToast;
