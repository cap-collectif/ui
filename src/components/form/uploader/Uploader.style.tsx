import styled from 'styled-components'
import { ResponsiveValue } from 'styled-system'

import colors, { Colors } from '../../../styles/modules/colors'
import { Flex } from '../../layout'

export enum UPLOADER_SIZE {
  SM = 'sm', // 184px
  MD = 'md', // 240px
  LG = 'lg', // 488px
}

export const Container = styled(Flex)<{
  readonly size: UPLOADER_SIZE
  readonly circle?: boolean
  readonly drag: boolean
  readonly colors: Colors
  readonly isFullWidth?: boolean
}>`
  height: 184px;
  min-width: ${props => {
    switch (props.size) {
      case UPLOADER_SIZE.LG:
        return '240px'
      case UPLOADER_SIZE.MD:
      case UPLOADER_SIZE.SM:
      default:
        return '184px'
    }
  }};
  max-width: ${props => {
    if (props.isFullWidth) {
      return undefined
    } else {
      switch (props.size) {
        case UPLOADER_SIZE.LG:
        case UPLOADER_SIZE.MD:
          return '488px'
      case UPLOADER_SIZE.SM:
        default:
          return '184px'
        }
      }
  }};
  width: 100%;
  background-color: transparent;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 1.5px dashed ${props => props.colors?.gray[300]};
  border-radius: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '50%' : '4px'};
  overflow: hidden;
  position: relative;
  &:focus {
    background-color: ${props => props.colors?.primary[100]};
    border: 1.5px dashed ${props => props.colors?.primary[300]};
    box-shadow: 0 0 2px 2px ${props => props.colors?.primary[300]};
    outline: 2px #fff solid;
    outline-offset: 0;
    box-shadow: 0 0 0 4px ${props => props.colors?.primary[700]};
  }
  &:hover {
    background-color: ${props => props.colors?.primary[100]};
    border: 1.5px dashed ${props => props.colors?.primary[300]};
  }

  ${({ drag }) =>
    drag &&
    `background-color: ${props => props.colors?.primary[100]};
    border: 1.5px dashed ${props => props.colors?.primary[300]};
  `}
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
  readonly size?: ResponsiveValue<UPLOADER_SIZE>
  readonly isFullWidth?: boolean
}>`
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  position: relative;
  min-width: ${props => {
    switch (props.size) {
      case UPLOADER_SIZE.LG:
        return '240px'
      case UPLOADER_SIZE.MD:
      case UPLOADER_SIZE.SM:
      default:
        return '184px'
    }
  }};
  max-width: ${props => {
    if (props.isFullWidth) {
      return undefined
    } else {
      switch (props.size) {
        case UPLOADER_SIZE.LG:
        case UPLOADER_SIZE.MD:
          return '488px'
        case UPLOADER_SIZE.SM:
        default:
          return '184px'
      }
    }
  }};
  width: 100%;
`
export const ThumbContainer = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  justify-content: center;
`
export const Thumbnail = styled.img<{
  readonly size?: ResponsiveValue<UPLOADER_SIZE>
  readonly circle?: boolean
}>`
  width: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle
      ? 'calc(100% - 16px);'
      : 'calc(100% - 32px)'};
  height: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle
      ? 'calc(100% - 16px);'
      : 'calc(100% - 32px)'};
  margin: ${props =>
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
  width: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle
      ? 'calc(100% - 16px);'
      : '158px'};
  height: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle
      ? 'calc(100% - 16px);'
      : 'calc(100% - 32px)'};
  margin: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '8px' : '16px'};
  border-radius: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '50%' : '4px'};
  overflow: hidden;
  background: ${colors.gray[100]};
  flex-flow: column;
  justify-content: center;
  align-items: center;
`
export const FileThumbnailControls = styled(Flex)<{
  readonly size?: ResponsiveValue<UPLOADER_SIZE>
  readonly circle?: boolean
}>`
  width: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle
      ? 'calc(100% - 16px);'
      : '158px'};
  height: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle
      ? 'calc(100% - 16px);'
      : 'calc(100% - 32px)'};
  margin: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '8px' : '16px'};
  border-radius: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '50%' : '4px'};
  background: transparent;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  & > button {
    opacity: 0 !important;
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
  width: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle
      ? 'calc(100% - 16px);'
      : 'calc(100% - 32px)'};
  height: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle
      ? 'calc(100% - 16px);'
      : 'calc(100% - 32px)'};
  margin: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '8px' : '16px'};
  border-radius: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '50%' : '4px'};
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  & > button {
    opacity: 0;
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
