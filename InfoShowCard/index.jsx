import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 550,
    backgroundColor:"#cdc7be"
  },
  image: {
    width: 160,
    height: 160,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  filmName:{
    fontSize:"2rem",
    color:"red"
  },
}));

export default function InfoShowCard({info}) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={info.hinhAnh} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom className={classes.filmName} variant="subtitle1">
                  {info.tenPhim}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {info.tenRap}
                </Typography>
                <Typography variant="body2" gutterBottom>  
                    {info.tenCumRap}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {info.diaChi}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className="d-flex justify-content-between" >
               <span style={{color:"red",fontSize:"1rem"}}>Ngày Chiếu :{info.ngayChieu}  </span><span style={{color:"red",fontSize:"1rem"}}>Giờ chiếu :{info.gioChieu}</span>
                </Typography>
              </Grid>
            </Grid>
            {/* <Grid item>
              <Typography variant="subtitle1">Mã Lịch Chiếu :{info.maLichChieu}</Typography>
            </Grid> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );

}
