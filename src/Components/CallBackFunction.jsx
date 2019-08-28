import React from 'react';
import { useStyles } from './_useStyles';

import { Button, Box, Input, Typography } from '@material-ui/core';

export default function CallBackFunction({ headline, onChangeHeadline }) {
  const classes = useStyles();

  return (
    <Box className={`${classes.root} ${classes.bg1}`}>
      <Typography>{headline}</Typography>
      <Input
        type="text"
        value={headline}
        onChange={onChangeHeadline}
        className={classes.textField}
      />
    </Box>
  );
}
