import '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    minHeight: '20px',
    padding: '10px 30px',
    margin: '5px'
  },
  bg1: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  bg2: {
    background: 'linear-gradient(45deg, #62dfb9 10%, #f09f74 90%)'
  },
  bg3: {
    background: 'linear-gradient(45deg, #6bcffe 30%, #ff83c7 90%)'
  },
  textField: {
    width: '100%'
  }
});
