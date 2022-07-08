import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const MembershipDetailCard = () => {
  return (
    <Card sx={{ width: "100%", margin: "0 auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Wine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You choose how many bottles and how often:
            <li>1, 2 or 4 Deliveries per year</li>
            <li>2, 4, 6 or 12 bottles Minimum per Delivery</li>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MembershipDetailCard;
