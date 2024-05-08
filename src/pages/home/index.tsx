import { FC } from "react";
import { Chart, Deposits, Orders, PageLayout } from "../../components";
import { Grid, Paper } from "@mui/material";
import { SmallBox } from "../../components/widgets/SmallBox";
import {
  IconChartPie,
  IconPresentationAnalytics,
  IconShoppingBag,
  IconUserPlus,
} from "@tabler/icons-react";

const HomePage: FC = () => {
  return (
    <PageLayout title="Dashboard">
      <Grid container spacing={3} mt={0}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SmallBox
            title="New Orders"
            value={150}
            icon={<IconShoppingBag size={80} strokeWidth={1} color="gray" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SmallBox
            title="Bounce Rate"
            value="53%"
            icon={<IconChartPie size={80} strokeWidth={1} color="gray" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SmallBox
            title="User Registrations"
            value="44"
            icon={<IconUserPlus size={80} strokeWidth={1} color="gray" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SmallBox
            title="Unique Visitors"
            value="65"
            icon={
              <IconPresentationAnalytics
                size={80}
                strokeWidth={1}
                color="gray"
              />
            }
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
