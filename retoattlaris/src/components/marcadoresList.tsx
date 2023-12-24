import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FeedIcon from "@mui/icons-material/Feed";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
export default function FolderList() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FeedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ees" secondary="Descripcion del Estudio" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContactEmergencyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="ssp"
          secondary="Nombres y Apellidos de Especialista que informa"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonAddAlt1Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="pce"
          secondary="Nombres,apellidos y edad del paciente"
        />
      </ListItem>
    </List>
  );
}
