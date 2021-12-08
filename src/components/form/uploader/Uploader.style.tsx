import styled from 'styled-components'
import { ResponsiveValue } from 'styled-system'

import colors from '../../../styles/modules/colors'
import { Box } from '../../box'
import { UPLOADER_SIZE } from './Uploader'

export const Container = styled.div<{
  readonly size?: ResponsiveValue<UPLOADER_SIZE>
  readonly circle?: boolean
  readonly drag: boolean
}>`
  height: 184px;
  width: ${props => {
    switch (props.size) {
      case UPLOADER_SIZE.LG:
        return '488px'
      case UPLOADER_SIZE.SM:
        return '184px'
      default:
        return '240px'
    }
  }};
  background-color: transparent;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 1.5px dashed ${colors.gray[300]};
  border-radius: ${props =>
    props.size === UPLOADER_SIZE.SM && !!props.circle ? '50%' : '4px'};
  overflow: hidden;
  position: relative;
  &:focus {
    background-color: ${colors.blue[100]};
    border: 1.5px dashed ${colors.blue[300]};
    box-shadow: 0 0 2px 2px ${colors.blue[300]};
  }
  &:hover {
    background-color: ${colors.blue[100]};
    border: 1.5px dashed ${colors.blue[300]};
  }

  ${({ drag }) =>
    drag &&
    `background-color: ${colors.blue[100]};
    border: 1.5px dashed ${colors.blue[300]};
  `}
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
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
    transform: scale(0.95);
  }
`
export const UploaderContainer = styled.div<{
  readonly size?: ResponsiveValue<UPLOADER_SIZE>
}>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  position: relative;
  min-width: ${props => {
    switch (props.size) {
      case UPLOADER_SIZE.LG:
        return '488px'
      case UPLOADER_SIZE.SM:
        return '184px'
      default:
        return '240px'
    }
  }};
  width: 100%;
`
export const ThumbContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
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
export const FileThumbnail = styled.div<{
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
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`
export const FileThumbnailControls = styled.div<{
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
  display: flex;
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
export const ThumbnailControls = styled.div<{
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
  display: flex;
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
    opacity: 0 !important;
  }
  &:hover {
    background-color: ${colors.gray[100]};
    & > div > svg {
      color: ${colors.gray[700]};
    }
    & > button {
      opacity: 1 !important;
    }
  }
`
export const ErrorList = styled(Box).attrs({
  mt: 2,
  p: 4,
})`
  width: 100%;
  background-color: ${colors.red[100]};
  border: 1px solid ${colors.red[200]};
  border-radius: 4px;
  display: flex;
  flex-flow: column;
`
export const WarningList = styled(Box).attrs({
  mt: 2,
  p: 4,
})`
  width: 100%;
  background-color: ${colors.orange[100]};
  border: 1px solid ${colors.orange[200]};
  border-radius: 4px;
  display: flex;
  flex-flow: column;
`
