---
sidebar_position: 1
---

# Intro

Let's discover **react-toaster in less than 5 minutes**.

## Getting Started

## Install

```shell
npm install react-toaster
```

## Usage

```jsx
import toaster from 'react-toaster';

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
