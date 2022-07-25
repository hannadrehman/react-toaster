---
sidebar_position: 1
---

# Intro

Let's discover **tostify-react in less than 5 minutes**.

## Getting Started

## Install

```shell
npm install tostify-react
```

## Usage

```jsx
import toaster from 'tostify-react';

function Profile() {
  return (
    <div>
      <button onClick={() => toaster.success('Submitted Successfully')}>
        Submit
      </button>
    </div>
  );
}
```
