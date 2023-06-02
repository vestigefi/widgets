# @vestigefi/widgets

> Embeddable asset charts & swap widgets for Algorand

[![NPM](https://img.shields.io/npm/v/@vestigefi/widgets.svg)](https://www.npmjs.com/package/@vestigefi/widgets) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License](https://img.shields.io/npm/l/@vestigefi/widgets)](https://www.npmjs.com/package/@vestigefi/widgets)

## Demo/Documentation

[Demo and API docs are available here!](https://vestigefi.github.io/widgets/)

## Install

```bash
npm install --save @vestigefi/widgets
```

or

```bash
yarn add @vestigefi/widgets
```

## Usage

```tsx
import React, { FC, useState } from 'react'

import { Swap } from '@vestigefi/widgets'

export const Example: FC = () => {
  return <Swap assetOut={700965019} />
}
```

## License

MIT © [Vestige Labs](https://github.com/vestigefi)
