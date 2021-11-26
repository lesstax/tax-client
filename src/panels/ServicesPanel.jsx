import { Grid, useMediaQuery } from "@mui/material";
import { Savings, Sell, CreditScore, Person } from "@mui/icons-material";
import "../res/css/home.css";

const ServicesPanel = () => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Grid container style={{ marginBottom: 20, padding: 10 }}>
      <Grid
        item
        xs={12}
        sm={6}
        alignItems="center"
        justifyContent="center"
        container
      >
        <Grid align="center" item xs={12} sm={6} className="icon-button">
          <CreditScore className="icon-tabs" />
          <br />
          Tax filing
        </Grid>
        <Grid
          align="center"
          item
          xs={12}
          sm={6}
          className="icon-button"
          style={{ marginTop: 30 }}
        >
          <Person className="icon-tabs" />
          <br />
          Dedicated CA for year
        </Grid>
        <Grid
          align="center"
          item
          xs={12}
          sm={6}
          className="icon-button"
          style={{ marginTop: 30 }}
        >
          <Savings className="icon-tabs" />
          <br />
          Tax planning
        </Grid>
        <Grid
          align="center"
          item
          xs={12}
          sm={6}
          className="icon-button"
          style={{ marginTop: 30 }}
        >
          <Sell className="icon-tabs" />
          <br />
          Notice Assistance
        </Grid>
      </Grid>
      {matches ? (
        <></>
      ) : (
        <Grid item sm={6} container>
          <div className="poligon-drow"></div>
        </Grid>
      )}
    </Grid>
  );
};

export default ServicesPanel;
