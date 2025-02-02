import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import cities from "../data.json";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Container>
        {cities.map((city, index) => ( 
          <div key={index}>
            <Typography
              variant="h4"
              component="h2"
              marginBottom={3}
              marginTop={5}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, tourIndex) => (
                <Card key={tourIndex} tour={tour} /> 
              ))}
            </Grid>
          </div>
        ))}
      </Container>
    </>
  );
}
