import cn from 'classnames'
import * as React from 'react'
import ReactSelect, {
  MultiValueGenericProps,
  ControlProps,
  components,
} from 'react-select'
import type { GroupBase, Props } from 'react-select'

import { useTheme } from '../../../hooks'
import { Box } from '../../box'
import { Icon, CapUIIcon, CapUIIconSize } from '../../icon'
import { Spinner } from '../../spinner'
import { CapInputSize, InputVariantColor } from '../enums'
import { useFormControl } from '../formControl'
import { reactSelectStyle } from '../style'
import MultiValueTag from './MultiValueTag'

export interface SelectProps extends Omit<Props, 'onChange'> {
  isDisabled?: boolean
  variantSize?: CapInputSize
  width?: string | number
  onChange?: (newValue: any) => void
  deleteButtonAriaLabel?: boolean
  variantColor?: InputVariantColor
}

export function MultiValue<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  removeProps,
  isDisabled,
  ...props
}: MultiValueGenericProps<Option, IsMulti, Group> & {
  isDisabled: boolean
  removeProps: { onClick?: React.MouseEventHandler<HTMLDivElement> | undefined }
}) {
  return (
    <MultiValueTag
      // @ts-ignore fix tag stuff
      isInvalid={props.selectProps['aria-invalid'] || false}
      isDisabled={isDisabled}
      removeProps={removeProps}
      label={props.data.label}
    />
  )
}

export function Control<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({ children, ...props }: ControlProps<Option, IsMulti, Group>) {
  const {
    isLoading,
    isClearable, // @ts-ignore need to rework this once back in main repo
    deleteButtonAriaLabel,
    value,
    isDisabled, // @ts-ignore need to rework this once back in main repo
    variantColor,
  } = props.selectProps

  return (
    <components.Control {...props}>
      {Array.isArray(children) && children[0]}
      {isLoading && <Spinner mr={2} color="primary.base" />}
      {!isLoading && (
        <>
          {isClearable && value ? (
            <Box
              as="button"
              type="button"
              aria-label={deleteButtonAriaLabel || 'Supprimer la saisie'}
              mr={'xxs'}
              style={{ cursor: 'pointer' }}
              onClick={() => props.clearValue()}
              disabled={isDisabled}
            >
              <Icon
                name={CapUIIcon.Cross}
                size={CapUIIconSize.Md}
                color={
                  isDisabled
                    ? 'text.disable'
                    : `input.${variantColor}.icon.selected`
                }
                _hover={{ color: 'red.500' }}
                aria-hidden
                focusable={false}
              />
            </Box>
          ) : null}
          <Icon
            mr={3}
            style={{ cursor: 'pointer' }}
            name={CapUIIcon.ArrowDown}
            size={CapUIIconSize.Sm}
            color={
              isDisabled
                ? 'text.disable'
                : `input.${variantColor}.icon.selected`
            }
          />
        </>
      )}
    </components.Control>
  )
}

export const Select: React.FC<SelectProps> = ({
  className,
  width,
  ...props
}) => {
  const inputProps = useFormControl<HTMLInputElement>(props)
  const { colors } = useTheme()
  const [currentIndex, setCurrentIndex] = React.useState<number>(0)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const removeButtons: NodeListOf<HTMLDivElement> = document.querySelectorAll(
      '.cap-tag__closeButton',
    )

    if (!removeButtons) {
      return
    }

    setCurrentIndex(removeButtons.length - 1)

    const currentTagIsLastTag: boolean =
      currentIndex === removeButtons.length - 1

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      e.stopPropagation()
      if (currentTagIsLastTag) {
        setCurrentIndex(0)
        ;(removeButtons[0] as HTMLElement)?.focus()
      } else {
        setCurrentIndex(currentIndex + 1)
        ;(removeButtons[currentIndex + 1] as HTMLElement)?.focus()
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      e.stopPropagation()
      if (currentIndex === 0) {
        setCurrentIndex(removeButtons.length - 1)
        ;(removeButtons[removeButtons.length - 1] as HTMLElement)?.focus()
      } else {
        setCurrentIndex(currentIndex - 1)
        ;(removeButtons[currentIndex - 1] as HTMLElement)?.focus()
      }
    }
  }

  return (
    <Box width={width || '100%'}>
      <ReactSelect
        styles={reactSelectStyle(
          colors,
          inputProps.variantSize,
          inputProps.variantColor,
        )}
        className={cn('cap-select', className)}
        classNamePrefix="cap-select"
        isDisabled={inputProps.disabled}
        aria-invalid={inputProps['aria-invalid']}
        components={{ MultiValue, Control }}
        maxMenuHeight={210}
        menuPortalTarget={document?.body}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        variantColor={inputProps.variantColor}
        {...props}
      />
    </Box>
  )
}

Select.displayName = 'Select'

export default Select as React.FC<SelectProps>
