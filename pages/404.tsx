import { Box, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function NotFound(){
    const [redirectText, setRedirectText] = useState("Redirecting")
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3500)
    }, [router])

    const addDot = () => {
        setRedirectText(prevRedirectText => prevRedirectText + '.')
    }

    useEffect(() => {
        const interval = setInterval(addDot, 1000)
        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <Head>
                <title>Champions | Not Found</title>
            </Head>
            <Box>
                <Typography align="center" gutterBottom variant="h3">Error 404 - <a href="https://en.wikipedia.org/wiki/HTTP_404">Not Found</a></Typography>
                <Typography align="center" gutterBottom variant="h5">{redirectText}</Typography>
            </Box>
        </>
    )
}

export default NotFound;