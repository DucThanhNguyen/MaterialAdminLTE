import { Grid, Typography } from "@mui/material";
import { amber, blue, green, red } from "@mui/material/colors";
import {
  IconChartAreaLineFilled,
  IconChartPieFilled,
  IconShoppingCartFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { FC } from "react";
import { PageLayout, SmallBox } from "../../components";

const WidgetsPage: FC = () => {
  return (
    <PageLayout title="Widgets">
      <Typography variant="h5" mt={2}>
        Small Box
      </Typography>
      <Typography variant="h6" mt={2} mb={1}>
        With Custom Elevations
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SmallBox
            title="New Orders"
            value={150}
            icon={<IconShoppingCartFilled size={70} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SmallBox
            elevation={2}
            title="Bounce Rate"
            value="53%"
            icon={<IconChartAreaLineFilled size={70} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SmallBox
            elevation={3}
            title="User Registrations"
            value="44"
            icon={<IconUserFilled size={70} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SmallBox
            elevation={4}
            title="Unique Visitors"
            value="65"
            icon={<IconChartPieFilled size={70} />}
          />
        </Grid>
      </Grid>
      <Typography variant="h6" mt={4} mb={1}>
        With Background Color
      </Typography>
      <Grid container spacing={3}>
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
      </Grid>
    </PageLayout>
  );
};

export default WidgetsPage;
