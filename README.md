# CapUI

---
Design system for [Cap Collectif](https://cap-collectif.com/)

[![npm version](https://badge.fury.io/js/@cap-collectif%2Fui.svg)](https://badge.fury.io/js/@cap-collectif%2Fui)
<a href="https://www.chromatic.com/builds?appId=5d67dc0374b2e300209c41e7">
<img src="https://badgen.net/badge/tested%20with/chromatic/fc521f" alt="Tested with Chromatic">
</a>
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@cap-collectif/ui">

## 📦 Install

```bash
npm i @cap-collectif/ui
...
yarn add @cap-collectif/ui
```

## 🔨 Usage
```tsx
import { Button, Heading } from '@cap-collectif/ui';

const App = () => (
  <>
    <Heading as="h1">Title</Heading>
    <Button variant="primary">PRESS ME</Button>
  </>
);
```

## 🔗 Documentation
👉 Read the [Storybook stories](https://ds.cap-collectif.com/)

📝 View the [Changelog](https://github.com/cap-collectif/ui/blob/master/CHANGELOG.md)

# 💻 Development
```bash
$ git clone https://github.com/cap-collectif/ui.git
$ cd ui/
$ yarn
$ yarn storybook
```
The browser will launch automatically to http://localhost:6006

## 🤝 Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request 😊

## 📄 License
[License](https://github.com/cap-collectif/ui/blob/master/LICENSE)
