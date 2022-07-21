import { useState, useEffect } from 'react';
import Icons from './Icons';
import { CTOptions } from '../../index.d';

const colors = {
  success: '#6EC05F',
  info: '#1271EC',
  warn: '#FED953',
  error: '#D60A2E',
  loading: '#0088ff',
};

type CToastProps = CTOptions & {
  id: number;
  type: string;
  text: string | React.ReactNode;
  show: boolean;
  onHide: (number, string) => void | undefined;
  onClick: React.EventHandler<React.MouseEvent> | undefined;
  hideAfter: number;
};
const Toast: React.FC<CToastProps> = ({
  id = undefined,
  show = true,
  onHide = undefined,
  hideAfter = 3,
  heading = undefined,
  position = 'top-center',
  renderIcon = undefined,
  bar = {},
  onClick = undefined,
  role = 'status',
  text,
  type,
}) => {
  const place = (position || 'top-center').includes('bottom')
    ? 'Bottom'
    : 'Top';
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

  const [animStyles, setAnimStyles]  = useState({
    opacity: 0,
    [marginType]: '-15px',
  });

  const style = {
    paddingLeft: heading ? 25 : undefined,
    minHeight: heading ? 50 : undefined,
    borderLeft,
    ...animStyles,
  };

  const handleHide = (): void => {
    setAnimStyles({ opacity: 0, [marginType]: '-15px' });

    setTimeout(() => {
      if (!onHide) return;
      onHide(id, position);
    }, 300);
  };

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
      if (e.keyCode === 13) {
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
};

export default Toast;
