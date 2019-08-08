import { CustomTheme } from '../../../theme'
import { ButtonProps } from './index'

export type VariationsProps = {
  primary?: boolean
  clear?: boolean
  disabled?: boolean
  noBorder?: boolean
}

export const primary = ({
  theme,
  primary,
  disabled,
  background,
}: { theme: CustomTheme } & ButtonProps) =>
  primary
    ? `   background: ${background || theme.colors.primary[0]};
          opacity: ${disabled ? 0.5 : 1};
          ${disabled ? 'outline: none;' : ''}
          color: white;
          height: ${theme.space.elementSize || 40}px;
          padding-left: ${theme.space.smallPadding || 10}px;
          padding-right: ${theme.space.smallPadding || 10}px;
          
          :hover {
            ${!disabled && `background: ${theme.colors.primary[1]};`}
          }
          
          :active {
            box-shadow: 0 0 0 0 silver;
          }
      `
    : ''

export const clear = ({
  background,
  theme,
  clear,
}: { theme: CustomTheme } & ButtonProps) =>
  clear
    ? ` background: ${background || theme.colors.clearAlpha};
        border: 1px solid ${theme.colors.border};
        color: ${theme.colors.gray[0]};
        :hover {
          background: ${background || theme.colors.clearAlpha};
        }
        
        :active {
          box-shadow: 0 0 0 0 silver;
        }
    `
    : ''

export const noBorder = ({ noBorder }: { theme: CustomTheme } & ButtonProps) =>
  noBorder ? `border: none;` : ''
