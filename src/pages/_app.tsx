import React from "react";
import type { AppProps } from "next/app";
import { PlayerProvider } from "~/contexts/player.context";
import { NextPageWithLayout } from "~/types/common.types";

import "~/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { SpotifyProvider } from "~/contexts/spotify.context";

type Props = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: Props) {
    const withLayout = Component.getLayout ?? ((page) => page);

    return (
        <>
            <SessionProvider session={pageProps.session}>
                <SpotifyProvider>
                    <PlayerProvider>
                        {withLayout(<Component {...pageProps} />)}
                    </PlayerProvider>
                </SpotifyProvider>
            </SessionProvider>
        </>
    );
}

export default MyApp;
