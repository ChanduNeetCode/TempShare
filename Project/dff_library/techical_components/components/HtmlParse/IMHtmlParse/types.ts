export interface HtmlParseProps {
    method?: string,
    url: string,
    type: string
    timeout?: number
    divclassName: string []
  }
  
  export enum HtmlPassTypes {
    DIVCLASS = "DIVCLASS",
    HEADER = "HEADER",
    META="META"
  }