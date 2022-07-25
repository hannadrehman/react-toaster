---
sidebar_position: 5
---

# Heading

tostify-react helps you classify toasters with heading.

import toaster from '../../../dist';

<button
className="button button--secondary"
onClick={() => toaster.info('This is an info message.', {heading: 'Information'})} >
With Heading
</button>

## Usage

```jsx
toaster.info('This is an info message.', { heading: 'Information' });
```
