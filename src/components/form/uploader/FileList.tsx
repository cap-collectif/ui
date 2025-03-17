import cn from 'classnames'
import * as React from 'react'

import { CapUIFontSize } from '../../../styles'
import { ButtonQuickAction } from '../../buttonQuickAction'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Flex } from '../../layout'
import { Text } from '../../typography'
import { FileInfo } from './Uploader'
import { FileItem, FileList as FileListContainer } from './Uploader.style'

export type FileListProps = {
  readonly files: FileInfo[]
  readonly onRemove: (file: FileInfo) => void
  readonly deleteFileLabel: string
  readonly className?: string
}
const FileList = ({
  files,
  onRemove,
  deleteFileLabel,
  className,
}: FileListProps) => {
  if (files.length === 0) return null

  return (
    <FileListContainer className={cn('cap-file-list', className)}>
      {files.map(file => (
        <FileItem key={file.name}>
          <Flex direction="row" align="center" justify="flex-start">
            <Icon
              size={CapUIIconSize.Md}
              name={CapUIIcon.File}
              color="gray.300"
            />
            <Text fontSize={CapUIFontSize.BodySmall} lineHeight="sm">
              {file.name}
            </Text>
          </Flex>

          <ButtonQuickAction
            label={deleteFileLabel}
            onClick={() => onRemove(file)}
            icon={CapUIIcon.Trash}
            size={CapUIIconSize.Sm}
            variantColor="red"
          />
        </FileItem>
      ))}
    </FileListContainer>
  )
}

FileList.displayName = 'FileList'

export default FileList
