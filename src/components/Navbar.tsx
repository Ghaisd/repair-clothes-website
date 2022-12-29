import { Stack } from "@mui/material";
import RoutingLink from "./UI/RoutingLink";
import TranslateIcon from "@mui/icons-material/Translate";

export const Navbar = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <RoutingLink isLogo to="/">
          Drammen Skredderi
        </RoutingLink>
        <Stack direction="row" spacing={6}>
          <RoutingLink isLogo to="/">
            Shop
          </RoutingLink>
          <RoutingLink isLogo to="/">
            About
          </RoutingLink>
          <RoutingLink isLogo to="/">
            Contact
          </RoutingLink>
        </Stack>
        <TranslateIcon sx={{ transform: "scale(3)", p: 3 }} />
      </Stack>
    </>
  );
};
