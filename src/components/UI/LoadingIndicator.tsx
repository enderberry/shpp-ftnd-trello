import React, { ReactElement } from 'react';

import cls from './loading_indicator.module.scss';

interface LoadingIndicatorProps {
  className?: string;
}

function LoadingIndicator({ className }: LoadingIndicatorProps): ReactElement {
  return <span className={`${cls.loading} ${className}`} />;
}

LoadingIndicator.defaultProps = {
  className: ''
};

export default LoadingIndicator;
