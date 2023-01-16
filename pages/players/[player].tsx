import { GetStaticPaths } from "next";
import PlayerModel from "../../data/player";
import data from "../../data/data";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = async () => {

    //[Request to External API]

    const paths = data.map(player => { 
        return {
            params: { player: player.dorsal.toString() }
        } 
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const player: string = context.params.player
    const res = data.find(elem => elem.dorsal.toString() === player)
    return {
        props: {player: res}
    }
}

const Player = ({player} : {player: PlayerModel}) => {
    return (
        <>
            <Head>
                <title>Champions | Players</title>
            </Head>
            <Box sx={{bgcolor: 'background.paper', paddingLeft: 2, paddingTop: 0.5, paddingBottom: 2}}>
                <Typography variant="h4" sx={{marginTop: 1}} gutterBottom>{player.name}</Typography>
                <Typography variant="body1" sx={{fontSize: 20}}><b>{"N°: "}</b>  {player.dorsal}</Typography>
                <Typography variant="body1" sx={{fontSize: 20}}><b>{"Age: "}</b>  {player.age}</Typography>
                <Typography variant="body1" sx={{fontSize: 20}}><b>{"Team: "}</b> {player.team}</Typography>
                <Typography variant="body1" sx={{fontSize: 20}}><b>{"Place of Birth: "}</b> {player.place}</Typography>
                <Link href={"/players"} legacyBehavior><Button variant="contained" sx={{backgroundColor: "#03a9f4", marginTop: 2}}>Back</Button></Link>
            </Box>
        </>
    );
}
 
export default Player;