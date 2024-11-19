import cn from 'classnames'
import * as React from 'react'
import {
  DropEvent,
  DropzoneProps,
  FileRejection,
  useDropzone,
} from 'react-dropzone'

import { useTheme } from '../../../hooks'
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
  UPLOADER_SIZE,
  UploaderContainer,
} from './Uploader.style'

export type Size = {
  width: number
  height: number
}

export type FileInfo = {
  id: string
  name: string
  size: string
  url: string
  type: string
  path?: string
}

export type WordingType = {
  readonly uploaderPrompt: string
  readonly uploaderLoadingPrompt: string
  readonly fileDeleteLabel: string
}

export interface UploaderProps
  extends Omit<DropzoneProps, 'ref' | 'children'>,
    Omit<
      BoxPropsOf<'input'>,
      'accept' | 'size' | 'value' | keyof DropzoneProps
    > {
  readonly size?: UPLOADER_SIZE
  readonly value?: FileInfo | Array<FileInfo>
  readonly circle?: boolean
  readonly format?: 'image/*' | 'audio/*' | 'video/*' | string | string[] // https://react-dropzone.js.org/#section-accepting-specific-file-types
  readonly minResolution?: Size
  readonly multiple?: boolean
  readonly showThumbnail?: boolean
  readonly onDrop: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => void
  readonly wording: WordingType
  readonly onRemove?: (file: FileInfo) => void
}

const Uploader: React.FC<UploaderProps> = ({
  format,
  size = UPLOADER_SIZE.LG,
  minResolution,
  circle,
  multiple,
  showThumbnail,
  value,
  disabled,
  onDrop: onExternalDrop,
  wording,
  minSize,
  className,
  onDropRejected,
  onRemove,
  ...props
}) => {
  const { colors } = useTheme()

  const [thumb, setThumb] = React.useState<string | null>(
    !multiple && value && !Array.isArray(value)
    ? value.url || value.path || null
    : null
  )

  const [loading, setLoading] = React.useState(false)

  const isImageUploader =
    !multiple && value && !Array.isArray(value)
      ? value?.type?.includes('image')
      : false

  React.useEffect(() => {
    return () => {
      if (thumb) URL.revokeObjectURL(thumb)
    }
  }, [thumb])

  const onDrop = React.useCallback(
    async <T extends File>(
      acceptedFiles: T[],
      fileRejections: FileRejection[],
      event: DropEvent,
    ) => {
      setLoading(true)

      onExternalDrop(acceptedFiles, fileRejections, event)

      if (acceptedFiles.length === 0) {
        setLoading(false)
        return
      }

      if (showThumbnail && !multiple) {
        setThumb(URL.createObjectURL(acceptedFiles[0]))
      }

      setLoading(false)
    },
    [multiple, showThumbnail],
  )

  const removeFile = () => {
    setThumb(null)
    if (onRemove && !Array.isArray(value) && value) {
      onRemove(value)
    }
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
    accept: format,
    onDropRejected,
    onDrop,
  })

  const getContent = () => {
    switch (size) {
      case UPLOADER_SIZE.LG:
        return (
          <Content>
            {isDragActive ? (
              <Text
                textAlign="center"
                fontWeight="semibold"
                fontSize={4}
                color="primary.800"
              >
                {wording.uploaderPrompt}
              </Text>
            ) : loading ? (
              <Flex direction="column" align="center">
                <Spinner size={CapUIIconSize.Lg} />
                <Text color="gray.800" mt={3}>
                  {wording.uploaderLoadingPrompt}
                </Text>
              </Flex>
            ) : (
              <>
                <Illustration key={0} colors={colors} />
                <Text
                  key={1}
                  textAlign="center"
                  fontSize={3}
                  lineHeight="base"
                  color="gray.500"
                >
                  {wording.uploaderPrompt}
                </Text>
              </>
            )}
          </Content>
        )
      case UPLOADER_SIZE.MD:
        return (
          <Content>
            {isDragActive ? (
              <Text
                textAlign="center"
                fontWeight="semibold"
                fontSize={4}
                color="primary.800"
              >
                {wording.uploaderPrompt}
              </Text>
            ) : loading ? (
              <Flex direction="column" align="center">
                <Spinner size={CapUIIconSize.Lg} />
                <Text color="gray.800" mt={3}>
                  {wording.uploaderLoadingPrompt}
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
                {wording.uploaderPrompt}
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
                name={isDragActive ? CapUIIcon.UploadArrow : CapUIIcon.Add}
                size={CapUIIconSize.Lg}
                color={isDragActive ? 'primary.500' : 'gray.500'}
              />
            )}
          </Content>
        )
    }
  }
  return (
    <UploaderContainer className={cn('cap-uploader', className)} size={size}>
      <Container
        drag={isDragActive}
        circle={circle}
        size={size}
        colors={colors}
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        {getContent()}
        {!multiple && showThumbnail && !isImageUploader && thumb && (
          <ThumbContainer>
            <FileThumbnail size={size} circle={circle}>
              <Icon
                size={CapUIIconSize.Xl}
                name={CapUIIcon.FileO}
                color="gray.500"
              />
              <Text fontSize={3} color="gray.500">
                {acceptedFiles.length > 0 && (acceptedFiles[0].name || thumb)}
              </Text>
            </FileThumbnail>

            <FileThumbnailControls size={size} circle={circle}>
              <ButtonQuickAction
                label={wording.fileDeleteLabel}
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
        {!multiple && showThumbnail && isImageUploader && thumb && (
          <ThumbContainer>
            <Thumbnail size={size} circle={circle} src={thumb} alt="" />
            <ThumbnailControls size={size} circle={circle}>
              <ButtonQuickAction
                color="white"
                label={wording.fileDeleteLabel}
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

Uploader.displayName = 'Uploader'

export default Uploader
