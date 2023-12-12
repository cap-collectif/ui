import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Box } from '../box/Box'
import { CapInputSize, FormControl, RadioGroup } from '../form'
import FormLabel from '../form/formLabel/FormLabel'
import Input from '../form/input/Input'
import Radio from '../form/radio/Radio'
import TextArea from '../form/textArea/TextArea'
import { Flex } from '../layout'
import { Tabs, TabsProps } from './'

const meta: Meta<TabsProps> = {
  title: 'Library/Tabs',
  component: Tabs,
  argTypes: {
    children: { control: { disable: true }, table: { disable: true } },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<TabsProps> = args => {
  const [value, setValue] = React.useState('')

  return (
    <Flex
      direction="column"
      width="900px"
      justifyContent="flexStart"
      alignItems="flexStart"
      height="800px"
      px="50px"
    >
      <Tabs {...args}>
        <Tabs.ButtonList ariaLabel="Tabs example">
          <Tabs.Button id="tab1">Tab1</Tabs.Button>
          <Tabs.Button id="tab2">Tab2</Tabs.Button>
          <Tabs.Button id="tab3">Tab3</Tabs.Button>
        </Tabs.ButtonList>
        <Tabs.PanelList>
          <Tabs.Panel>
            <FormControl width="100%">
              <FormLabel label="Introduction" />
              <TextArea
                placeholder={'placeholder'}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setValue(e.target.value)
                }
              />
            </FormControl>
          </Tabs.Panel>
          <Tabs.Panel>
            <FormControl>
              <FormLabel htmlFor="name" label="Label">
                <Box as="span" color="gray.500">
                  facultatif
                </Box>
              </FormLabel>
              <Input
                width="300px"
                placeholder={'placeholder'}
                id="name"
                variantSize={CapInputSize.Sm}
              />
            </FormControl>
            <FormControl width="100%">
              <FormLabel label="Introduction" />
              <TextArea
                placeholder={'placeholder'}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setValue(e.target.value)
                }
              />
            </FormControl>
          </Tabs.Panel>
          <Tabs.Panel>
            <FormControl>
              <FormLabel htmlFor="name" label="Label">
                <Box as="span" color="gray.500">
                  facultatif
                </Box>
              </FormLabel>
              <Input
                width="300px"
                placeholder={'placeholder'}
                id="name"
                variantSize={CapInputSize.Sm}
              />
            </FormControl>
            <FormControl width="500px">
              <FormLabel label="User selection" />
              <RadioGroup>
                <Radio id="radio" name="radio">
                  Check me
                </Radio>
                <Radio id="radio-2" name="radio">
                  Check me 2
                </Radio>
                <Radio id="radio-long" name="radio">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque tortor, cursus at dapibus at, pulvinar in turpis. Donec
                  at augue aliquam, condimentum velit id, pellentesque ante.
                  Duis et libero neque.
                </Radio>
                <Radio id="radio-3" name="radio">
                  Check me 3
                </Radio>
              </RadioGroup>
            </FormControl>
          </Tabs.Panel>
        </Tabs.PanelList>
      </Tabs>
    </Flex>
  )
}

export const withDisabledTab: Story<TabsProps> = args => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = React.useState('')

  return (
    <Flex
      direction="column"
      width="900px"
      justifyContent="flexStart"
      alignItems="flexStart"
      height="800px"
      px="50px"
    >
      <Tabs {...args}>
        <Tabs.ButtonList ariaLabel="Tabs example">
          <Tabs.Button id="tab1">Tab1</Tabs.Button>
          <Tabs.Button disabled id="tab2">
            Tab2
          </Tabs.Button>
          <Tabs.Button id="tab3">Tab3</Tabs.Button>
        </Tabs.ButtonList>
        <Tabs.PanelList>
          <Tabs.Panel>
            <FormControl width="100%">
              <FormLabel label="Introduction" />
              <TextArea
                placeholder={'placeholder'}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setValue(e.target.value)
                }
              />
            </FormControl>
          </Tabs.Panel>
          <Tabs.Panel>
            <FormControl>
              <FormLabel htmlFor="name" label="Label">
                <Box as="span" color="gray.500">
                  facultatif
                </Box>
              </FormLabel>
              <Input
                width="300px"
                placeholder={'placeholder'}
                id="name"
                variantSize={CapInputSize.Sm}
              />
            </FormControl>
            <FormControl width="100%">
              <FormLabel label="Introduction" />
              <TextArea
                placeholder={'placeholder'}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setValue(e.target.value)
                }
              />
            </FormControl>
          </Tabs.Panel>
          <Tabs.Panel>
            <FormControl>
              <FormLabel htmlFor="name" label="Label">
                <Box as="span" color="gray.500">
                  facultatif
                </Box>
              </FormLabel>
              <Input
                width="300px"
                placeholder={'placeholder'}
                id="name"
                variantSize={CapInputSize.Sm}
              />
            </FormControl>
            <FormControl width="500px">
              <FormLabel label="User selection" />
              <RadioGroup>
                <Radio id="radio" name="radio">
                  Check me
                </Radio>
                <Radio id="radio-2" name="radio">
                  Check me 2
                </Radio>
                <Radio id="radio-long" name="radio">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque tortor, cursus at dapibus at, pulvinar in turpis. Donec
                  at augue aliquam, condimentum velit id, pellentesque ante.
                  Duis et libero neque.
                </Radio>
                <Radio id="radio-3" name="radio">
                  Check me 3
                </Radio>
              </RadioGroup>
            </FormControl>
          </Tabs.Panel>
        </Tabs.PanelList>
      </Tabs>
    </Flex>
  )
}
