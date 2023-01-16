import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import Player from "../data/player";

const PlayerItem = ({player} : {player: Player}) => {
    return ( 
        <Link href={"/players/" + player.dorsal} legacyBehavior> 
            <ListItem key={player.dorsal} sx={{bgcolor: 'background.paper', marginBottom: 2, paddingLeft: 1, paddingRight: 1}} >
                    <ListItemButton>
                        <ListItemText primary={player.dorsal + " - " + player.name} primaryTypographyProps={{fontWeight: 'bold'}} />
                    </ListItemButton>
            </ListItem>
        </Link>
    );
}
 
export default PlayerItem;