import { Meta, Story } from '@storybook/react'

import { largeThumbnail, thumbnail } from '../../assets/images'
import { useIsMobile } from '../../hooks/useDeviceDetect'
import { CapUIFontSize, CapUIFontWeight } from '../../styles'
import { Box } from '../box'
import { Button } from '../button'
import { CapUIIcon } from '../icon'
import { Flex, Grid } from '../layout'
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
  CardRestricted,
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
    variantSize: {
      control: 'select',
      options: [undefined, 'small', 'medium', 'large'],
    },
    isArchived: { control: 'boolean' },
  },
}

export default meta

const longText = `Le Parc de Plaisance a besoin de se réinventer pour mieux répondre aux attentes des habitantes et habitants et devenir un véritable lieu de rencontres. C'est pourquoi, dans le cadre du Projet global Nouveau Plaisance, Nantes Métropole et la ville d'Orvault lancent une démarche de dialogue citoyen, où chaque voix compte. Ce projet se nourrit des idées, des expériences et des rêves des habitantes et habitants pour créer un parc plus adapté, plus vivant, plus accessible.`

const defaultCard = (
  args: CardProps,
  options?: { hasButton?: boolean; longText?: boolean },
) => (
  <Card {...args} hasButton={options?.hasButton}>
    <CardCover>
      <CardCoverImage src={largeThumbnail} />
      <CardStatusTag variantColor="success">
        <CardTagLeftIcon name={CapUIIcon.CommentO} />
        <CardTagLabel>Inscription Ouverte</CardTagLabel>
      </CardStatusTag>
    </CardCover>
    <CardContent
      primaryInfo="Primary info"
      secondaryInfo={
        options?.longText
          ? longText
          : `Le Parc de Plaisance a besoin de se réinventer pour mieux répondre aux attentes des habitantes et habitants et devenir un véritable lieu de rencontres.`
      }
      href="https://monsuperprojet.com"
      target="_blank"
    >
      {options?.hasButton && (
        <Box>
          <Button position="relative" zIndex={1}>
            Like me
          </Button>
        </Box>
      )}
      <CardTagList>
        <CardTag srOnlyText="contributions">
          <CardTagLeftIcon name={CapUIIcon.ThumbUpO} />
          <CardTagLabel>623.5 K</CardTagLabel>
        </CardTag>
        <CardTag srOnlyText="commentaires">
          <CardTagLeftIcon name={CapUIIcon.BubbleO} />
          <CardTagLabel>7 000</CardTagLabel>
        </CardTag>
        <CardTag
          srOnlyText="participants"
          tooltipLabel="Ca fait beaucoup de participants wow"
        >
          <CardTagLeftIcon name={CapUIIcon.UserO} />
          <CardTagLabel>1.5M</CardTagLabel>
        </CardTag>
      </CardTagList>
    </CardContent>
  </Card>
)

export const Default: Story<CardProps> = args => (
  <Flex gap="md" flexDirection="column">
    <Box
      as="h2"
      fontSize={CapUIFontSize.DisplaySmall}
      fontWeight={CapUIFontWeight.Semibold}
    >
      Default
    </Box>
    <Flex gap="md">
      {defaultCard({ ...args, variantSize: 'large' }, { longText: true })}
      {defaultCard(
        { ...args, variantSize: 'large' },
        { hasButton: true, longText: false },
      )}
    </Flex>
    <Flex gap="md">
      {defaultCard({ ...args, variantSize: 'medium' }, { longText: true })}
      {defaultCard(
        { ...args, variantSize: 'medium' },
        { hasButton: true, longText: false },
      )}
    </Flex>
    <Flex gap="md">
      {defaultCard({ ...args, variantSize: 'small' }, { longText: true })}
      {defaultCard(
        { ...args, variantSize: 'small' },
        { hasButton: true, longText: false },
      )}
    </Flex>
    <Box
      as="h2"
      fontSize={CapUIFontSize.DisplaySmall}
      fontWeight={CapUIFontWeight.Semibold}
    >
      Empty placeholder
    </Box>
    <Card {...args}>
      <CardCover>
        <CardCoverPlaceholder />
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
    <Box
      as="h2"
      fontSize={CapUIFontSize.DisplaySmall}
      fontWeight={CapUIFontWeight.Semibold}
    >
      With placeholder
    </Box>
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
  </Flex>
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
          <CardRestricted srOnlyText="accès restreint" />
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

export const Layouts: Story<CardProps> = args => {
  const isMobile = useIsMobile()
  return (
    <Flex gap="md" flexDirection="column">
      <Box
        as="h2"
        fontSize={CapUIFontSize.DisplaySmall}
        fontWeight={CapUIFontWeight.Semibold}
      >
        VariantSized layout vertical
      </Box>
      <Grid
        gap="lg"
        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      >
        <Cards {...args} variantSize="medium" />
      </Grid>
      <Box
        as="h2"
        fontSize={CapUIFontSize.DisplaySmall}
        fontWeight={CapUIFontWeight.Semibold}
      >
        VariantSized layout horizontal
      </Box>
      <Flex gap="md" flexDirection="column">
        <Cards {...args} variantSize="medium" format="horizontal" />
      </Flex>
      <Box
        as="h2"
        fontSize={CapUIFontSize.DisplaySmall}
        fontWeight={CapUIFontWeight.Semibold}
      >
        Grid layout
      </Box>
      <Grid
        gap="lg"
        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      >
        <Cards {...args} />
      </Grid>
      <Box
        as="h2"
        fontSize={CapUIFontSize.DisplaySmall}
        fontWeight={CapUIFontWeight.Semibold}
      >
        Horizontal layout
      </Box>
      <Grid gap="lg">
        <Cards format="horizontal" />
      </Grid>
      <Box
        as="h2"
        fontSize={CapUIFontSize.DisplaySmall}
        fontWeight={CapUIFontWeight.Semibold}
      >
        No cover layout
      </Box>
      <Grid gap="lg">
        <Card format="vertical">
          <CardContent
            primaryInfo="Aménagement durable de la rue de Vern"
            secondaryInfo="Créer de petits passages entre les propriétés (notamment jardins) pour les hérissons qui parcourent jusqu'à 4 km par nuit."
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
            </CardTagList>
          </CardContent>
        </Card>
        <Card format="vertical">
          <CardContent
            primaryInfo="Jardins Familiaux du Pâtis-des-Friches"
            secondaryInfo="Mettre des parcelles à la disposition de famille en respectant la nature.Echange sur les méthodes de culture en respectant la biodiversité sans produits phytosanitaires."
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
            </CardTagList>
          </CardContent>
        </Card>
      </Grid>
      <Box
        as="h2"
        fontSize={CapUIFontSize.DisplaySmall}
        fontWeight={CapUIFontWeight.Semibold}
      >
        Mixed layout
      </Box>
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
    </Flex>
  )
}
