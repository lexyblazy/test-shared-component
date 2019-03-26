import React from 'react';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import './button.scss';

const FormButton = ({
  loading,
  children,
  onClick,
  disabled,
  classes,
  className,
  variant = 'contained',
  ...others
}) => {
  return (
    <Button
      variant={variant}
      component="span"
      className={`${classNames(classes.button, className)}`}
      color="primary"
      onClick={onClick}
      onSubmit={onClick}
      disabled={disabled}
      {...others}
    >
      {loading ? (
        <CircularProgress
          size={24}
          className={classNames(classes.progress, {
            [classes.progressOutline]: variant === 'outlined',
          })}
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default withStyles(styles)(FormButton);
