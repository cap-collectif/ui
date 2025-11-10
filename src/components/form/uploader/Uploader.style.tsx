import styled from 'styled-components'
import { ResponsiveValue } from 'styled-system'

import colors, { Colors } from '../../../styles/modules/colors'
import { pxToRem } from '../../../styles/modules/mixins'
import { ExtendedColors } from '../../../utils/getThemeWithColorsToken'
import { Flex } from '../../layout'
import { InputVariantColor } from '../enums'

export enum UPLOADER_SIZE {
  SM = 'sm', // 184px
  MD = 'md', // 240px
  LG = 'lg', // 488px
}

export const Container = styled(Flex)<{
  size: UPLOADER_SIZE
  circle?: boolean
  drag: boolean
  colors: ExtendedColors & Colors
  isFullWidth?: boolean
  variantColor?: InputVariantColor
}>`
  height: ${pxToRem(184)};
  min-width: ${props => {
    switch (props.size) {
      case UPLOADER_SIZE.LG:
        return pxToRem(240)
      case UPLOADER_SIZE.MD:
      case UPLOADER_SIZE.SM:
      default:
        return pxToRem(184)
    }
  }};
  max-width: ${props => {
    if (props.isFullWidth) {
      return undefined
    } else {
      switch (props.size) {
        case UPLOADER_SIZE.LG:
        case UPLOADER_SIZE.MD:
          return pxToRem(488)
        case UPLOADER_SIZE.SM:
        default:
          return pxToRem(184)
      }
    }
  }};
  width: 100%;
  overflow: hidden;
  background-color: ${props =>
    props.variantColor === 'default'
      ? props.colors?.uploader.background.default
      : props.colors?.uploader.background.hierarchy};
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px -1px 0px 0px ${props => props.colors?.uploader.border.default};
  position: relative;
  cursor: pointer;
  &:focus {
    background-color: ${props => props.colors?.uploader.background.drag};
    border: 1.5px dashed ${props => props.colors?.uploader.border.drag};
    border-radius: ${props => props.theme?.radii.xxs};
    box-shadow: unset;
  }
  &:hover {
    background-color: ${props => props.colors?.uploader.background.hover};
    box-shadow: inset 0px -1px 0px 0px ${props => props.colors?.uploader.border.hover};
  }

  ${props =>
    props.drag &&
    `background-color: ${props.theme.colors?.uploader.background.drag}`}
`

export const Content = styled(Flex)`
  width: 100%;
  height: 100%;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  transition: all 350ms ease-in-out;
  .leftpage,
  .rightpage,
  .centerpage,
  .left,
  .right,
  .all {
    transition: all 350ms ease-in-out;
  }
  &:hover .leftpage {
    transform: rotate(-2deg) translateX(2px) translateY(-2px);
  }
  &:hover .rightpage {
    transform: rotate(2deg) translate(-2px, -2px);
  }
  &:hover .centerpage {
    transform: translateY(-5px);
  }
  &:hover .left {
    transform: translate(-2px, -3px) rotate(-5deg);
  }
  &:hover .right {
    transform: translate(5px, -5px) rotate(-2deg);
  }
  &:hover .all {
    transform: scale(0.95, 0.95);
  }
`
export const UploaderContainer = styled(Flex)<{
  size?: ResponsiveValue<UPLOADER_SIZE>
  isFullWidth?: boolean
}>`
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  position: relative;
  min-width: ${props => {
    switch (props.size) {
      case UPLOADER_SIZE.LG:
        return pxToRem(240)
      case UPLOADER_SIZE.MD:
      case UPLOADER_SIZE.SM:
      default:
        return pxToRem(184)
    }
  }};
  max-width: ${props => {
    if (props.isFullWidth) {
      return undefined
    } else {
      switch (props.size) {
        case UPLOADER_SIZE.LG:
        case UPLOADER_SIZE.MD:
          return pxToRem(488)
        case UPLOADER_SIZE.SM:
        default:
          return pxToRem(184)
      }
    }
  }};
  width: 100%;
`
export const ThumbContainer = styled(Flex)<{
  variantColor?: InputVariantColor
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.variantColor === 'default'
      ? props.theme?.colors?.uploader.background.complete
      : props.theme?.colors?.uploader.background.hierarchy};
  box-shadow: inset 0px -1px 0px 0px ${props => props.theme?.colors?.uploader.border.default};
  &:hover {
    box-shadow: unset;
  }
  justify-content: center;
`
export const Thumbnail = styled.img<{
  readonly size?: ResponsiveValue<UPLOADER_SIZE>
  readonly circle?: boolean
}>`
  width: 100%;
  height: 100%;
  padding: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '8px' : '16px'};
  border-radius: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '50%' : '4px'};
  overflow: hidden;
  object-fit: contain;
`
export const FileThumbnail = styled(Flex)<{
  readonly size?: ResponsiveValue<UPLOADER_SIZE>
  readonly circle?: boolean
}>`
  width: 100%;
  height: 100%;
  padding: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '8px' : '16px'};
  overflow: hidden;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`
export const FileThumbnailControls = styled(Flex)<{
  readonly size?: ResponsiveValue<UPLOADER_SIZE>
  readonly circle?: boolean
}>`
  width: 100%;
  height: 100%;
  padding: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '8px' : '16px'};
  border-radius: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '50%' : '4px'};
  background: transparent;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  & > button {
    opacity: ;
    &:focus {
      opacity: 1;
    }
  }
  &:hover {
    background: linear-gradient(
      0deg,
      rgba(39, 43, 48, 0.32),
      rgba(39, 43, 48, 0.32)
    );
    & > div > svg {
      color: ${colors.white};
    }
    & > button {
      opacity: 1 !important;
    }
  }
`
export const ThumbnailControls = styled(Flex)<{
  readonly size?: ResponsiveValue<UPLOADER_SIZE>
  readonly circle?: boolean
}>`
  width: 100%;
  height: 100%;
  padding: ${props => props.theme?.radii?.xxs};
  border-radius: ${props => props.theme?.radii?.xxs};
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  & > button {
    opacity: 0;
    &:focus {
      opacity: 1;
    }
  }
  &:hover {
    background: linear-gradient(
      0deg,
      rgba(39, 43, 48, 0.32),
      rgba(39, 43, 48, 0.32)
    );
    & > button > svg {
      color: ${colors.white};
    }
    & > button {
      opacity: 1;
    }
  }
`
export const FileList = styled.ul`
  margin-top: 8px;
  margin-bottom: 0;
  list-style: none;
  width: 100%;
  padding: 0;
`
export const FileItem = styled.li`
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  & > button {
    opacity: 0;
  }
  &:hover {
    background-color: ${colors.gray[100]};
    & > div > svg {
      color: ${colors.gray[700]};
    }
    & > button {
      opacity: 1;
    }
  }
`
