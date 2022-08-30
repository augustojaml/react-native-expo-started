import { ReactNode } from "react";

export interface Props {
  title?: string;
  color?: string;
  background?: string;
  statusBarBackground?: string;
  minHeight?: number;
  iconLeft?: string;
  iconRight?: string;

  onPressLeft?: any;
  onPressRight?: any;

  children?: ReactNode;
}
