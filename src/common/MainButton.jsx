import { Button, Grid, Paper, Typography } from "@mui/material";

const MainButton = ({ dataObject }) => {
  return (
    <Grid item xs={dataObject.xs} sm={dataObject.sm}>
      <Paper>
        <Grid
          container
          item
          justify="center"
          alignItems="center"
          style={dataObject.style}
        >
          {dataObject.icon && (
            <Grid item xs={2} sm={2}>
              {dataObject.icon}
            </Grid>
          )}
          <Grid
            item
            item
            xs={dataObject.icon ? 10 : 12}
            sm={dataObject.icon ? 10 : 12}
          >
            <Typography
              variant="h6"
              style={dataObject.title.style}
              align="left"
            >
              {dataObject.title.title}
            </Typography>
            <Typography
              variant="subtitle1"
              align="justify"
              style={dataObject.descriptionStyle && dataObject.descriptionStyle}
            >
              {dataObject.description}
            </Typography>
            <Button
              variant={dataObject.button.variant && dataObject.button.variant}
              style={dataObject.button.style && dataObject.button.style}
              endIcon={dataObject.button.endIcon && dataObject.button.endIcon}
            >
              {dataObject.button.title}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default MainButton;
