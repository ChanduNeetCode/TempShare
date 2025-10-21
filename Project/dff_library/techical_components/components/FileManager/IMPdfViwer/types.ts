import { ViewStyle } from 'react-native';

export interface IMPDFViewerProps {
    filePath:string;

    pdfStyle?:ViewStyle;
    
    onErrorCallBack?: (error: object) => void;
    onPageChangedCallBack?: (page?: number, numberOfPages?: number) => void;

}