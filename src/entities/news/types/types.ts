export interface IData_SnippetNews {
  ID: number;
  TI: string;
  AB: string;
  URL: string;
  DOM: string;
  DP: string;
  LANG: string;
  REACH: number;
  KW: Array<IData_TagItem>;
  AU: Array<[]>;
  CNTR: string;
  CNTR_CODE: string;
  SENT: string;
  TRAFFIC: Array<IData_TrafficItem>;
  FAV: string;
  HIGHLIGHTS: Array<string>;
}

export interface IData_TagItem {
  value: string;
  count: number;
}

export interface IData_TrafficItem {
  value: string;
  count: number;
}
