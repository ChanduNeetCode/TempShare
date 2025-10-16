import { HtmlParseProps, HtmlPassTypes } from "./types";

export const IMHtmlParse = ({
  method = "GET",
  url,
  type,
  timeout = 30000,//30seconds
  divclassName
}: HtmlParseProps) => {

  return new Promise((resolve, reject) => {

    var request = new XMLHttpRequest();
    request.open(method, url);

    //Handle The request's state changes
    request.onreadystatechange = () => {
      
      if (request.readyState == 4 && (request.status >= 200 && request.status < 300)) {

        let htmlText = request.responseText

        if (type === HtmlPassTypes.HEADER) {
          const headerResult = parseHTMLHeader(htmlText, divclassName);
          resolve(headerResult);
        } else {
          const result = parseHTML(htmlText, type, divclassName);
          resolve(result);
        }
      }
    };

    //Handle Network Errors
    request.onerror = () => {
      reject('Network Error')
    }

    request.timeout = timeout

    // Handle Timeout Errors
    request.ontimeout = () => {
      reject("Request Timeout")
    }

    //Send the Request
    request.send();

  })
}


const parseHTML = (html: string, type: string, divclass: any) => {

  const propertyName = divclass.join('|')
  //Initialize an empty result objects
  const result: Record<string, string> = {};

  if (typeof html !== "string" || html.trim() === '') {
    throw new Error("Invalid Html input.Please provide a valid Html string.")
  }
  try {
    // Regex pattern
    // const pattern = new RegExp(`<meta property="og:(title|description|url)" content="(.*?)"`, "g")

    let pattern: any;
    if (type === HtmlPassTypes.DIVCLASS) {
      pattern = new RegExp(`<div[^>]*class=["'](${propertyName})["'][^>]*>(.*?)</div>`, "g")
    } else if (type === HtmlPassTypes.META) {
      pattern = new RegExp(`<meta property="og:(${propertyName})" content="(.*?)"`, "g")
    }

    // Use the pattern to extract matches
    let match;

    while ((match = pattern.exec(html)) !== null) {
      const property = match[1] //title,url,date
      const content = match[2] // The content value
      result[property] = content;
    }

  } catch (error) {
    throw error;
  }

  const customArray = Object.entries(result).map(([tag, content]) => ({
    tag,
    content
  }));

  return customArray;
}

const parseHTMLHeader = (html: string, divclass: any) => {

  //Initialize an empty result objects
  let result;

  if (typeof html !== "string" || html.trim() === '') {
    throw new Error("Invalid Html input.Please provide a valid Html string.")
  }
  try {
    // Regex pattern
    // const match = html.match(/<title>(.*?)<\/title>/i)
    // result = match ? match[1].trim() : null;

    const regex = /<head[^>]*>([\s\S]*?)<\/head>/i;
    const headMatch = html.match(regex);

    if (headMatch) {

      const headContent = headMatch[1]

      const propertyName = divclass.join("|")

      // const specificTagsRegex = /<title>(.*?)<\/title>|<meta[^>]*name=["'](.*?)["'][^>]*content=["'](.*?)["'][^>]*>|<img[^>]*src=["'](.*?)["'][^>]*>|<link[^>]*href=["'](.*?)["'][^>]*>/gi;
      // const specificTagsRegex=new RegExp(`<(${propertyName})[^>]*>(.*?)<\/\\1>|<(${propertyName})\\b[^>]*?\\b(\\w+)=["'](.*?)["'][^>]*?>`,"gi");
      // const specificTagsRegex = new RegExp(`<(${propertyName})[^>]*?(?:src|href|content)?=["'](.*?)["']>|<(${propertyName})[^>]*>(.*?)<\/\\3>`, "gi");

      const specificTagsRegex = new RegExp(`<(${propertyName})\\b([^>]*)>([^<]*)|<(${propertyName})\\b([^>]*)\\/?>`, 'gi')

      const matches = []
      let match;

      while ((match = specificTagsRegex.exec(headContent)) !== null) {
        if (match[1]) {
          matches.push({
            tag: match[1],
            attributes: parseAttributes(match[2]),
            content: match[3]?.trim() || null
          })
        } else if (match[4]) {
          matches.push({
            tag: match[4],
            attributes: parseAttributes(match[5]),
            content: null
          })
        }

        result = matches;
      }
    }
  } catch (error) {
    throw error;
  }

  return result;
}

const parseAttributes = (attributesString: string) => {
  const attributes: Record<string, string> = {}
  const reg = /(\w+)\s*=\s*"([^"]*)"/g
  attributesString.replace(
    reg, (_: string, name: string, value: string) => {
      attributes[name] = value;
      return "";
    });
  return attributes;
}



