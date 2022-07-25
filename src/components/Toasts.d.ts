import { CTOptions,Theme,Icons } from '../../index.d';

export type CToastItem = {
  id: number;
  text: string;
  type: string;
  hideAfter: number;
  onClick: React.MouseEventHandler;
  onHide: () => void;
};

export type CToastContainerProps = Partial<{
  toast: {
    position?: string;
  };
  hiddenID: number;
  theme: Theme;
  icons: Icons
}>;

export type CToastProps = CTOptions & {
    id: number;
    type: string;
    text: string | React.ReactNode;
    show: boolean;
    onHide: (number, string) => void | undefined;
    onClick: React.EventHandler<React.MouseEvent> | undefined;
    hideAfter: number;
  };