import ReactDOM from 'react-dom';
import ToastContainer from './components/ToastContainer';
import Toast from './components/Toast';
import { icons } from './components/Icons';
import { defaultTheme } from './components/theme';
import {
  CToast,
  CTReturn,
  CTOptions,
  Message,
  CTMethodOptions,
} from '../index.d';
import './styles/styles.css';

const CONTAINER_ID = 'ct-container';
const ELEMENT_TYPE = 'div';
const IS_SERVER = typeof window === 'undefined' ? false : true;

let ctToastCount = 0;

function getRootContainer(containerId): HTMLElement {
  let rootContainer = document.getElementById(containerId || CONTAINER_ID);

  if (!rootContainer) {
    rootContainer = document.createElement(ELEMENT_TYPE);
    rootContainer.id = CONTAINER_ID;
    document.body.appendChild(rootContainer);
  }
  return rootContainer;
}

function toast(text: Message, options: CTMethodOptions): CTReturn {
  if (!IS_SERVER) return; // for ssr
  const container = getRootContainer(options?.toastContainerID);
  ctToastCount += 1;

  const hideTime =
    (options?.hideAfter === undefined ? 3 : options.hideAfter) * 1000;

  const toastItem = { id: ctToastCount, text, ...options };
  ReactDOM.render(
    <ToastContainer
      theme={options.theme || defaultTheme}
      icons={options.icons || icons}
      toast={toastItem}
    />,
    container,
  );

  const hide = (): void => {
    ReactDOM.render(
      <ToastContainer
        theme={options.theme || defaultTheme}
        icons={options.icons || icons}
        hiddenID={toastItem.id}
      />,
      container,
    );
  };

  const completePromise: CTReturn = new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, hideTime);
  });

  completePromise.hide = hide;

  return completePromise;
}

const toaster: CToast = {
  success: (message: Message, options: CTOptions): CTReturn =>
    toast(message, { ...options, type: 'success' }),
  warn: (message: Message, options: CTOptions): CTReturn =>
    toast(message, { ...options, type: 'warn' }),
  info: (message: Message, options: CTOptions): CTReturn =>
    toast(message, { ...options, type: 'info' }),
  error: (message: Message, options: CTOptions): CTReturn =>
    toast(message, { ...options, type: 'error' }),
  loading: (message: Message, options: CTOptions): CTReturn =>
    toast(message, { ...options, type: 'loading' }),
};

export { Toast };

export default toaster;
