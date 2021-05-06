import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Container,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./style";
import pop1 from "Assets/Images/pop1.png";
import pop2 from "Assets/Images/pop2.png";
import pop3 from "Assets/Images/pop3.png";
import pop4 from "Assets/Images/pop4.png";
import pop5 from "Assets/Images/pop5.png";
import pop6 from "Assets/Images/pop6.png";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch, useSelector } from "react-redux";
import { handleFood } from "Reducer/buyFood";

function BuyFood() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const buyFood = useSelector((state) => state.buyFood.data);
  const imgs = [pop1, pop2, pop3, pop4, pop5, pop6];

  const renderCost = (index) => {
    switch (index) {
      case 1:
        return 20000;
      case 2:
        return 40000;
      case 3:
        return 50000;
      case 4:
        return 150000;
      case 5:
        return 200000;
      case 6:
        return 250000;

      default:
        break;
    }
  };

  const handleClick = (status, combo, cost) => {
    dispatch(handleFood({ status, combo, cost }));
  };

  const renderCount = (index) => {
    return buyFood?.map((food) => {
      if (food.combo === index) {
        return (
          <Typography key={food.combo} variant="body1" gutterBottom>
            {food.number}
          </Typography>
        );
      }
    });
  };

  const renderCardFood = () => {
    return imgs.map((img, index) => {
      let cost = renderCost(index + 1);
      return (
        <Grid item xs={6} md={4} key={index} style={{ padding: 5 }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={img} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h6" style={{ marginBottom: 0 }}>
                  Combo {index + 1}
                </Typography>
                <Typography style={{ fontSize: "0.9rem", color: "gray" }}>
                  {renderCost(index + 1)}VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={4} style={{ textAlign: "right" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    style={{ width: "60%" }}
                    onClick={() => handleClick(false, index + 1, cost)}
                  >
                    <RemoveIcon />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  {renderCount(index + 1)}
                </Grid>
                <Grid item xs={4} style={{ textAlign: "right" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    style={{ width: "60%" }}
                    onClick={() => handleClick(true, index + 1, cost)}
                  >
                    <AddIcon />
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <Container maxWidth="md">
      <Grid container justify="center" alignItems="center">
        {renderCardFood()}
      </Grid>
    </Container>
  );
}

export default BuyFood;
