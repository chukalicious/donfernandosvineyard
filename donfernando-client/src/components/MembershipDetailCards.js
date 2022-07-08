import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import WineBarIcon from "@mui/icons-material/WineBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BedIcon from "@mui/icons-material/Bed";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RuleIcon from "@mui/icons-material/Rule";

const MembershipDetailCards = () => {
  const provisionalStyle = {
    width: "50%",
    margin: "0.5rem auto",
  };
  const iconStyle = {
    width: "100%",
    margin: "0.5rem auto",
  };
  return (
    <>
      <Card style={provisionalStyle}>
        <CardActionArea>
          <CardMedia>
            <WineBarIcon style={iconStyle} />
          </CardMedia>
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
      <Card style={provisionalStyle}>
        <CardActionArea>
          <CardMedia>
            <RestaurantIcon style={iconStyle} />{" "}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Unlimited Tastings
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <li>Requires 24-hour notice & confirmation of availability</li>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card style={provisionalStyle}>
        <CardActionArea>
          <CardMedia>
            {" "}
            <BedIcon style={iconStyle} />{" "}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              20% off AirBnB Airstreams in the Vineyard
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card style={provisionalStyle}>
        <CardActionArea>
          <CardMedia>
            {" "}
            <LocalShippingIcon style={iconStyle} />{" "}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Free Delivery
            </Typography>
            <Typography variant="body2" color="text.secondary">
              As a special Thank You, we are more than happy to provide delivery
              free of charge
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card style={provisionalStyle}>
        <CardActionArea>
          <CardMedia>
            {" "}
            <LocalOfferIcon style={iconStyle} />{" "}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pricing Tiers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <li>2 to 5 Bottles Total Per year = $30 per bottle</li>
              <li>6 to 11 Bottles Total per Year = $25 per bottle</li>
              <li>12+ Bottle Total per Year = $20 per Bottle</li>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card style={provisionalStyle}>
        <CardActionArea>
          <CardMedia>
            {" "}
            <RuleIcon style={iconStyle} />{" "}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              The Fine Print
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <li>Payment is due per Delivery</li>
              <li>
                Commitment is for one Full Year at your selected Price Tier
              </li>
              <li>
                Additional Purchases may be limited subject to availability
              </li>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default MembershipDetailCards;
