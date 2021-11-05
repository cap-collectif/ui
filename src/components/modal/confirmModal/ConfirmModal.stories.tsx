import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Button } from '../../button'
import { CapUIIcon } from '../../icon'
import { Flex } from '../../layout/Flex'
import { toast } from '../../toast'
import { Heading, Text } from '../../typography'
import { CapUIModalSize, Modal, ModalProps } from '../index'
import ConfirmModal from './ConfirmModal'

const meta: Meta<ModalProps> = {
  title: 'Library/Modal/ConfirmModal',
  component: ConfirmModal,
  args: {
    disclosure: <Button>Click me</Button>,
    size: CapUIModalSize.Md,
    ariaLabel: 'Genshin Impact',
  },
  argTypes: {
    disclosure: {
      control: {
        disable: true,
      },
    },
    size: { control: 'select', options: Object.values(CapUIModalSize) },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}
export default meta

export const main: Story<ModalProps> = args => (
  <Flex gridGap={2} wrap="wrap" align="center">
    <Modal {...args}>
      {({ hide }) => (
        <>
          <Modal.Header>
            <Heading>Genshin impact</Heading>
          </Modal.Header>
          <Modal.Body>
            <Text>
              <b>Genshin Impact</b> est un jeu vidéo de type <em>action-RPG</em>{' '}
              développé par miHoYo
            </Text>
            <Text mt={2}>
              {`Dans un monde fantastique nommé Teyvat, certains individus choisis par les dieux se sont
            vu attribuer un Œil Divin — une gemme qui confère à son porteur la capacité de contrôler
            un des sept éléments. Le joueur commence son aventure en tant que Voyageur ou Voyageuse
            dont l'origine est inconnue, à la recherche d'un(e) proche disparu(e). Au cours de
            l'aventure, le joueur a la possibilité de contrôler plusieurs autres personnages qu'il
            rencontre lors de son périple, chacun ayant une personnalité unique et des capacités`}
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <ConfirmModal
              size={CapUIModalSize.Md}
              onConfirm={() => {
                toast({
                  variant: 'success',
                  content: 'onConfirm',
                })
                hide()
              }}
              onCancel={() => {
                toast({
                  variant: 'success',
                  content: 'onCancel',
                })
              }}
              options={{
                cancelButton: {
                  content: 'Annuler',
                },
                confirmButton: {
                  content: 'Supprimer',
                  props: {
                    leftIcon: CapUIIcon.Trash,
                  },
                },
              }}
              title="Tu en es bien sûr ?"
              disclosure={
                <Button
                  width={['100%', 'auto']}
                  justifyContent={['center', 'flex-start']}
                  variantSize="medium"
                  variant="primary"
                  variantColor="danger"
                  leftIcon={CapUIIcon.Trash}
                  color="gray.400"
                >
                  Supprimer Genshin Impact
                </Button>
              }
              ariaLabel="Confirmer la suppression"
            />
          </Modal.Footer>
        </>
      )}
    </Modal>
  </Flex>
)
main.storyName = 'Default'
main.args = {}

export const withPromisesCallbacks: Story<ModalProps> = args => (
  <Flex gridGap={2} wrap="wrap" align="center">
    <Modal {...args}>
      {({ hide }) => (
        <>
          <Modal.Header>
            <Heading>Genshin impact</Heading>
          </Modal.Header>
          <Modal.Body>
            <Text>
              <b>Genshin Impact</b> est un jeu vidéo de type <em>action-RPG</em>{' '}
              développé par miHoYo
            </Text>
            <Text mt={2}>
              {`Dans un monde fantastique nommé Teyvat, certains individus choisis par les dieux se sont
            vu attribuer un Œil Divin — une gemme qui confère à son porteur la capacité de contrôler
            un des sept éléments. Le joueur commence son aventure en tant que Voyageur ou Voyageuse
            dont l'origine est inconnue, à la recherche d'un(e) proche disparu(e). Au cours de
            l'aventure, le joueur a la possibilité de contrôler plusieurs autres personnages qu'il
            rencontre lors de son périple, chacun ayant une personnalité unique et des capacités`}
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <ConfirmModal
              size={CapUIModalSize.Md}
              onConfirm={async () => {
                await new Promise<void>(resolve => setTimeout(resolve, 1000))
                toast({
                  variant: 'success',
                  content: 'onConfirm',
                })
                hide()
              }}
              options={{
                cancelButton: {
                  content: 'Annuler',
                },
                confirmButton: {
                  content: 'Supprimer',
                  props: {
                    leftIcon: CapUIIcon.Trash,
                  },
                },
              }}
              title="Tu en es bien sûr ?"
              disclosure={
                <Button
                  width={['100%', 'auto']}
                  justifyContent={['center', 'flex-start']}
                  variantSize="medium"
                  variant="primary"
                  variantColor="danger"
                  leftIcon={CapUIIcon.Trash}
                  color="gray.400"
                >
                  Supprimer Genshin Impact
                </Button>
              }
              ariaLabel="Confirmer la suppression"
            />
          </Modal.Footer>
        </>
      )}
    </Modal>
  </Flex>
)
