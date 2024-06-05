import { Meta, Story } from '@storybook/react'
import * as React from 'react'
import { DropEvent, ErrorCode, FileRejection } from 'react-dropzone'

import { CapUIFontWeight } from '../../../styles'
import { btomg, mgtob } from '../../../utils/fileSizeConvert'
import fileType from '../../../utils/fileType'
import { Box } from '../../box/Box'
import { InfoMessage } from '../../infoMessage/InfoMessage'
import { Flex } from '../../layout'
import { Text } from '../../typography'
import { FormControl } from '../formControl'
import { FormErrorMessage } from '../formErrorMessage'
import { FormGuideline } from '../formGuideline'
import { FormLabel } from '../formLabel'
import FilesList from './FileList'
import Uploader, { UploaderProps } from './Uploader'
import mdx from './Uploader.mdx'
import { UPLOADER_SIZE } from './Uploader.style'

const meta: Meta = {
  title: 'Library/Form/Uploader',
  component: Uploader,
  argTypes: {
    size: { options: Object.values(UPLOADER_SIZE) as string[] },
  },
  args: {
    className: 'cap-uploader',
    errorMessage: 'Error info.',
    size: UPLOADER_SIZE.LG,
    circle: false,
    wording: {
      uploaderPrompt: 'Déposer ou sélectionner des fichiers',
      uploaderLoadingPrompt: 'Importation en cours...',
      fileDeleteLabel: 'Supprimer',
    },
    format: 'image/*',
    minResolution: { width: 170, height: 170 },
    showFiles: true,
    maxSize: 8388608,
    multiple: false,
    showThumbnail: true,
    onDrop: (
      acceptedFiles: File[],
      fileRejections: FileRejection[],
      event: DropEvent,
    ) => {
      console.log(acceptedFiles, fileRejections, event)
    },
    required: false,
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
  },
}
export default meta

