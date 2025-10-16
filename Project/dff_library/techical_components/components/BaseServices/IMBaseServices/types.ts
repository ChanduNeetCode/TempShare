import { enviornment } from '../../EnviornmentVariable/IMEnviornmentVariable';
export interface BaseApiCallProps {
  data?: any;

  isCacheRequired?:boolean;
  isCDNImage?:boolean;
  isCDNImageorMessage?:boolean;
  isEncrypt?: boolean;
  isMock?: boolean;
  isMultiPart?: boolean;
  isFalconRequest?:boolean;
  isAEMHeader?:boolean;

  headers?: any;

  env?: enviornment | string;
  method:
    | HttpMethods.GET
    | HttpMethods.POST
    | HttpMethods.PUT
    | HttpMethods.DELETE
    | HttpMethods.PATCH;

  mockFileName?: string;
  url: string;
  responseType?: ResponseType;
}

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'
  | 'formdata';
