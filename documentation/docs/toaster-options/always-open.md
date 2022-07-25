---
sidebar_position: 4
---

# Always open

toastify-react can also be kept always open.

import toaster from '../../../dist';

<button
className="button button--secondary"
onClick={() => toaster.success('This success message will be always open.', {hideAfter: 0})} >
should be always open
</button>

## Usage

```jsx
toaster.success('This success message will be always open.', {
  hideAfter: 0,
});
```
