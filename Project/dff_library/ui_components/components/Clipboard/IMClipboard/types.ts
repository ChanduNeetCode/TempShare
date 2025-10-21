export interface IMClipboardProps {
  copiedContent?: any;

  isSelect?: boolean;

  copyFunc?: (prop: any) => void;

  selectImage?: JSX.Element;

  unselectImage?: JSX.Element;
}
