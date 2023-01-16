import List  from "@mui/material/List";
import Box from "@mui/material/Box";
import data from "../../data/data";
import PlayerItem from "../../components/PlayerItem";
import PlayerModel from "../../data/player";
import { GetStaticProps } from "next";
import Typography from "@mui/material/Typography";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {

    //[Request to External API]

    return {
        props: { playerData: data }
    }
}

function Players({playerData} : {playerData: PlayerModel[]}) {
    return (
        <>
            <Head>
                <title>Champions | Players</title>
            </Head>
            <Box>
                <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', marginTop: 1}}>Players</Typography>
                <Box display="flex">
                    <List sx={{width: '100%'}}>
                        {playerData.map((player: PlayerModel) => {
                            return (
                                <PlayerItem player={player} key={player.dorsal} />
                            )
                        })}
                    </List>
                </Box>
            </Box>
        </>
    )
}

export default Players;