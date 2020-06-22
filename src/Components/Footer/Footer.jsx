import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Footer.module.css'


export default function Footer() {

  return (
    <div className={styles.container} justify="center">
         <Grid container>
            <Grid item xs={12}>
                    <p>Salman Azeem<br></br>
                        github: @sakazeem</p>
            </Grid>
        </Grid>
    </div>
  );
}
