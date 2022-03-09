import * as React from 'react';
import DetailDrawer, {DetailDrawerProps} from './DetailDrawer';
import Flex from '../layout/Flex';
import Button from '../button/Button';
import { Text } from '../typography'
import Menu from '../menu/Menu'
import { Meta, Story } from '@storybook/react'

const meta: Meta =  { title: 'Library/DetailDrawer', component: DetailDrawer };
export default meta

const Template: Story<DetailDrawerProps> = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Flex>
      <Button variant="link" onClick={() => {
        setOpen(true)
      }}>
        More details
      </Button>
      <DetailDrawer isOpen={open} onClose={() => {
        setOpen(false)
      }}>
        <DetailDrawer.Header textAlign="center" justify="space-between">
          <Text fontWeight="bold">Drawer Title</Text>
          <Menu
            disclosure={
              <Button variant="tertiary">Actions</Button>
            }
          >
            <Menu.List>
              <Menu.Item>Report</Menu.Item>
            </Menu.List>
          </Menu>
        </DetailDrawer.Header>
        <DetailDrawer.Body>
          <Text>Drawer Body</Text>
        </DetailDrawer.Body>
      </DetailDrawer>
    </Flex>
  );
};

export const Default = Template.bind({});