import { ReactNode } from "react";

export enum BUTTON_TYPE_CLASS {
    'PRIMARY' = 'PRIMARY',
    'SECONDARY' = 'SECONDARY'
  }
  
  export enum BUTTON_TYPE_POS_CLASS {
    'RIGHT' = 'right',
    'LEFT' = 'left'
  }
  
  export type ButtonType = {
    type?: BUTTON_TYPE_CLASS;
    className?: string;
    disable?: boolean;
    position?: BUTTON_TYPE_POS_CLASS;
    isLoading?: boolean;
    children?: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    id?: string;
  };