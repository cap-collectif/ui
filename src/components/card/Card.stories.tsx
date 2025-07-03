import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { largeThumbnail, thumbnail } from '../../assets/images'
import { useIsMobile } from '../../hooks/useDeviceDetect'
import { CapUIIcon } from '../icon'
import { Grid } from '../layout'
import {
  Card,
  CardCover,
  CardCoverImage,
  CardContent,
  CardProps,
  CardTag,
  CardTagLabel,
  CardTagLeftIcon,
  CardCoverPlaceholder,
  CardTagList,
  CardStatusTag,
} from './'
import './CardCover'

const meta: Meta<CardProps> = {
  title: 'Library/Card',
  component: Card,
  args: { format: 'vertical' },
  parameters: {
    controls: { expanded: true },
    backgrounds: { default: 'light' },
  },
  argTypes: {
    format: { control: 'select', options: ['horizontal', 'vertical'] },
  },
}

export default meta

export const Default: Story<CardProps> = args => (
  <Card {...args}>
    <CardCover>
      <CardCoverImage src={largeThumbnail} />
      <CardStatusTag variantColor="success">
        <CardTagLeftIcon name={CapUIIcon.CommentO} />
        <CardTagLabel>Inscription Ouverte</CardTagLabel>
      </CardStatusTag>
    </CardCover>
    <CardContent
      primaryInfo="Primary info"
      secondaryInfo="secondary info"
      href="https://monsuperprojet.com"
      target="_blank"
    >
      <CardTagList>
        <CardTag srOnlyText="contributions">
          <CardTagLeftIcon name={CapUIIcon.ThumbUpO} />
          <CardTagLabel>623.5 K</CardTagLabel>
        </CardTag>
        <CardTag srOnlyText="commentaires">
          <CardTagLeftIcon name={CapUIIcon.BubbleO} />
          <CardTagLabel>7 000</CardTagLabel>
        </CardTag>
        <CardTag srOnlyText="participants">
          <CardTagLeftIcon name={CapUIIcon.UserO} />
          <CardTagLabel>1.5M</CardTagLabel>
        </CardTag>
      </CardTagList>
    </CardContent>
  </Card>
)

export const WithPlaceholder: Story<CardProps> = args => (
  <Card {...args}>
    <CardCover>
      <CardCoverPlaceholder icon={CapUIIcon.Bike} color="#b71c1c" />
      <CardStatusTag variantColor="infoGray">
        <CardTagLeftIcon name={CapUIIcon.CheckO} />
        <CardTagLabel>Terminé</CardTagLabel>
      </CardStatusTag>
    </CardCover>
    <CardContent
      primaryInfo="Primary info"
      secondaryInfo="secondary info"
      href="https://monsuperprojet.com"
      target="_blank"
    />
  </Card>
)

const Cards = ({ crop, ...args }: any) => (
  <>
    <Card {...args}>
      <CardCover>
        <CardCoverImage src={largeThumbnail} />
        <CardStatusTag variantColor="success">
          <CardTagLeftIcon name={CapUIIcon.CommentO} />
          <CardTagLabel>Inscription Ouverte</CardTagLabel>
        </CardStatusTag>
      </CardCover>
      <CardContent
        primaryInfo="Primary info"
        secondaryInfo="secondary info"
        href="https://monsuperprojet.com"
        target="_blank"
      >
        <CardTagList>
          <CardTag srOnlyText="contributions">
            <CardTagLeftIcon name={CapUIIcon.ThumbUpO} />
            <CardTagLabel>623.5 K</CardTagLabel>
          </CardTag>
          <CardTag srOnlyText="commentaires">
            <CardTagLeftIcon name={CapUIIcon.BubbleO} />
            <CardTagLabel>7 000</CardTagLabel>
          </CardTag>
          <CardTag srOnlyText="participants">
            <CardTagLeftIcon name={CapUIIcon.UserO} />
            <CardTagLabel>1.5M</CardTagLabel>
          </CardTag>
        </CardTagList>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardCover>
        <CardCoverPlaceholder icon={CapUIIcon.Bike} color="#b71c1c" />
        <CardStatusTag variantColor="infoGray">
          <CardTagLeftIcon name={CapUIIcon.CheckO} />
          <CardTagLabel>Terminé</CardTagLabel>
        </CardStatusTag>
      </CardCover>
      <CardContent
        primaryInfo="Parking à vélos"
        secondaryInfo="J'ai du mal à me garer c'est assez relou bref faites un truc non"
        href="https://monsuperprojet.com"
        target="_blank"
      />
    </Card>
    {!crop ? (
      <Card {...args}>
        <CardCover>
          <CardCoverImage src={thumbnail} />
          <CardStatusTag variantColor="danger">
            <CardTagLeftIcon name={CapUIIcon.Police} />
            <CardTagLabel>Refusé</CardTagLabel>
          </CardStatusTag>
        </CardCover>
        <CardContent
          primaryInfo="Raser la forêt"
          href="https://monsuperprojet.com"
          target="_blank"
        />
      </Card>
    ) : null}
  </>
)

export const GridLayout: Story<CardProps> = args => (
  <Grid gap="lg" templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}>
    <Cards {...args} />
  </Grid>
)

export const HorizontalLayout: Story<CardProps> = args => (
  <Grid gap="lg">
    <Cards {...args} />
  </Grid>
)
HorizontalLayout.args = { format: 'horizontal' }

export const MixedLayout: Story<CardProps> = args => {
  const isMobile = useIsMobile()
  return (
    <Grid gap="lg" maxWidth="1280px" px="lg">
      <Card format={isMobile ? 'vertical' : 'horizontal'}>
        <CardCover>
          <CardCoverPlaceholder icon={CapUIIcon.Bench} color="#1E88E5" />
          <CardStatusTag variantColor="infoGray">
            <CardTagLeftIcon name={CapUIIcon.CheckO} />
            <CardTagLabel>Terminé</CardTagLabel>
          </CardStatusTag>
        </CardCover>
        <CardContent
          primaryInfo="Lancement de la démarche participative “La Bande Plaisante” : réinventons ensemble le parc de Plaisance à Orvault !"
          secondaryInfo="Le Parc de Plaisance a besoin de se réinventer pour mieux répondre aux attentes des habitantes et habitants et devenir un véritable lieu de rencontres. C’est pourquoi, dans le cadre du Projet global Nouveau Plaisance, Nantes Métropole et la ville d’Orvault lancent une démarche de dialogue citoyen, où chaque voix compte. Ce projet se nourrit des idées, des expériences et des rêves des habitantes et habitants pour créer un parc plus adapté, plus vivant, plus accessible."
          href="https://monsuperprojet.com"
          target="_blank"
        />
      </Card>
      <Grid gap="lg" templateColumns={['1fr', 'repeat(2, 1fr)']}>
        <Cards {...args} crop />
      </Grid>
      <Grid
        gap="lg"
        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      >
        <Cards {...args} />
        <Cards {...args} />
      </Grid>
    </Grid>
  )
}
