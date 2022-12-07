import { PlayCircleIcon } from "@heroicons/react/20/solid";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import { Container } from "~/components";
import { NextPageWithLayout } from "~/types/common.types";

// SSR
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Authenticate: NextPageWithLayout<Props> = ({ providers }) => {
    console.log(providers);
    return (
        <>
            <Head>
                <title>DaftAcademy - WebApp 2022</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <div className="flex flex-auto items-center relative justify-center min-h-screen">
                    <div className="z-10">
                        {providers
                            ? Object.values(providers).map((provider) => {
                                  return (
                                      <div key={provider.name}>
                                          <button
                                              onClick={() =>
                                                  signIn(provider.id, {
                                                      callbackUrl: "/",
                                                  })
                                              }
                                              className="rounded-full bg-ui2 bg-opacity-40 hover:bg-opacity-50 transition-all duration-300 ease-in-out"
                                          >
                                              <PlayCircleIcon className="h-18 text-ui7 hover:text-ui6 opacity-90 transition-all duration-300 ease-in-out" />
                                          </button>
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Authenticate;
