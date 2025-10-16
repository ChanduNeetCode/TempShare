import {
  IMAlphabeticalListProps,
  ISectionData,
} from '../IMAlphabeticalList/types';

export interface ListLetterIndexProps {
  selectedLetter?: string;

  sectionData: ISectionData[];

  indexContainerStyle?: IMAlphabeticalListProps['indexContainerStyle'];
  indexLetterContainerStyle?: IMAlphabeticalListProps['indexLetterContainerStyle'];
  indexLetterStyle?: IMAlphabeticalListProps['indexLetterStyle'];
  letterListContainerStyle?: IMAlphabeticalListProps['letterListContainerStyle'];
  scrollingIndexLetterContainerStyle?: IMAlphabeticalListProps['scrollingIndexLetterContainerStyle'];
  selectedIndexLetterStyle?: IMAlphabeticalListProps['selectedIndexLetterStyle'];
  renderCustomIndexLetter?: IMAlphabeticalListProps['renderCustomIndexLetter'];

  onPressLetter: (sectionIndex: number) => void;
  paginationTimeout?:number
}