export const Default: Story<UploaderProps> = ({
  onDrop,
  className,
  value,
  ref,
  ...args
}) => (
  <FormControl {...args}>
    <FormLabel htmlFor="name" label="Label">
      {!args.required && (
        <Box as="span" color="gray.500">
          facultatif
        </Box>
      )}
    </FormLabel>
    <FormGuideline>
      <Flex direction="row" wrap="wrap" mb={2}>
        {args.format && (
          <Flex
            as="span"
            flexDirection="row"
            marginRight={1}
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Format supporté :
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {Array.isArray(args.format)
                ? args.format.join(', ')
                : args.format}
            </Text>
          </Flex>
        )}
        <Flex
          as="span"
          flexDirection="row"
          marginRight={1}
          fontSize={2}
          lineHeight="sm"
          color="gray.500"
        >
          Poids max:
          <Text lineHeight="sm" color="gray.700" ml={1}>
            {btomg(args.maxSize)}mo
          </Text>
        </Flex>
        {args.minResolution && (
          <Flex
            as="span"
            flexDirection="row"
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Taille min:
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {args.minResolution.width}x{args.minResolution.height}px
            </Text>
          </Flex>
        )}
      </Flex>
    </FormGuideline>
    <Uploader
      value={value}
      className={className}
      ref={ref}
      onDrop={onDrop}
      {...args}
    />
  </FormControl>
)
export const Medium: Story<UploaderProps> = ({
  onDrop,
  className,
  value,
  ref,
  ...args
}) => (
  <FormControl {...args} maxWidth="240px">
    <FormLabel htmlFor="name" label="Label">
      {!args.required && (
        <Box as="span" color="gray.500">
          facultatif
        </Box>
      )}
    </FormLabel>
    <FormGuideline>
      <Flex direction="row" wrap="wrap" mb={2}>
        {args.format && (
          <Flex
            as="span"
            flexDirection="row"
            marginRight={1}
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Format supporté :
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {Array.isArray(args.format)
                ? args.format.join(', ')
                : args.format}
            </Text>
          </Flex>
        )}
        <Flex
          as="span"
          flexDirection="row"
          marginRight={1}
          fontSize={2}
          lineHeight="sm"
          color="gray.500"
        >
          Poids max:
          <Text lineHeight="sm" color="gray.700" ml={1}>
            {btomg(args.maxSize)}mo
          </Text>
        </Flex>
        {args.minResolution && (
          <Flex
            as="span"
            flexDirection="row"
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Taille min:
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {args.minResolution.width}x{args.minResolution.height}px
            </Text>
          </Flex>
        )}
      </Flex>
    </FormGuideline>
    <Uploader
      value={value}
      className={className}
      ref={ref}
      onDrop={onDrop}
      {...args}
    />
  </FormControl>
)
Medium.args = {
  size: UPLOADER_SIZE.MD,
}
export const Small: Story<UploaderProps> = ({
  onDrop,
  className,
  value,
  ref,
  ...args
}) => (
  <FormControl {...args} maxWidth="184px">
    <FormLabel htmlFor="name" label="Label">
      {!args.required && (
        <Box as="span" color="gray.500">
          facultatif
        </Box>
      )}
    </FormLabel>
    <FormGuideline>
      <Flex direction="row" wrap="wrap" mb={2}>
        {args.format && (
          <Flex
            as="span"
            flexDirection="row"
            marginRight={1}
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Format supporté :
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {Array.isArray(args.format)
                ? args.format.join(', ')
                : args.format}
            </Text>
          </Flex>
        )}
        <Flex
          as="span"
          flexDirection="row"
          marginRight={1}
          fontSize={2}
          lineHeight="sm"
          color="gray.500"
        >
          Poids max:
          <Text lineHeight="sm" color="gray.700" ml={1}>
            {btomg(args.maxSize)}mo
          </Text>
        </Flex>
        {args.minResolution && (
          <Flex
            as="span"
            flexDirection="row"
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Taille min:
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {args.minResolution.width}x{args.minResolution.height}px
            </Text>
          </Flex>
        )}
      </Flex>
    </FormGuideline>
    <Uploader
      value={value}
      className={className}
      ref={ref}
      onDrop={onDrop}
      {...args}
    />
  </FormControl>
)
Small.args = {
  size: UPLOADER_SIZE.SM,
}
export const Circle: Story<UploaderProps> = ({
  onDrop,
  className,
  value,
  ref,
  ...args
}) => (
  <FormControl {...args} maxWidth="184px">
    <FormLabel htmlFor="name" label="Label">
      {!args.required && (
        <Box as="span" color="gray.500">
          facultatif
        </Box>
      )}
    </FormLabel>
    <FormGuideline>
      <Flex direction="row" wrap="wrap" mb={2}>
        {args.format && (
          <Flex
            as="span"
            flexDirection="row"
            marginRight={1}
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Format supporté :
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {Array.isArray(args.format)
                ? args.format.join(', ')
                : args.format}
            </Text>
          </Flex>
        )}
        <Flex
          as="span"
          flexDirection="row"
          marginRight={1}
          fontSize={2}
          lineHeight="sm"
          color="gray.500"
        >
          Poids max:
          <Text lineHeight="sm" color="gray.700" ml={1}>
            {btomg(args.maxSize)}mo
          </Text>
        </Flex>
        {args.minResolution && (
          <Flex
            as="span"
            flexDirection="row"
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Taille min:
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {args.minResolution.width}x{args.minResolution.height}px
            </Text>
          </Flex>
        )}
      </Flex>
    </FormGuideline>
    <Uploader
      value={value}
      className={className}
      ref={ref}
      onDrop={onDrop}
      {...args}
    />
  </FormControl>
)
Circle.args = {
  size: UPLOADER_SIZE.SM,
  circle: true,
}

