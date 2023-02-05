import { generatePath } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Country } from "api";
import { NavLink } from "components/Link";
import { RouteKey } from "../../Navigation/routes";

const CountryCard = ({ name, region, area }: Country) => (
  <Card>
    <NavLink
      to={generatePath(RouteKey.Country, {
        id: name,
      })}
      underline="none"
      color="violet"
    >
      <CardHeader title={name} />
    </NavLink>
    <CardContent>
      <List dense>
        <ListItem>
          <ListItemText primary={`Region: ${region}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Area: ${area}`} />
        </ListItem>
      </List>
    </CardContent>
  </Card>
);

export default CountryCard;
