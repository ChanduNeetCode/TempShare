export interface DropdownModalProps {
  statusBarTranslucent?: boolean;
  visible: boolean;

  children: JSX.Element;

  onRequestClose: () => void;
}
