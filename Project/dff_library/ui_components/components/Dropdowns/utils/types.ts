export interface flatListObjectImage {
  image?: JSX.Element;
  text?: string;
}

export type flatListObject = {
  key: string|number;
  value?: string | flatListObjectImage;
};
