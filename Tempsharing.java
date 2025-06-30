import React, { createContext, useState, ReactNode, useCallback, Dispatch, SetStateAction } from 'react';
import { STRINGS } from '../constant/strings';

interface reactivationDetailsProps {
  isEnable : boolean;
  title :string;
  subTitle : string;
  buttonTitle : string
}

interface OffersStatusNavViewHeightContextProps {
  reactivationDetails : reactivationDetailsProps;
  setReactivationDetails : (val : reactivationDetailsProps) => void;
}



export const OffersStatusNavViewHeightContext =
  createContext<OffersStatusNavViewHeightContextProps>({
    reactivationDetails :{isEnable : false, title : String(STRINGS.str_reactivationRequired), subTitle : String(STRINGS.str_reactivateMessage), buttonTitle : String(STRINGS.str_reactivate)},
    setReactivationDetails :()=>{},
  });

export const OffersStatusNavViewHeightProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [reactivationDetails, setReactivationDetails] = useState({isEnable: false, title :STRINGS.str_reactivationRequired, subTitle : STRINGS.str_reactivateMessage, buttonTitle : STRINGS.str_reactivate});
  return (
    <OffersStatusNavViewHeightContext.Provider
      value={{
        reactivationDetails,
        setReactivationDetails,
      }}>
      {children}
    </OffersStatusNavViewHeightContext.Provider>
  );
};
