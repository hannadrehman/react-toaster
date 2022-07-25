---
sidebar_position: 1
---

# Types

React-toaster is supports 5 types of toasters.

import toaster from '../../../dist';

<div className="button-group">
<button
className="button button--secondary"
onClick={() => toaster.success('This is a success message.')} >
<span className="text--success">SUCCESS</span>
</button>
<button
className="button button--secondary"
onClick={() => toaster.loading('This is a loading message.')} >
<span className="">LOADING</span>
</button>
<button
className="button button--secondary"
onClick={() => toaster.info('This is a info message.')} >
<span className="text--info">INFO</span>
</button>
<button
className="button button--secondary"
onClick={() => toaster.warn('This is a warn message.')} >
<span className="text--warning">WARN</span>
</button>
<button
className="button button--secondary"
onClick={() => toaster.error('This is a error message.')} >
<span className="text--danger">ERROR</span>
</button>
</div>

## Usage

```jsx
toaster.success('This is a success message.');

toaster.loading('This is a loading message.');

toaster.info('This is a info message.');

toaster.warn('This is a warn message.');

toaster.error('This is a error message.');
```
