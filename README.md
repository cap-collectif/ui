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

##🔨 Usage
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
👉 Read the [Storybook stories](https://master--60ca00d41db7ba003be931d8.chromatic.com)

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

##License

---

The MIT License (MIT)

Copyright (c) 2022 Cap-Collectif

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.