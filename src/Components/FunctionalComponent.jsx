import React, { useState } from 'react';
import { useStyles } from './_useStyles';
import { Box, Input, Typography } from '@material-ui/core';

export default function FunctionalComponent(props) {
  const classes = useStyles();

  const { value } = props;
  const greeting = 'FunctionalComponent';
  const [getGreeting, setGreeting] = useState('FunctionalComponent - UseState');
  const handleChange = event => setGreeting(event.target.value);

  return (
    <Box>
      <Typography className={`${classes.root} ${classes.bg1}`}>{props.value}</Typography>

      <Typography className={`${classes.root} ${classes.bg2}`}>
        {value} - Destructured
      </Typography>

      <Typography className={`${classes.root} ${classes.bg3}`}>{greeting}</Typography>

      {/* REACT FUNCTION COMPONENT: STATE */}
      <Box className={`${classes.root} ${classes.bg2}`}>
        <Typography>{getGreeting}</Typography>
        <Input
          className={classes.textField}
          type="text"
          value={getGreeting}
          onChange={event => setGreeting(event.target.value)}
        />
      </Box>

      {/* REACT FUNCTION COMPONENT: EVENT HANDLER */}
      <Box className={`${classes.root} ${classes.bg3}`}>
        <Typography>{getGreeting}</Typography>
        <Input
          className={classes.textField}
          type="text"
          value={getGreeting}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}
