import React from 'react';

import Pdf from 'react-native-pdf'
import { IMPDFViewerProps } from "./types";
import { Dimensions, StyleSheet } from 'react-native';


export const IMPdfViewer = ({
    filePath,

    pdfStyle,

    onErrorCallBack,
    onPageChangedCallBack,
}: IMPDFViewerProps) => {

    return (
        <Pdf
            source={{ uri: filePath }}
            onPageChanged={(page, numberOfPages) => {
                onPageChangedCallBack && onPageChangedCallBack(page, numberOfPages)    
            }}
            onError={(error) => {
                onErrorCallBack && onErrorCallBack(error)
            }}
            style={[styles.pdf,pdfStyle]}
        />
    )
}


const styles = StyleSheet.create({
    pdf: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})