import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={5} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="secondary" max={999}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} variant="dot" color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="secondary" invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
