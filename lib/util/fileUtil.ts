export function DecodeFileName(fileName: string): string {
  if(fileName.indexOf("=?utf-8?B?") > -1) {
    fileName = fileName.replace("=?utf-8?B?", "");
    fileName = fileName.replace("?=", "");
    fileName = Buffer.from(fileName, "base64").toString();
  }
  return fileName;
}