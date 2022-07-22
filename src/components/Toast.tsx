import { useState, useEffect } from 'react';
import Icons from './Icons';
import { CToastProps } from './Toasts';

const colors = {
  success: '#6EC05F',
  info: '#1271EC',
  warn: '#FED953',
  error: '#D60A2E',
  loading: '#0088ff',
};

function Toast({
  id,
  show = true,
  onHide,
  hideAfter = 3,
  heading = undefined,
  position = 'top-center',
  renderIcon = undefined,
  bar = {},
  onClick = undefined,
  role = 'status',
  text,
  type,
}: CToastProps) {
  const place = (position || 'top-center').includes('bottom')
    ? 'Bottom'
    : 'Top';

console.log(place)
  
const marginType = `margin${place}`;

  const className = [
    'ct-toast',
    onClick ? ' ct-cursor-pointer' : '',
    `ct-toast-${type}`,
  ].join(' ');
  
  const borderLeft = `${bar?.size || '3px'} ${bar?.style || 'solid'} ${
    bar?.color || colors[type]
  }`;

  const CurrentIcon = Icons[type];

  const [animStyles, setAnimStyles] = useState({
    opacity: 0,
    [marginType]: '-15px',
  });

  const style = {
    paddingLeft: heading ? 25 : undefined,
    minHeight: heading ? 50 : undefined,
    borderLeft,
    ...animStyles,
  };

  function handleHide(): void {
    setAnimStyles({ opacity: 0, [marginType]: '-15px' });

    setTimeout(() => {
      onHide(id, position);
    }, 300);
  }

  useEffect(() => {
    const animTimeout = setTimeout(() => {
      setAnimStyles({ opacity: 1, [marginType]: '15px' });
    }, 50);

    let hideTimeout;

    if (hideAfter !== 0) {
      hideTimeout = setTimeout(() => {
        handleHide();
      }, hideAfter * 1000);
    }

    return (): void => {
      clearTimeout(animTimeout);

      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, []);

  useEffect(() => {
    if (!show) {
      handleHide();
    }
  }, [show]);

  const clickProps = {
    tabIndex: 0,
    onClick: onClick,
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter') {
        if (!onClick) return;
        //eslint-disable-next-line
        // @ts-ignore
        onClick(e);
      }
    },
  };

  return (
    <div
      className={className}
      role={role || 'status'}
      style={style}
      {...(onClick ? clickProps : {})}
    >
      {renderIcon ? renderIcon() : <CurrentIcon />}
      <div className={heading ? 'ct-text-group-heading' : 'ct-text-group'}>
        {heading && <h4 className="ct-heading">{heading}</h4>}
        <div className="ct-text">{text}</div>
      </div>
    </div>
  );
}

export default Toast;
