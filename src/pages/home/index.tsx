import { Grid, Paper } from "@mui/material";
import { amber, blue, green, red } from "@mui/material/colors";
import {
  IconChartAreaLineFilled,
  IconChartPieFilled,
  IconShoppingCartFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { FC } from "react";
import {
  Chart,
  Deposits,
  Orders,
  PageLayout,
  SmallBox,
} from "../../components";

const HomePage: FC = () => {
  return (
    <PageLayout title="Dashboard">
      <Grid container spacing={3} mt={0}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SmallBox
            elevation={3}
            title="New Orders"
            value={150}
            icon={<IconShoppingCartFilled size={70} />}
            color={blue[500]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SmallBox
            elevation={3}
            title="Bounce Rate"
            value="53%"
            icon={<IconChartAreaLineFilled size={70} />}
            color={green[800]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SmallBox
            elevation={3}
            title="User Registrations"
            value="44"
            icon={<IconUserFilled size={70} />}
            color={amber[600]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SmallBox
            elevation={3}
            title="Unique Visitors"
            value="65"
            icon={<IconChartPieFilled size={70} />}
            color={red[700]}
          />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default HomePage;
