import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  styled,
  Typography,
} from "@mui/material";
import { amber, blue, green, red } from "@mui/material/colors";
import {
  IconChartAreaLineFilled,
  IconChartPieFilled,
  IconChevronDown,
  IconDotsVertical,
  IconHeartFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipBackFilled,
  IconPlayerSkipForwardFilled,
  IconShare,
  IconShoppingCartFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { FC, useState } from "react";
import { BASE_NAME } from "../../App";
import { PageLayout, SmallBox } from "../../components";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const WidgetsPage: FC = () => {
  const basename = BASE_NAME || "";
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

      <Typography variant="h5" mt={4}>
        Cards
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" mt={2} mb={1}>
            Basic Card
          </Typography>
          <Card sx={{ maxWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be • nev • o • lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" mt={2} mb={1}>
            Media
          </Typography>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={basename + "/img/contemplative-reptile.jpg"}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" mt={2} mb={1}>
            UI Controls
          </Typography>
          <Card sx={{ display: "flex", maxWidth: 360 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <IconPlayerSkipBackFilled />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <IconPlayerPlayFilled size={38} />
                </IconButton>
                <IconButton aria-label="next">
                  <IconPlayerSkipForwardFilled />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={basename + "/img/live-from-space.jpg"}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" mt={2} mb={1}>
            Complex Interaction
          </Typography>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <IconDotsVertical />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={basename + "/img/paella.jpg"}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <IconHeartFilled />
              </IconButton>
              <IconButton aria-label="share">
                <IconShare />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <IconChevronDown />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default WidgetsPage;
