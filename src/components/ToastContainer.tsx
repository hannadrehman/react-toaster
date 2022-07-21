import React, { useState, useEffect } from 'react';

import Toast from './Toast';

const camelCase = (str: string): string =>
  str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

const defaultToasts = {
  topLeft: [],
  topCenter: [],
  topRight: [],
  bottomLeft: [],
  bottomCenter: [],
  bottomRight: [],
};

type CToastItem = {
  id: number;
  text: string;
  type: string;
  hideAfter: number;
  onClick: React.MouseEventHandler;
  onHide: () => void;
};

type CToastContainerProps = Partial<{
  toast: {
    position?: string;
  };
  hiddenID: number;
}>;

const ToastContainer: React.FC<CToastContainerProps> = ({
  toast,
  hiddenID,
}) => {
  const [allToasts, setToasts] = useState(defaultToasts);

  useEffect(() => {
    if (toast) {
      setToasts((prevToasts) => {
        const position = camelCase(toast.position || 'top-center');
        return { ...prevToasts, [position]: [...prevToasts[position], toast] };
      });
    }
  }, [toast]);

  const handleRemove = (callback) => {
    return (id: number, position: string): void => {
      setToasts((prevToasts) => {
        const toastPosition = camelCase(position || 'top-center');
        return {
          ...prevToasts,
          [toastPosition]: prevToasts[toastPosition].filter(
            (item: CToastItem) => item.id !== id,
          ),
        };
      });
      if (typeof callback === 'function') callback(id, position);
    };
  };

  const rows = ['top', 'bottom'];
  const groups = ['Left', 'Center', 'Right'];

  return (
    <>
      {rows.map((row) => (
        <div key={`row_${row}`} className="ct-row">
          {groups.map((group) => {
            const type = `${row}${group}`;
            const className = [
              'ct-group',
              row === 'bottom' ? 'ct-flex-bottom' : '',
            ].join(' ');
            return (
              <div key={type} className={className}>
                {allToasts[type].map((item: CToastItem) => (
                  <Toast
                    key={`${type}_${item.id}`}
                    {...item}
                    id={item.id}
                    text={item.text}
                    type={item.type}
                    onClick={item.onClick}
                    hideAfter={item.hideAfter}
                    show={hiddenID !== item.id}
                    onHide={handleRemove(item.onHide)}
                  />
                ))}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default ToastContainer;
