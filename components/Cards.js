import React, { useEffect, useState } from "react";
import "firebase/database";
import { db } from "../firebaseConfig";
import styled from "styled-components";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "80vw",
    minHeight: "100vh",
    flexWrap: "wrap",
    flexGrow: 1,
    margin: "10px auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardRoot: {
    width: "100%",
    height: "100%",
    fontSize: "1.3em",
  },
}));

function Cards() {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const homeData = db.ref(
      "props/pageProps/searchResults/home_search/results"
    );
    homeData.on("value", (snapshot) => {
      const data = snapshot.val();
      setData(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Grid
        container
        className={classes.root}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {data.map((item) => {
          return (
            <Container key={item.property_id} className="card">
              <Card className={classes.cardRoot}>
                <CardMedia
                  image={item.primary_photo.href}
                  className={classes.media}
                ></CardMedia>
                <CardContent>
                  <Typography color="textSecondary">
                    Type: {item.description.type}
                    <br />
                    Bedrooms: {item.description.beds}
                    <br />
                    Bathrooms: {item.description.baths}
                    <br />
                    Square Feet: {item.description.sqft}
                    <br />
                    Year Built: {item.description.year_built}
                    <br />
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          );
        })}
      </Grid>
    </>
  );
}

export default Cards;

const Container = styled.div`
  border-bottom: 10px solid rgb(154, 1, 86);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;
