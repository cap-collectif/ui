import cn from 'classnames'
import * as React from 'react'
import {
  DropEvent,
  DropzoneProps,
  FileRejection,
  useDropzone,
} from 'react-dropzone'
import { ResponsiveValue } from 'styled-system'

import { BoxPropsOf } from '../../box'
import { ButtonQuickAction } from '../../buttonQuickAction'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Flex } from '../../layout'
import { Spinner } from '../../spinner'
import { Text } from '../../typography'
import Illustration from './Illustration'
import {
  Container,
  Content,
  FileThumbnail,
  FileThumbnailControls,
  ThumbContainer,
  Thumbnail,
  ThumbnailControls,
  UploaderContainer,
} from './Uploader.style'

export enum UPLOADER_SIZE {
  SM = 'sm', // 184px
  MD = 'md', // 240px
  LG = 'lg', // 488px
}

export type Size = {
  width: number
  height: number
}
export const MAX_SIZE_FOR_IMAGES = 1.5

export type FileInfo = {
  id: string
  name: string
  size: string
  url: string
}
export interface UploaderProps
  extends Omit<DropzoneProps, 'minSize' | 'ref' | 'children'>,
    Omit<
      BoxPropsOf<'input'>,
      | 'accept'
      | 'size'
      | 'value'
      | 'onDragEnter'
      | 'onDragLeave'
      | 'onDragOver'
      | 'onDrop'
    > {
  readonly size?: ResponsiveValue<UPLOADER_SIZE>
  readonly value?: FileInfo | Array<FileInfo>
  readonly circle?: boolean
  readonly isImageUploader: boolean
  readonly format?: 'image/*' | 'audio/*' | 'video/*' | string | string[] // https://react-dropzone.js.org/#section-accepting-specific-file-types
  readonly maxSize: number
  readonly minResolution?: Size
  readonly multiple?: boolean
  readonly showThumbnail?: boolean
  readonly onDrop: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => void
  readonly uploaderPrompt: string
  readonly uploaderLoadingPrompt: string
  readonly fileDeleteLabel: string
  readonly errorMessage: string
  readonly placeholder: string
  readonly isInvalid: boolean
  readonly isRequired: boolean
}

const Uploader: React.FC<UploaderProps> = ({
  format,
  size = UPLOADER_SIZE.LG,
  maxSize,
  minResolution,
  circle,
  multiple,
  showThumbnail,
  value,
  disabled,
  onDrop: onExternalDrop,
  uploaderPrompt,
  uploaderLoadingPrompt,
  fileDeleteLabel,
  isImageUploader,
  minSize,
  className,
  onDropRejected,
  ...props
}) => {
  const [thumb, setThumb] = React.useState<string | null>(null)
  const [drag, setDrag] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(false)
  React.useEffect(() => {
    if (!multiple && value && !Array.isArray(value)) {
      setThumb(value.url)
    }
    return () => {
      if (thumb) {
        URL.revokeObjectURL(thumb)
      }
    }
  }, [thumb, value, setThumb])
  const onDrop = React.useCallback(
    async <T extends File>(
      acceptedFiles: T[],
      fileRejections: FileRejection[],
      event: DropEvent,
    ) => {
      setLoading(true)
      onExternalDrop(acceptedFiles, fileRejections, event)
      if (acceptedFiles.length === 0) {
        setDrag(false)
        return
      }
      if (showThumbnail && !multiple) {
        setThumb(URL.createObjectURL(acceptedFiles[0]))
      }
      setDrag(false)
      setLoading(false)
    },
    [multiple, showThumbnail],
  )

  const removeFile = () => {
    setThumb(null)
  }
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({
    ...props,
    multiple,
    disabled,
    maxSize,
    accept: format,
    onDropRejected: onDropRejected,
    onDrop,
    onDragEnter: () => {
      setDrag(true)
    },
    onDragLeave: () => {
      setDrag(false)
    },
  })

  const getContent = () => {
    switch (size) {
      case UPLOADER_SIZE.LG:
        return (
          <Content>
            {drag ? (
              <Text
                textAlign="center"
                fontWeight="semibold"
                fontSize={4}
                color="blue.800"
              >
                {uploaderPrompt}
              </Text>
            ) : loading ? (
              <Flex direction="column" align="center">
                <Spinner size={CapUIIconSize.Lg} />
                <Text color="gray.800" mt={3}>
                  {uploaderLoadingPrompt}
                </Text>
              </Flex>
            ) : (
              <>
                <Illustration key={0} />
                <Text
                  key={1}
                  textAlign="center"
                  fontSize={3}
                  lineHeight="base"
                  color="gray.500"
                >
                  {uploaderPrompt}
                </Text>
              </>
            )}
          </Content>
        )
      case UPLOADER_SIZE.MD:
        return (
          <Content>
            {drag ? (
              <Text
                textAlign="center"
                fontWeight="semibold"
                fontSize={4}
                color="blue.800"
              >
                {uploaderPrompt}
              </Text>
            ) : loading ? (
              <Flex direction="column" align="center">
                <Spinner size={CapUIIconSize.Lg} />
                <Text color="gray.800" mt={3}>
                  {uploaderLoadingPrompt}
                </Text>
              </Flex>
            ) : (
              <Text
                width="70%"
                textAlign="center"
                fontSize={3}
                lineHeight="base"
                color="gray.500"
              >
                {uploaderPrompt}
              </Text>
            )}
          </Content>
        )
      default:
        return (
          <Content>
            {loading ? (
              <Flex direction="column" align="center">
                <Spinner size={CapUIIconSize.Lg} />
              </Flex>
            ) : (
              <Icon
                name={drag ? CapUIIcon.AddDrag : CapUIIcon.Add}
                size={CapUIIconSize.Lg}
                color={drag ? 'blue.500' : 'gray.500'}
              />
            )}
          </Content>
        )
    }
  }
  return (
    <UploaderContainer className={cn('cap-uploader', className)} size={size}>
      <Container
        drag={drag}
        circle={circle}
        size={size}
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        {getContent()}
        {showThumbnail && !isImageUploader && thumb && (
          <ThumbContainer>
            <FileThumbnail size={size} circle={circle}>
              <Icon
                size={CapUIIconSize.Xl}
                name={CapUIIcon.FileO}
                color="gray.500"
              />
              <Text fontSize={3} color="gray.500">
                {acceptedFiles.length > 0 && acceptedFiles[0].name}
              </Text>
            </FileThumbnail>

            <FileThumbnailControls size={size} circle={circle}>
              <ButtonQuickAction
                label={fileDeleteLabel}
                onClick={e => {
                  e.stopPropagation()
                  removeFile()
                }}
                icon={CapUIIcon.Trash}
                size={CapUIIconSize.Md}
                variantColor="red"
              />
            </FileThumbnailControls>
          </ThumbContainer>
        )}
        {showThumbnail && isImageUploader && thumb && (
          <ThumbContainer>
            <Thumbnail size={size} circle={circle} src={thumb} alt="" />
            <ThumbnailControls size={size} circle={circle}>
              <ButtonQuickAction
                label={fileDeleteLabel}
                onClick={e => {
                  e.stopPropagation()
                  removeFile()
                }}
                icon={CapUIIcon.Trash}
                size={CapUIIconSize.Md}
                variantColor="red"
              />
            </ThumbnailControls>
          </ThumbContainer>
        )}
      </Container>
    </UploaderContainer>
  )
}

export default Uploader
