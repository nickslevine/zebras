declare namespace z {
  // Data types

  type df = object[]

  // IO

  export function readCSV(filepath: string): df
  export function toCSV(df: df, filepath: string): void
  export function print(df: df): string
  export function printHead(n: number, df: df): string
  export function printTail(n: number, df: df): string

  // Manipulation
  export function head(n: number, df: df): df
  export function tail(n: number, df: df): df
  export function filter(func: Function, df: df): df
  export function sort(func: Function, df: df): df
  export function sortByCol(col: string, direction: string, df: df): df
  export function parseNums(cols: string[], df: df): df
  export function parseDates(cols: string[], df: df): df
  export function pickCols(cols: string[], df: df): df
  export function dropCol(col: string, df: df): df
  export function getCol(col: string, df: df): df
  export function slice(start: number, end: number, df: df): df
  export function concat(df1: df, df2: df): df
  export function addCol(col: string, arr: any[], df: df): df
  export function deriveCol(func: Function, df: df): any[]
  export function merge(
    dfLeft: df,
    dfRight: df,
    leftOn: string,
    rightOn: string,
    leftSuffix: string,
    rightSuffix: string
  ): df

  // Analysis
  export function mean(arr: number[]): number
  export function median(arr: number[]): number
  export function std(arr: number[]): number
  export function skew(arr: number[]): number
  export function kurt(arr: number[]): number
  export function pctChange(arr: number[]): number[]
  export function corr(arr1: number[], arr2: number[]): number
  export function pipe(funcs: any[], df: df): any
  export function groupBy(func: Function, df: df): object
  export function unique(arr: number[]): number[]
  export function sum(arr: number[]): number
  export function prod(arr: number[]): number
  export function min(arr: number[]): number
  export function max(arr: number[]): number
  export function getRange(arr: number[]): number[]
  export function countUnique(arr: number[]): number
  export function valueCounts(arr: number[]): object
  export function diff(arr: number[]): number[]
  export function rolling(func: Function, n: number, arr: number[]): number[]
  export function cumulative(func: Function, arr: number[]): number[]
  export function describe(arr: number[]): df
  export function gbSum(col: string, groupByObj: object): df
  export function gbMean(col: string, groupByObj: object): df
  export function gbStd(col: string, groupByObj: object): df
  export function gbCount(col: string, groupByObj: object): df
  export function gbMin(col: string, groupByObj: object): df
  export function gbMax(col: string, groupByObj: object): df
  export function gbDescribe(col: string, groupByObj: object): df
}
