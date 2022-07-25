---
sidebar_position: 1
---

# Intro

Let's discover **toastify-react in less than 5 minutes**.

## Getting Started

## Install

```shell
npm install toastify-react
```

## Usage

```jsx
import toaster from 'toastify-react';

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
