import { ReactNode } from "react";

export interface Props {
  title?: string;
  color?: string;
  background?: string;
  statusBarBackground?: string;
  minHeight?: number;
  iconLeft?: string;
  iconRight?: string;
  iconRightSize?: number;
  iconLeftSize?: number;

  onPressLeft?: any;
  onPressRight?: any;

  children?: ReactNode;
}
