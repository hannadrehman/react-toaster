---
sidebar_position: 2
---

# Positions

toastify-react is supports 6 types of toaster positions.

import toaster from '../../../dist';

<div className="button-group">
<button
className="button button--secondary"
onClick={() => toaster.info('This is a info message at position top-left', { position: 'top-left' })} >
top-left
</button>
<button
className="button button--secondary"
onClick={() => toaster.info('This is a info message at position top-center', { position: 'top-center' })} >
top-center
</button>
<button
className="button button--secondary"
onClick={() => toaster.info('This is a info message at position top-right', { position: 'top-right' })} >
top-right
</button>
<button
className="button button--secondary"
onClick={() => toaster.info('This is a info message at position bottom-left', { position: 'bottom-left' })} >
bottom-left
</button>
<button
className="button button--secondary"
onClick={() => toaster.info('This is a info message at position bottom-center', { position: 'bottom-center' })} >
bottom-center
</button>
<button
className="button button--secondary"
onClick={() => toaster.info('This is a info message at position bottom-right', { position: 'bottom-right' })} >
bottom-right
</button>
</div>

## Usage

```jsx
toaster.info('This is a info message at position top-left', {
  position: 'top-left',
});

toaster.info('This is a info message at position top-center', {
  position: 'top-center',
});

toaster.info('This is a info message at position top-right', {
  position: 'top-right',
});

toaster.info('This is a info message at position bottom-left', {
  position: 'bottom-left',
});

toaster.info('This is a info message at position bottom-center', {
  position: 'bottom-center',
});

toaster.info('This is a info message at position bottom-right', {
  position: 'bottom-right',
});
```
