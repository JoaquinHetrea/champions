import Box from '@mui/material/Box'
import Image from 'next/image'
import { Typography } from "@mui/material";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Champions | Home</title>
      </Head>
      <Box>
        <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', marginTop: 1}}>Champions</Typography>
        <p>
        The 2022 FIFA World Cup was an international football tournament contested by the men&apos;s national teams of FIFA&apos;s member associations and 22nd edition of the FIFA World Cup.
        It took place in Qatar from 20 November to 18 December 2022, making it the first World Cup held in the Arab world and Muslim world, and the second held entirely in Asia after the 2002 tournament in South Korea and Japan.
        </p>
        <p>
        Argentina were crowned the champions after winning the final against the title holder France 4-2 on penalties following a 3-3 draw after extra time. 
        It was Argentina&apos;s third title and their first since 1986.
        </p>
        <Image src="/campeones.jpeg" width="960" height='640' alt="asd"/>
      </Box>
    </>
  )
}