export const DefaultWithValue: Story<UploaderProps> = ({
  onDrop,
  className,
  value,
  ref,
  ...args
}) => (
  <FormControl {...args}>
    <FormLabel htmlFor="name" label="Label">
      {!args.required && (
        <Box as="span" color="gray.500">
          facultatif
        </Box>
      )}
    </FormLabel>
    <FormGuideline>
      <Flex direction="row" wrap="wrap" mb={2}>
        {args.format && (
          <Flex
            as="span"
            flexDirection="row"
            marginRight={1}
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Format supporté :
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {Array.isArray(args.format)
                ? args.format.join(', ')
                : args.format}
            </Text>
          </Flex>
        )}
        <Flex
          as="span"
          flexDirection="row"
          marginRight={1}
          fontSize={2}
          lineHeight="sm"
          color="gray.500"
        >
          Poids max:
          <Text lineHeight="sm" color="gray.700" ml={1}>
            {btomg(args.maxSize)}mo
          </Text>
        </Flex>
        {args.minResolution && (
          <Flex
            as="span"
            flexDirection="row"
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Taille min:
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {args.minResolution.width}x{args.minResolution.height}px
            </Text>
          </Flex>
        )}
      </Flex>
    </FormGuideline>
    <Uploader
      value={value}
      className={className}
      ref={ref}
      onDrop={onDrop}
      onRemove={() => {
        console.log('removed')
      }}
      {...args}
    />
  </FormControl>
)
DefaultWithValue.args = {
  size: UPLOADER_SIZE.LG,
  value: {
    id: 'ID1',
    name: 'Storybook Image',
    size: '1048576',
    url: 'https://unsplash.it/500/500',
    type: 'image/jpeg',
  },
}
export const MediumWithValue: Story<UploaderProps> = ({
  onDrop,
  className,
  value,
  ref,
  ...args
}) => (
  <FormControl {...args} maxWidth="240px">
    <FormLabel htmlFor="name" label="Label">
      {!args.required && (
        <Box as="span" color="gray.500">
          facultatif
        </Box>
      )}
    </FormLabel>
    <FormGuideline>
      <Flex direction="row" wrap="wrap" mb={2}>
        {args.format && (
          <Flex
            as="span"
            flexDirection="row"
            marginRight={1}
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Format supporté :
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {Array.isArray(args.format)
                ? args.format.join(', ')
                : args.format}
            </Text>
          </Flex>
        )}
        <Flex
          as="span"
          flexDirection="row"
          marginRight={1}
          fontSize={2}
          lineHeight="sm"
          color="gray.500"
        >
          Poids max:
          <Text lineHeight="sm" color="gray.700" ml={1}>
            {btomg(args.maxSize)}mo
          </Text>
        </Flex>
        {args.minResolution && (
          <Flex
            as="span"
            flexDirection="row"
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Taille min:
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {args.minResolution.width}x{args.minResolution.height}px
            </Text>
          </Flex>
        )}
      </Flex>
    </FormGuideline>
    <Uploader
      value={value}
      className={className}
      ref={ref}
      onDrop={onDrop}
      onRemove={() => {
        console.log('removed')
      }}
      {...args}
    />
  </FormControl>
)
MediumWithValue.args = {
  size: UPLOADER_SIZE.MD,
  value: {
    id: 'ID1',
    name: 'Storybook Image',
    size: '1048576',
    url: 'https://unsplash.it/500/500',
    type: 'image/jpeg',
  },
}
export const SmallWithValue: Story<UploaderProps> = ({
  onDrop,
  className,
  value,
  ref,
  ...args
}) => (
  <FormControl {...args} maxWidth="184px">
    <FormLabel htmlFor="name" label="Label">
      {!args.required && (
        <Box as="span" color="gray.500">
          facultatif
        </Box>
      )}
    </FormLabel>
    <FormGuideline>
      <Flex direction="row" wrap="wrap" mb={2}>
        {args.format && (
          <Flex
            as="span"
            flexDirection="row"
            marginRight={1}
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Format supporté :
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {Array.isArray(args.format)
                ? args.format.join(', ')
                : args.format}
            </Text>
          </Flex>
        )}
        <Flex
          as="span"
          flexDirection="row"
          marginRight={1}
          fontSize={2}
          lineHeight="sm"
          color="gray.500"
        >
          Poids max:
          <Text lineHeight="sm" color="gray.700" ml={1}>
            {btomg(args.maxSize)}mo
          </Text>
        </Flex>
        {args.minResolution && (
          <Flex
            as="span"
            flexDirection="row"
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Taille min:
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {args.minResolution.width}x{args.minResolution.height}px
            </Text>
          </Flex>
        )}
      </Flex>
    </FormGuideline>
    <Uploader
      value={value}
      className={className}
      ref={ref}
      onDrop={onDrop}
      onRemove={() => {
        console.log('removed')
      }}
      {...args}
    />
  </FormControl>
)
SmallWithValue.args = {
  size: UPLOADER_SIZE.SM,
  value: {
    id: 'ID1',
    name: 'Storybook Image',
    size: '1048576',
    url: 'https://unsplash.it/500/500',
    type: 'image/jpeg',
  },
}
export const CircleWithValue: Story<UploaderProps> = ({
  onDrop,
  className,
  value,
  ref,
  ...args
}) => (
  <FormControl {...args} maxWidth="184px">
    <FormLabel htmlFor="name" label="Label">
      {!args.required && (
        <Box as="span" color="gray.500">
          facultatif
        </Box>
      )}
    </FormLabel>
    <FormGuideline>
      <Flex direction="row" wrap="wrap" mb={2}>
        {args.format && (
          <Flex
            as="span"
            flexDirection="row"
            marginRight={1}
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Format supporté :
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {Array.isArray(args.format)
                ? args.format.join(', ')
                : args.format}
            </Text>
          </Flex>
        )}
        <Flex
          as="span"
          flexDirection="row"
          marginRight={1}
          fontSize={2}
          lineHeight="sm"
          color="gray.500"
        >
          Poids max:
          <Text lineHeight="sm" color="gray.700" ml={1}>
            {btomg(args.maxSize)}mo
          </Text>
        </Flex>
        {args.minResolution && (
          <Flex
            as="span"
            flexDirection="row"
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Taille min:
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {args.minResolution.width}x{args.minResolution.height}px
            </Text>
          </Flex>
        )}
      </Flex>
    </FormGuideline>
    <Uploader
      value={value}
      className={className}
      ref={ref}
      onDrop={onDrop}
      onRemove={() => {
        console.log('removed')
      }}
      {...args}
    />
  </FormControl>
)
CircleWithValue.args = {
  size: UPLOADER_SIZE.SM,
  circle: true,
  value: {
    id: 'ID1',
    name: 'Storybook Image',
    size: '1048576',
    url: 'https://unsplash.it/500/500',
    type: 'image/jpeg',
  },
}
export const MultipleWithValue: Story<UploaderProps> = ({
  onDrop,
  className,
  value,
  ref,
  onDropRejected: onDropRejectedFunction,
  onDropAccepted,
  onFileDialogCancel,
  ...args
}) => {
  const [errors, setErrors] = React.useState<string[]>([
    '- “image456.png” est trop lourd (12Mo).',
    '- “visuelfinalfinal3.psd” n’est pas supporté (.psd).',
  ])
  const onDropRejected = (fileRejections: FileRejection[]) => {
    const mainError = fileRejections[0].errors[0]
    const fileName = fileRejections[0].file.name
    const fileExtension = fileRejections[0].file.type.split('/')[1]
    if (args.maxSize && mainError.code === ErrorCode.FileTooLarge) {
      setErrors([
        ...errors,
        `- “${fileName}” est trop lourd (${btomg(
          fileRejections[0].file.size,
        )}).`,
      ])
    }
    if (args.format && mainError.code === 'file-invalid-type') {
      setErrors([
        ...errors,
        `- “${fileName}” n’est pas supporté (${fileExtension}).`,
      ])
    }
  }
  return (
    <FormControl isInvalid>
      <FormLabel htmlFor="name" label="Label">
        {!args.required && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <FormGuideline>
        <Flex direction="row" wrap="wrap" mb={2}>
          {args.format && (
            <Flex
              as="span"
              flexDirection="row"
              marginRight={1}
              fontSize={2}
              lineHeight="sm"
              color="gray.500"
            >
              Format supporté :
              <Text lineHeight="sm" color="gray.700" ml={1}>
                {Array.isArray(args.format)
                  ? args.format.join(', ')
                  : args.format}
              </Text>
            </Flex>
          )}
          <Flex
            as="span"
            flexDirection="row"
            marginRight={1}
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Poids max:
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {btomg(args.maxSize)}mo
            </Text>
          </Flex>
          {args.minResolution && (
            <Flex
              as="span"
              flexDirection="row"
              fontSize={2}
              lineHeight="sm"
              color="gray.500"
            >
              Taille min:
              <Text lineHeight="sm" color="gray.700" ml={1}>
                {args.minResolution.width}x{args.minResolution.height}px
              </Text>
            </Flex>
          )}
        </Flex>
      </FormGuideline>
      <Uploader
        value={value}
        className={className}
        {...args}
        ref={ref}
        onDrop={onDrop}
        onDropRejected={onDropRejected}
      />
      <FormErrorMessage>
        <InfoMessage variant="danger">
          <InfoMessage.Title>
            ⛔️ Les fichiers suivants n’ont pas pu être importés :
          </InfoMessage.Title>
          {errors.map(error => (
            <InfoMessage.Content color="red.900" key={error}>
              {error}
            </InfoMessage.Content>
          ))}
        </InfoMessage>
      </FormErrorMessage>
      {value && Array.isArray(value) && (
        <FilesList
          files={value}
          deleteFileLabel="Supprimer"
          onRemove={() => {
            console.log('deleted')
          }}
        />
      )}
    </FormControl>
  )
}

MultipleWithValue.args = {
  size: UPLOADER_SIZE.LG,
  showThumbnail: false,
  multiple: true,
  value: [
    {
      id: 'ID1',
      name: 'Storybook Image 1',
      size: '1048576',
      url: 'https://unsplash.it/500/500',
      type: 'image/jpeg',
    },
    {
      id: 'ID2',
      name: 'Storybook Image 2',
      size: '1048576',
      url: 'https://unsplash.it/500/500',
      type: 'image/jpeg',
    },
    {
      id: 'ID3',
      name: 'Storybook Image 3',
      size: '1048576',
      url: 'https://unsplash.it/500/500',
      type: 'image/jpeg',
    },
    {
      id: 'ID4',
      name: 'Storybook Image 4',
      size: '1048576',
      url: 'https://unsplash.it/500/500',
      type: 'image/jpeg',
    },
  ],
}

export const UniqueWithError: Story<UploaderProps> = ({
  onDrop,
  className,
  value,
  ref,
  onDropRejected: onDropRejectedFunction,
  onDropAccepted,
  onFileDialogCancel,
  ...args
}) => {
  const [error, setError] = React.useState<string>(
    'Le fichier est trop lourd (12Mo).',
  )
  const onDropRejected = (fileRejections: FileRejection[]) => {
    const mainError = fileRejections[0].errors[0]
    const fileName = fileRejections[0].file.name
    const fileExtension = fileRejections[0].file.type.split('/')[1]
    if (args.maxSize && mainError.code === ErrorCode.FileTooLarge) {
      setError(
        `⛔️  Le fichier est trop lourd (${btomg(
          fileRejections[0].file.size,
        )}).`,
      )
    }
    if (args.format && mainError.code === 'file-invalid-type') {
      setError(`“${fileName}” n’est pas supporté (${fileExtension}).`)
    }
  }

  return (
    <FormControl isInvalid>
      <FormLabel htmlFor="name" label="Label">
        {!args.required && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <FormGuideline>
        <Flex direction="row" wrap="wrap" mb={2}>
          {args.format && (
            <Flex
              as="span"
              flexDirection="row"
              marginRight={1}
              fontSize={2}
              lineHeight="sm"
              color="gray.500"
            >
              Format supporté :
              <Text lineHeight="sm" color="gray.700" ml={1}>
                {Array.isArray(args.format)
                  ? args.format.join(', ')
                  : args.format}
              </Text>
            </Flex>
          )}
          <Flex
            as="span"
            flexDirection="row"
            marginRight={1}
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Poids max:
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {btomg(args.maxSize)}mo
            </Text>
          </Flex>
          {args.minResolution && (
            <Flex
              as="span"
              flexDirection="row"
              fontSize={2}
              lineHeight="sm"
              color="gray.500"
            >
              Taille min:
              <Text lineHeight="sm" color="gray.700" ml={1}>
                {args.minResolution.width}x{args.minResolution.height}px
              </Text>
            </Flex>
          )}
        </Flex>
      </FormGuideline>
      <Uploader
        value={value}
        {...args}
        className={className}
        ref={ref}
        onDrop={onDrop}
        onRemove={() => {
          console.log('removed')
        }}
        onDropRejected={onDropRejected}
      />
      <FormErrorMessage>
        <InfoMessage variant="danger">
          <InfoMessage.Title
            as="h5"
            color="red.900"
            fontWeight={CapUIFontWeight.Semibold}
          >
            {error}
          </InfoMessage.Title>
        </InfoMessage>
      </FormErrorMessage>
    </FormControl>
  )
}
UniqueWithError.args = {
  value: {
    id: 'ID1',
    name: 'Storybook Image',
    size: '1048576',
    url: 'https://unsplash.it/500/500',
    type: 'image/jpeg',
  },
  required: false,
  minResolution: undefined,
  showThumbnail: true,
  multiple: false,
  maxSize: 1048576,
}

export const MultipleWithErrors: Story<UploaderProps> = ({
  onDrop,
  className,
  value,
  ref,
  onDropRejected: onDropRejectedFunction,
  onDropAccepted,
  onFileDialogCancel,
  ...args
}) => {
  const [errors, setErrors] = React.useState<string[]>([
    '- “image456.png” est trop lourd (12Mo).',
    '- “visuel final final3.psd” n’est pas supporté (.psd).',
  ])
  const onDropRejected = (fileRejections: FileRejection[]) => {
    const mainError = fileRejections[0].errors[0]
    const fileName = fileRejections[0].file.name
    const fileExtension = fileRejections[0].file.type.split('/')[1]
    if (args.maxSize && mainError.code === ErrorCode.FileTooLarge) {
      setErrors([
        ...errors,
        `- “${fileName}” est trop lourd (${btomg(
          fileRejections[0].file.size,
        )}).`,
      ])
    }
    if (args.format && mainError.code === 'file-invalid-type') {
      setErrors([
        ...errors,
        `- “${fileName}” n’est pas supporté (${fileExtension}).`,
      ])
    }
  }

  return (
    <FormControl isInvalid>
      <FormLabel htmlFor="name" label="Label">
        {!args.required && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <FormGuideline>
        <Flex direction="row" wrap="wrap" mb={2}>
          {args.format && (
            <Flex
              as="span"
              flexDirection="row"
              marginRight={1}
              fontSize={2}
              lineHeight="sm"
              color="gray.500"
            >
              Format supporté :
              <Text lineHeight="sm" color="gray.700" ml={1}>
                {Array.isArray(args.format)
                  ? args.format.join(', ')
                  : args.format}
              </Text>
            </Flex>
          )}
          <Flex
            as="span"
            flexDirection="row"
            marginRight={1}
            fontSize={2}
            lineHeight="sm"
            color="gray.500"
          >
            Poids max:
            <Text lineHeight="sm" color="gray.700" ml={1}>
              {btomg(args.maxSize)}mo
            </Text>
          </Flex>
          {args.minResolution && (
            <Flex
              as="span"
              flexDirection="row"
              fontSize={2}
              lineHeight="sm"
              color="gray.500"
            >
              Taille min:
              <Text lineHeight="sm" color="gray.700" ml={1}>
                {args.minResolution.width}x{args.minResolution.height}px
              </Text>
            </Flex>
          )}
        </Flex>
      </FormGuideline>
      <Uploader
        value={value}
        {...args}
        className={className}
        ref={ref}
        onDrop={onDrop}
        onDropRejected={onDropRejected}
      />
      <FormErrorMessage>
        <InfoMessage variant="danger">
          <InfoMessage.Title>
            ⛔️ Les fichiers suivants n’ont pas pu être importés :
          </InfoMessage.Title>
          {errors.map(error => (
            <InfoMessage.Content color="red.900" key={error}>
              {error}
            </InfoMessage.Content>
          ))}
        </InfoMessage>
      </FormErrorMessage>
    </FormControl>
  )
}
MultipleWithErrors.args = {
  required: false,
  minResolution: undefined,
  showThumbnail: false,
  multiple: true,
  maxSize: 1048576,
}
export const UniqueWithWarning: Story<UploaderProps> = ({
  onDrop: externalOnDrop,
  className,
  value,
  ref,
  onDropRejected: onDropRejectedFunction,
  onDropAccepted,
  onFileDialogCancel,
  minResolution,
  ...args
}) => {
  const [warning, setWarning] = React.useState<string | null>(
    '⚠️ La qualité de cette image est très faible.',
  )
  const onDrop = (acceptedFiles: File[]) => {
    if (!!minResolution && fileType(acceptedFiles[0].type)) {
      const img = new Image()

      img.onload = function () {
        if (
          img.width &&
          img.height &&
          minResolution.width &&
          minResolution.height
        ) {
          if (
            img.width < minResolution.width ||
            img.height < minResolution.height
          )
            setWarning('⚠️ La qualité de cette image est très faible.')
        }
      }
      img.src = URL.createObjectURL(acceptedFiles[0])
    }
    if (acceptedFiles[0].size > mgtob(1.5)) {
      setWarning(
        '🐌  Cette image est très grande et risque de ralentir votre site.',
      )
    }
  }

  return (
    <Flex direction="row" gap={2}>
      <FormControl isInvalid={false}>
        <FormLabel htmlFor="name" label="Label">
          {!args.required && (
            <Box as="span" color="gray.500">
              facultatif
            </Box>
          )}
        </FormLabel>
        <FormGuideline>
          <Flex direction="row" wrap="wrap" mb={2}>
            {args.format && (
              <Flex
                as="span"
                flexDirection="row"
                marginRight={1}
                fontSize={2}
                lineHeight="sm"
                color="gray.500"
              >
                Format supporté :
                <Text lineHeight="sm" color="gray.700" ml={1}>
                  {Array.isArray(args.format)
                    ? args.format.join(', ')
                    : args.format}
                </Text>
              </Flex>
            )}
            <Flex
              as="span"
              flexDirection="row"
              marginRight={1}
              fontSize={2}
              lineHeight="sm"
              color="gray.500"
            >
              Poids max:
              <Text lineHeight="sm" color="gray.700" ml={1}>
                {btomg(args.maxSize)}mo
              </Text>
            </Flex>
            {minResolution && (
              <Flex
                as="span"
                flexDirection="row"
                fontSize={2}
                lineHeight="sm"
                color="gray.500"
              >
                Taille min:
                <Text lineHeight="sm" color="gray.700" ml={1}>
                  {minResolution.width}x{minResolution.height}px
                </Text>
              </Flex>
            )}
          </Flex>
        </FormGuideline>
        <Uploader
          value={value}
          {...args}
          className={className}
          ref={ref}
          onDrop={onDrop}
          onDropAccepted={onDropAccepted}
          onFileDialogCancel={onFileDialogCancel}
          onDropRejected={onDropRejectedFunction}
          onRemove={() => {
            console.log('removed')
          }}
        />
        {warning && (
          <InfoMessage variant="warning">
            <InfoMessage.Title>{warning}</InfoMessage.Title>
          </InfoMessage>
        )}
      </FormControl>
      <FormControl isInvalid={false}>
        <FormLabel htmlFor="name" label="Label">
          {!args.required && (
            <Box as="span" color="gray.500">
              facultatif
            </Box>
          )}
        </FormLabel>
        <FormGuideline>
          <Flex direction="row" wrap="wrap" mb={2}>
            {args.format && (
              <Flex
                as="span"
                flexDirection="row"
                marginRight={1}
                fontSize={2}
                lineHeight="sm"
                color="gray.500"
              >
                Format supporté :
                <Text lineHeight="sm" color="gray.700" ml={1}>
                  {Array.isArray(args.format)
                    ? args.format.join(', ')
                    : args.format}
                </Text>
              </Flex>
            )}
            <Flex
              as="span"
              flexDirection="row"
              marginRight={1}
              fontSize={2}
              lineHeight="sm"
              color="gray.500"
            >
              Poids max:
              <Text lineHeight="sm" color="gray.700" ml={1}>
                {btomg(args.maxSize)}mo
              </Text>
            </Flex>
            {minResolution && (
              <Flex
                as="span"
                flexDirection="row"
                fontSize={2}
                lineHeight="sm"
                color="gray.500"
              >
                Taille min:
                <Text lineHeight="sm" color="gray.700" ml={1}>
                  {minResolution.width}x{minResolution.height}px
                </Text>
              </Flex>
            )}
          </Flex>
        </FormGuideline>
        <Uploader
          value={{
            id: 'ID1',
            name: 'Storybook Image',
            size: '1048576',
            url: 'https://unsplash.it/2500/2000',
            type: 'image/jpeg',
          }}
          {...args}
          onRemove={() => {
            console.log('removed')
          }}
          className={className}
          ref={ref}
          onDrop={onDrop}
          onDropAccepted={onDropAccepted}
          onFileDialogCancel={onFileDialogCancel}
          onDropRejected={onDropRejectedFunction}
        />
        {warning && (
          <InfoMessage variant="warning">
            <InfoMessage.Title>
              🐌 Cette image est très grande et risque de ralentir votre site.
            </InfoMessage.Title>
          </InfoMessage>
        )}
      </FormControl>
    </Flex>
  )
}
UniqueWithWarning.args = {
  required: false,
  minResolution: { width: 170, height: 170 },
  showThumbnail: true,
  multiple: false,
  value: {
    id: 'ID1',
    name: 'Storybook Image',
    size: '1048576',
    url: 'https://unsplash.it/170/100',
    type: 'image/jpeg',
  },
}
