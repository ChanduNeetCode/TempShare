import {
    enviornment
  } from '../../EnviornmentVariable/IMEnviornmentVariable';

export interface IMPersistentProps {
  isfromNative?:boolean

  env?: enviornment.DEV | string,   
}