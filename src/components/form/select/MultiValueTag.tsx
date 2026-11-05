import * as React from 'react'

import { Tag } from '../../tag'

export type MultiValueTagProps = {
  isInvalid: boolean
  isDisabled: boolean
  isReadonly?: boolean
  removeProps: { onClick?: React.MouseEventHandler<HTMLDivElement> | undefined }
  label: string
}

const MultiValueTag: React.FC<MultiValueTagProps> = ({
  isInvalid,
  isDisabled,
  isReadonly = false,
  removeProps,
  label,
}) => {
  return (
    <Tag
      variantColor={
        isReadonly
          ? 'info'
          : isDisabled
            ? 'infoGray'
            : isInvalid
              ? 'danger'
              : 'info'
      }
      mr={'xxs'}
      mt={'xxs'}
      onRemove={isReadonly ? undefined : removeProps.onClick}
      tabIndex={-1}
    >
      <Tag.Label>{label}</Tag.Label>
    </Tag>
  )
}

MultiValueTag.displayName = 'Select.MultiValueTag'

export default MultiValueTag
