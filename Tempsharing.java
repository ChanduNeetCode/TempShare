import React, { createContext, useState, ReactNode, useCallback } from 'react';
import { STRINGS } from '../constant/strings';

interface reactivationDetailsProps {
  isEnable : boolean;
  title :string;
  subTitle : string;
  buttonTitle : string
}

interface OffersStatusNavViewHeightContextProps {
  viewHeight: number;
  setViewHeight: (height: number) => void;
  showSegmentControl: boolean;
  setShowSegmentControl: (loader: boolean) => void;

  reactivationDetails : reactivationDetailsProps;
  setReactivationDetails : (val : {
  isEnable : boolean;
  title :string;
  subTitle : string;
  buttonTitle : string;}) => void;


  showReactivationErrorPopUp : boolean;
  setShowReactivationErrorPopUp : (isEnable: boolean) => void;
  reactivationTitle : string;
  setReactivationTitle : (title: string) => void;
  reactivationSubTitle : string;
  setReactivationSubTitle : (title: string) => void;
  reactivationButtonTitle : string;
  setReactivationButtonTitle : (title: string) => void;
}



export const OffersStatusNavViewHeightContext =
  createContext<OffersStatusNavViewHeightContextProps>({
    viewHeight: 0,
    setViewHeight: () => {},
    showSegmentControl:true,
    setShowSegmentControl: () => {},

    reactivationDetails :{isEnable : false, title :STRINGS.str_reactivationRequired, subTitle : STRINGS.str_reactivateMessage, buttonTitle : STRINGS.str_reactivate},
    setReactivationDetails :()=>{},

    showReactivationErrorPopUp:false,
    setShowReactivationErrorPopUp :() =>{},
    reactivationTitle:STRINGS.str_reactivationRequired,
    setReactivationTitle :() =>{},
    reactivationSubTitle:STRINGS.str_reactivateMessage,
    setReactivationSubTitle :() =>{},
    reactivationButtonTitle:STRINGS.str_reactivate,
    setReactivationButtonTitle :() =>{},
  });

export const OffersStatusNavViewHeightProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [viewHeight, setViewHeight] = useState(0);
  const [showSegmentControl, setShowSegmentControl] = useState<any>(true);
  const [showReactivationErrorPopUp, setShowReactivationErrorPopUp] = useState<boolean>(false);
  const [reactivationTitle, setReactivationTitle] = useState<string>('');
  const [reactivationSubTitle, setReactivationSubTitle] = useState<string>('');
  const [reactivationButtonTitle, setReactivationButtonTitle] = useState<string>('');

  const [reactivationDetails, setReactivationDetails] = useState({isEnable: false, title :STRINGS.str_reactivationRequired, subTitle : STRINGS.str_reactivateMessage, buttonTitle : STRINGS.str_reactivate});
  return (
    <OffersStatusNavViewHeightContext.Provider
      value={{
        viewHeight,
        setViewHeight,
        showSegmentControl,
        setShowSegmentControl,

        reactivationDetails,
        setReactivationDetails,

        showReactivationErrorPopUp,
        setShowReactivationErrorPopUp,
        reactivationTitle,
        reactivationSubTitle,
        reactivationButtonTitle,
        setReactivationTitle,
        setReactivationSubTitle,
        setReactivationButtonTitle
      }}>
      {children}
    </OffersStatusNavViewHeightContext.Provider>
  );
};
