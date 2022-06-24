# Changelog

The Changelog gives an overview of the meaningful changes we've made to CapUI  
as we keep driving for better performance and best-in-class developer experience.

To better understand the changelog, here are some legends we use:

- 💥 Breaking
- 🆕 Feature
- 🐛 Bug fix
- 🛠 Refactor
- 💄 Style

## 1.4.0

`2022-06-24`

- 🛠 Rework `MultiStepModal` [#286](https://github.com/cap-collectif/ui/pull/286)

### BREAKING CHANGES
- [#286](https://github.com/cap-collectif/ui/pull/286) We changed the way to use the `MultiStepModal`, this one is more flexible.

## 1.3.3

`2022-06-14`

- 🆕 Improve `ButtonQuickAction` (polymorphic) [#281](https://github.com/cap-collectif/ui/pull/281)
- 🆕 Adds MAP and PROHIBITED icons to `SpotIcon` [#280](https://github.com/cap-collectif/ui/pull/280)

## 1.3.2

`2022-06-02`

- 🐛 Fix register steps `MultiStepModal` [#276](https://github.com/cap-collectif/ui/pull/276)

## 1.3.1

`2022-05-10`

- 🐛 Fix `Dropdown` export [#269](https://github.com/cap-collectif/ui/pull/269)

## 1.3.0

`2022-05-10`

- 🆕 Add `Dropdown` component [#267](https://github.com/cap-collectif/ui/pull/267)
- 🐛 Fix `DateInput` Component to display a single month [#265](https://github.com/cap-collectif/ui/pull/265)

## 1.2.0

`2022-04-27`

- 🆕 Improve `Search` to use it as field with form control [#260](https://github.com/cap-collectif/ui/pull/260)
- 🆕 Improve `Search` component with suggestions [#257](https://github.com/cap-collectif/ui/pull/257)
- 🆕 Add `DateInput` component [#258](https://github.com/cap-collectif/ui/pull/258)
- 🐛 Fix `Modal` props `onOpen` & `onClose` [#256](https://github.com/cap-collectif/ui/pull/256)

## 1.1.3

`2022-04-12`

- 🛠 `MultiStepModal` pass context actions as props to children [#254](https://github.com/cap-collectif/ui/pull/254)

## 1.1.2

`2022-04-11`

- 🛠 Export `useMultiStepModal` from `MultiStepModal`  [#250](https://github.com/cap-collectif/ui/pull/250)

## 1.1.1

`2022-04-04`

- 💄 Style `InputGroup` to have FormGuideline [#248](https://github.com/cap-collectif/ui/pull/248)
- 💥 Deleted `PhoneNumber` Component [#248](https://github.com/cap-collectif/ui/pull/248)

## 1.1.0

`2022-04-04`

- 🆕 Add `Radio` component [#246](https://github.com/cap-collectif/ui/pull/246)

## 1.0.5

`2022-03-31`

- 🐛 Adds portal option on mobile modals [#244](https://github.com/cap-collectif/ui/pull/244)

## 1.0.4

`2022-03-29`

- 🐛 Make info props facultative on MultiStepModal [#239](https://github.com/cap-collectif/ui/pull/239)
- 🐛 Fix generated types of components [#238](https://github.com/cap-collectif/ui/pull/238)
- 🐛 Fix overlay of `Modal` [#236](https://github.com/cap-collectif/ui/pull/236)

## 1.0.3

`2022-03-14`

- 🐛 Adds the react-select portal zIndex on the enum  [#233](https://github.com/cap-collectif/ui/pull/233)
- 🐛 Allow to manually set the modal overlay zIndex [#232](https://github.com/cap-collectif/ui/pull/232)

## 1.0.2

`2022-03-08`

- 🆕 Add onClose prop on `DateRange` [#226](https://github.com/cap-collectif/ui/pull/226)
- 💄 Fix outline on `Popover` [#228](https://github.com/cap-collectif/ui/pull/228)

## 1.0.1

`2022-03-04`

- 🆕 Add some props on `DateRange` [#223](https://github.com/cap-collectif/ui/pull/223)

## 1.0.0

`2022-03-01`

 🎉 🎉 🎉 First release into Open Source with version 1.0.0 of our design system 🎉🎉 🎉

## 0.9.6

`2022-02-21`

- 🐛 Fix hover of `Tooltip` [#215](https://github.com/cap-collectif/ui/pull/215)
- 🐛 Fix render of `Modal` controlled [#215](https://github.com/cap-collectif/ui/pull/215)
- 🐛 Fix some zIndex values [#215](https://github.com/cap-collectif/ui/pull/215)

## 0.9.5

`2022-02-18`

- 🐛 Fix props rest of `Switch` & `Checkbox` [#212](https://github.com/cap-collectif/ui/pull/212)
- 🐛 Fix zIndex of `Tooltip` [#212](https://github.com/cap-collectif/ui/pull/212)

## 0.9.4

`2022-02-16`

- 🐛 Fix Input Group Component [#209](https://github.com/cap-collectif/ui/pull/209)

## 0.9.3

`2022-02-15`

- 🐛 Export uploader type `FileInfo` [#206](https://github.com/cap-collectif/ui/pull/206)
- 🐛 Ajout de la prop `type` button par défaut pour le `MenuItem` [#206](https://github.com/cap-collectif/ui/pull/206)
- 🐛 Fix PhoneNumber Export [#205](https://github.com/cap-collectif/ui/pull/205)

## 0.9.2

`2022-02-10`

- 🆕 Add `PhoneNumber` component [#199](https://github.com/cap-collectif/ui/pull/199)
- 🆕 Add `MultiStepModal` component [#200](https://github.com/cap-collectif/ui/pull/200)
- 🐛 Fix non-scrollable modal on iOS (Safari) [#201](https://github.com/cap-collectif/ui/pull/201)

## 0.9.1

`2022-01-31`

- 🆕 Export enum size `Uploader` [#196](https://github.com/cap-collectif/ui/pull/196)
- 🆕 Add new variant `Modal` XL [#196](https://github.com/cap-collectif/ui/pull/196)
- 🐛 Set baseId for disclosure too (`Modal`/`Popover`/`Tooltip`) [#196](https://github.com/cap-collectif/ui/pull/196)

## 0.9.0

`2022-01-25`

- 🆕 Add `CodeInput` component [#187](https://github.com/cap-collectif/ui/pull/187)
- 🆕 Add `InputGroup` component [#189](https://github.com/cap-collectif/ui/pull/189)

## 0.8.0

`2022-01-25`

- 🐛 Export enum's `Accordion` [#186](https://github.com/cap-collectif/ui/pull/186)
- 🐛 Fix type of children's `Accordion` to accept only one child [#186](https://github.com/cap-collectif/ui/pull/186)
- 🆕 Export type MenuValue of `Menu` component [#186](https://github.com/cap-collectif/ui/pull/186)
- 🆕 Add icon lock open [#186](https://github.com/cap-collectif/ui/pull/186)
- 🆕 Add baseId prop on Modal, Tooltip and Popover [#184](https://github.com/cap-collectif/ui/pull/184)

### BREAKING CHANGES
- [#190](https://github.com/cap-collectif/ui/pull/190) We changed the way we pass label to `Checkbox`. It used to be passed only as a prop, now it can be passed as children, so: 
```jsx
// Before
<Checkbox id="checkbox-id" label="Hello world" />

// After
<Checkbox id="checkbox-id">Hello world</Checkbox>
```


## 0.7.2

`2022-01-12`

- 💄 Fix switch [#179](https://github.com/cap-collectif/ui/pull/179)
- 🐛 InfiniteScroll on Array : adds ref [#180](https://github.com/cap-collectif/ui/pull/180)
- 💄 Set react-select menu on a portal [#178](https://github.com/cap-collectif/ui/pull/178)

## 0.7.1

`2021-12-30`

- 💄 Fix pseudo element [#173](https://github.com/cap-collectif/ui/pull/173)

## 0.7.0

`2021-12-30`

- 🆕 Add `Switch` component [#171](https://github.com/cap-collectif/ui/pull/171)
- 💄 Fix padding `AccordionButton` [#171](https://github.com/cap-collectif/ui/pull/171)

## 0.6.0

`2021-12-24`

- 🆕 Add `Accordion` component [#67](https://github.com/cap-collectif/ui/pull/67)
- 💄 Delete `Xl` size on `Modal` [#167](https://github.com/cap-collectif/ui/pull/167)
- 💄 Fix height on `Modal` [#167](https://github.com/cap-collectif/ui/pull/167)
- 💄 Export `CheckboxGroup` [#164](https://github.com/cap-collectif/ui/pull/164)
- 🎄 Merry Christmas [That annoying Mariah Carey song](https://www.youtube.com/watch?v=aAkMkVFwAoo)

## 0.5.0

`2021-12-21`

- 💄 Fix height on `Modal` [#160](https://github.com/cap-collectif/ui/pull/160)
- 🆕 Add `zIndex` in theme [#160](https://github.com/cap-collectif/ui/pull/160)
- 🆕 Add default font-family on `Flex` [#160](https://github.com/cap-collectif/ui/pull/160)
- 🆕 Add `menu-arrow` icon [#160](https://github.com/cap-collectif/ui/pull/160)
- 💄 Fix cursor apparence of `Button` [#160](https://github.com/cap-collectif/ui/pull/160)
- 🆕 Add `Checkbox` component [#159](https://github.com/cap-collectif/ui/pull/159)
- 💄 Several fix for `ButtonQuickAction` [#148](https://github.com/cap-collectif/ui/pull/148)
- 🆕 Add `Uploader` component [#122](https://github.com/cap-collectif/ui/pull/122)
- 💄 Several fix for `TextArea` [#141](https://github.com/cap-collectif/ui/pull/141)
- 💄 Several fix for `InputNumber` [#142](https://github.com/cap-collectif/ui/pull/142)
- 💄 Fix animation of `InlineSelect` [#149](https://github.com/cap-collectif/ui/pull/149)
- 💄 Several fix for `InfoMessage` [#150](https://github.com/cap-collectif/ui/pull/150) [#160](https://github.com/cap-collectif/ui/pull/160)

## 0.4.2

`2021-12-06`

- 🆕 Add show controls on modal [#143](https://github.com/cap-collectif/ui/pull/143)

## 0.4.1

`2021-12-03`

- 🐛 Fix circular dependencies [#139](https://github.com/cap-collectif/ui/pull/139)
- 🆕 Add new spot icons [#138](https://github.com/cap-collectif/ui/pull/138)
- 🐛 Fix CSS import of DateRange [#136](https://github.com/cap-collectif/ui/pull/136)
- 🐛 Fix `onClose` and `onOpen` on Modal [#135](https://github.com/cap-collectif/ui/pull/135)


## 0.4.0

`2021-11-29`

- 🆕 Add `Search` component [#119](https://github.com/cap-collectif/ui/pull/119)
- 🆕 Add `ButtonGroup` component [#117](https://github.com/cap-collectif/ui/pull/117)
- 🆕 Add `ConfirmModal` component [#117](https://github.com/cap-collectif/ui/pull/117)
- 🆕 Add `Modal` component [#117](https://github.com/cap-collectif/ui/pull/117)
- 🆕 Make `DateRange` component as available to use [#130](https://github.com/cap-collectif/ui/pull/130)
- 🆕 Improve bundle size in externalize peerDependencies with rollup [#130](https://github.com/cap-collectif/ui/pull/130)

## 0.3.0

`2021-11-22`

- 🆕 Add select behavior on `Menu` [#126](https://github.com/cap-collectif/ui/pull/126)
- 🆕 Add `DateRange` component [#113](https://github.com/cap-collectif/ui/pull/113) (not available to use yet)

## 0.2.1

`2021-11-16`

- 💄 Fix styles of `Select` / `AsyncSelect` / `CreatableSelect` / `AsyncCreatableSelect` [#118](https://github.com/cap-collectif/ui/pull/118)
- 💄 Fix styles of `FormGuideline` [#116](https://github.com/cap-collectif/ui/pull/116) [#118](https://github.com/cap-collectif/ui/pull/118)
- 🆕 Remove src from published build folder [#120](https://github.com/cap-collectif/ui/pull/120)
- 🆕 Update dependencies (react-select/styled-components/react-hotkeys-hook) [#120](https://github.com/cap-collectif/ui/pull/120)
- 💄 Fix lineHeight of `FormLabel` [#116](https://github.com/cap-collectif/ui/pull/116)
- 💄 Fix lineHeight of `FormErrorMessage` [#116](https://github.com/cap-collectif/ui/pull/116)

## 0.2.0

`2021-10-28`

- 🆕 Remove fonts from build project [#101](https://github.com/cap-collectif/ui/pull/101)
- 💄 Fix border on `Table` [#102](https://github.com/cap-collectif/ui/pull/102)
- 🆕 Add export of heading styles [#102](https://github.com/cap-collectif/ui/pull/102)
- 🐛 Add subcomponent `Menu` on `Table` [#102](https://github.com/cap-collectif/ui/pull/102)
- 💄 Fix className on `VisuallyHidden` [#102](https://github.com/cap-collectif/ui/pull/102)
- 💄 Add className on `Text` [#102](https://github.com/cap-collectif/ui/pull/102)
- 💄 Add className on `MenuItem` [#102](https://github.com/cap-collectif/ui/pull/102)
- 🐛 Fix displayName of `Table` [#102](https://github.com/cap-collectif/ui/pull/102)
- 🐛 Fix displayName of `Menu` [#102](https://github.com/cap-collectif/ui/pull/102)
- 🆕 Add basic `Link` component [#100](https://github.com/cap-collectif/ui/pull/100)
- 🆕 Add `AsyncCreatableSelect` component [#98](https://github.com/cap-collectif/ui/pull/98)
- 🆕 Add `AsyncSelect` component [#98](https://github.com/cap-collectif/ui/pull/98)
- 🆕 Add `CreatableSelect` component [#98](https://github.com/cap-collectif/ui/pull/98)
- 🆕 Add `Select` component [#98](https://github.com/cap-collectif/ui/pull/98)
- 🆕 Update base px from 16 to 14 [#97](https://github.com/cap-collectif/ui/pull/97)
- 🆕 Update storybook dependencies [#96](https://github.com/cap-collectif/ui/pull/96)

## 0.1.1

`2021-10-22`

🐛 Switch dependencies needed in the project from dev dependencies to dependencies [#94](https://github.com/cap-collectif/ui/pull/94)

## 0.1.0

`2021-10-21`

- 🆕 Add `Table` component [#89](https://github.com/cap-collectif/ui/pull/89)
- 🐛 Fix export `Skeleton` [#92](https://github.com/cap-collectif/ui/pull/92)
- 💄 Fix padding `Button` variant link [#92](https://github.com/cap-collectif/ui/pull/92)
- 🆕 Add new icons [#91](https://github.com/cap-collectif/ui/pull/91)
- 💄 Update colors [#90](https://github.com/cap-collectif/ui/pull/90)
- 🆕 Add `ButtonQuickAction` component [#80](https://github.com/cap-collectif/ui/pull/80)
- 🆕 Add `InlineSelect` component [#72](https://github.com/cap-collectif/ui/pull/72)
- 🆕 Add `Menu` component [#87](https://github.com/cap-collectif/ui/pull/87)
- 🆕 Add fonts OpenSans & Roboto [#71](https://github.com/cap-collectif/ui/pull/71)
- 🆕 Add `Heading` component [#63](https://github.com/cap-collectif/ui/pull/63)
- 🆕 Add `Skeleton` component [#85](https://github.com/cap-collectif/ui/pull/85)
- 🆕 Add `TextArea` component [#86](https://github.com/cap-collectif/ui/pull/86)
- 🆕 Add `Toast` component [#62](https://github.com/cap-collectif/ui/pull/62)
- 🆕 Add `InputNumber` component [#81](https://github.com/cap-collectif/ui/pull/81)
- 🆕 Add `Input` component [#69](https://github.com/cap-collectif/ui/pull/69)
- 🆕 Add `FormErrorMessage` component [#69](https://github.com/cap-collectif/ui/pull/69)
- 🆕 Add `FormGuideline` component [#69](https://github.com/cap-collectif/ui/pull/69)
- 🆕 Add `FormLabel` component [#69](https://github.com/cap-collectif/ui/pull/69)
- 🆕 Add `FormControl` component [#69](https://github.com/cap-collectif/ui/pull/69)
- 🆕 Improve `Button` component to accept `anchor` in `as` prop [#68](https://github.com/cap-collectif/ui/pull/68)
- 🆕 Enable ref on svg in `@svgr/rollup` config [#73](https://github.com/cap-collectif/ui/pull/73)
- 💄 Fix `className` of Icon [#73](https://github.com/cap-collectif/ui/pull/73)
- 🆕 Add story for `InfoMessage` [#73](https://github.com/cap-collectif/ui/pull/73)
- 💄 Fix `:first-child` marge on `Flex` [#73](https://github.com/cap-collectif/ui/pull/73)
- 🆕 `Flex` now support `as` prop [#73](https://github.com/cap-collectif/ui/pull/73)
- 🆕 Add `Tooltip` component [#70](https://github.com/cap-collectif/ui/pull/70)
- 🆕 Add `Tag` component [#55](https://github.com/cap-collectif/ui/pull/61)
- 🆕 Add `Popover` component [#55](https://github.com/cap-collectif/ui/pull/55)


## 0.0.1

`2021-09-30`

- 🆕 Add `Card` component [#53](https://github.com/cap-collectif/ui/pull/53)
- 🆕 Add `VisuallyHidden` component [#54](https://github.com/cap-collectif/ui/pull/54)
- 🆕 Add `SpotIcon` component [#57](https://github.com/cap-collectif/ui/pull/57)
- 🆕 Add `Avatar` component [#49](https://github.com/cap-collectif/ui/pull/49)
- 🆕 Add `AvatarGroup` component [#49](https://github.com/cap-collectif/ui/pull/49)
- 🆕 Add `InfoMessage` component [#47](https://github.com/cap-collectif/ui/pull/47)
- 🆕 Add `Icon` component [#2](https://github.com/cap-collectif/ui/pull/2)
- 🆕 Add `Button` component [#2](https://github.com/cap-collectif/ui/pull/2)
- 🆕 Add `Spinner`component [#2](https://github.com/cap-collectif/ui/pull/2)
- 🆕 Add `HStack`component [#1](https://github.com/cap-collectif/ui/pull/1)
- 🆕 Add `VStack`component [#1](https://github.com/cap-collectif/ui/pull/1)
- 🆕 Add `Flex` component [#1](https://github.com/cap-collectif/ui/pull/1)
- 🆕 Add `Grid` component [#1](https://github.com/cap-collectif/ui/pull/1)
- 🆕 Add `Box` component [#1](https://github.com/cap-collectif/ui/pull/1)
- 🆕 Setup the initial config of the project