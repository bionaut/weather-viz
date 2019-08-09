import { Theme } from 'styled-system'

export const breakpoints = ['320px', '780px', '1300px']
export const UNIT = 10

export interface CustomTheme extends Theme {
  colors: { [name: string]: any }
  space: { [name: string]: number | string | Array<string | number> }
  breakpoints: string[]
}

export const fonts = {
  family: `'Montserrat', sans-serif`,
}

export const colors = {
  border: '#75777d',
  gray: ['#202124', '#3E3F42', '#9CABB8', '#FBFBFD', '#EBEBEB', '#fff'],
  darkAlpha: 'rgba(0, 0, 0, 0.4)',
  clearAlpha: 'rgba(255, 255, 255, 0.2)',
  error: '#bc3e3a',
  linkColor: '#3d91cd',
  primary: ['#4480FA', '#67a0cd', '#7ea8cd', '#6f889a'],
}

export const space = {
  padding: [UNIT, UNIT * 1.5, UNIT * 2],
  elementSize: UNIT * 4.5,
  headerHeight: UNIT * 6,
  tagSize: UNIT * 3,
  webHeaderHeight: UNIT * 7,
}

export const defaultTheme: CustomTheme = {
  breakpoints,
  colors,
  fonts,
  space,
  fontSizes: ['0.7em', '0.9em', '1em', '1.1em', '1.5em', '2em'],
}
