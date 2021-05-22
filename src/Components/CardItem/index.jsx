import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
        card: {
          maxWidth: 500,
          margin :"auto !important"
        },
        media: {
          height: 350,
        },
});

export default function CardDashBoard({content}) {
  // name,url,imgUrl,totalCount,textCardColor
  const classes = useStyles();
  const history = useHistory();
  const handleClick=()=>{
      history.push(content.url)
  }
  return (
    <Card className={classes.card} >
      <CardActionArea onClick={handleClick} > 
        <CardMedia 
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={content.imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color:content.textCardColor}} >
            {content.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, magnam!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            totalCount : <span style={{color:content.textCardColor,fontSize:"1.5rem"}}>{content.totalCount}</span> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" style={{backgroundColor:content.textCardColor}} className="text-white"  onClick={handleClick} >
             {content.title}
        </Button>
      </CardActions>
    </Card>
  );
}
