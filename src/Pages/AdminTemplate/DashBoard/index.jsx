import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import CardDashBoard from 'Components/CardItem'

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 70,
  },
});



export default function DashBoard() {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("UserAdmin")).hoTen;
  console.log(user)
  let propsCard = [
    {
      name:"HomePage",
      title:"Go To HomePage",
      url:"/",
      imgUrl:"https://thumbs.dreamstime.com/b/home-icon-isolated-orange-round-button-abstract-illustration-home-icon-orange-round-button-104801487.jpg",
      totalCount:0,
      backgroundCard:"#fff",
      textCardColor:"#ff6b07",
    },
    {
      name:"FilmManager",
      title:"Show List Movie",
      url:"/list-movie",
      imgUrl:"https://cms.megagscinemas.vn//media/76598/publicpreview.jpg",
      totalCount:20,
      backgroundCard:"#fff",
      textCardColor:"#23cbcb",
    },
    {
      name:"UserManager",
      title:"Show List User",
      url:"/list-user-pagination",
      imgUrl:"https://img.favpng.com/7/5/8/computer-icons-font-awesome-user-font-png-favpng-YMnbqNubA7zBmfa13MK8WdWs8.jpg",
      totalCount:30,
      backgroundCard:"#fff",
      textCardColor:"#000",
    },
    {
      name:"TicketAdd",
      title:"Create new Show",
      url:"/add-ticket",
      imgUrl:"https://cdn1.iconfinder.com/data/icons/flatastic-8/256/add-ticket-512.png",
      totalCount:2,
      backgroundCard:"#fff",
      textCardColor:"#7c9712",
    },
    {
      name:"FilmAdd",
      title:"Add new Film",
      url:"/add-movie",
      imgUrl:"https://cdn4.iconfinder.com/data/icons/multimedia-24/512/Video-512.png",
      totalCount:0,
      backgroundCard:"#fff",
      textCardColor:"#f399be",
    },
    {
      name:"UserAdd",
      url:"/add-user",
      title:"Add new User",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecxMgMGrZa0qJ8zAUBw2bllMIWqUsMzEAXw&usqp=CAU",
      totalCount:0,
      backgroundCard:"#fff",
      textCardColor:"#00ccff",
    },
  ]
  const renderListCard =()=>{
    return propsCard.map((item,index)=>{
      return (
        <Grid  item sm={12} md={6} lg={4}   >
          <CardDashBoard   className="m-auto" content={item}/>    
      </Grid>
      )
    })
  }
// {name,url,imgUrl,totalCount,backgroundCard,textCardColor}
  return (
    <Grid  alignItems="center" container spacing={3} >
      <Grid item xs={12}  >
       <Typography variant="h6" className="text-right" gutterBottom>
        Welcome back <span style={{fontSize:"2rem",}}>{user}</span>  
      </Typography>  
      </Grid>
       <Grid item xs={12}  >
       <Typography variant="h3" gutterBottom>
        Application
      </Typography>  
      </Grid>
     
      {renderListCard()}
      {/* <Grid item xs={3}>
          <CardDashBoard/>
        
      </Grid>
      <Grid item xs={3}>
          <CardDashBoard/>
        
      </Grid>
      <Grid item xs={3}>
          <CardDashBoard/>
        
      </Grid>
      <Grid item xs={3}>
          <CardDashBoard/>
        
      </Grid> */}
    </Grid>
  );
}

