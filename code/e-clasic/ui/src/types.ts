export interface Email {
  body: string;
  category: string;
  from: string;
  subject: string;
}

export interface EmailData {
  [key: string]: Email[];
}