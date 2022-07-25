---
sidebar_position: 3
---

# Hide After

React-toaster hides after 3 secs by default. We can change it using `hideAfter`

import toaster from '../../../dist';

<button
className="button button--secondary"
onClick={() => toaster.success('This success message will hide after 2 secs.', {hideAfter: 2})} >
Hide after 2 secs
</button>

## Usage

```jsx
toaster.success('This success message will hide after 2 secs.', {
  hideAfter: 2,
});
```
