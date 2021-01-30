/** @jsx jsx */
/** @jsxRuntime classic */
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { css, jsx } from "@emotion/react";

const randomGradientColors = () => {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return [
    `hsl(${randomInt(210, 225)},${randomInt(60, 80)}%,${randomInt(45, 55)}%)`,
    `hsl(${randomInt(210, 225)},${randomInt(60, 80)}%,${randomInt(45, 65)}%)`,
  ];
};

const randomColor = () => {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return `hsl(${randomInt(210, 225)},${randomInt(60, 80)}%,${randomInt(
    45,
    55
  )}%)`;
};

const style = {
  title: css`
    background: -webkit-linear-gradient(
      -70deg,
      ${randomGradientColors()[0]} 0%,
      ${randomGradientColors()[1]} 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  `,
};

const catchPhrases = [
  "you're tender",
  "you like tenders",
  "you're a nice person",
];

const randomCatch = Math.floor(Math.random() * catchPhrases.length);

const Home = () => {
  const [catchPhrase, setCatchPhrase] = useState("");
  useEffect(() => {
    [...document.querySelectorAll("main > div:not(:first-of-type)")].map(
      (div) => {
        div.style.backgroundColor = `${randomColor()}`;
      }
    );

    setCatchPhrase(catchPhrases[randomCatch]);
  }, []);

  return (
    <div className="">
      <Head>
        <title>Frontenders</title>
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        className="d-grid color-white ggap-2 fsz-24"
        css={css`
          @media (min-width: 960px) {
            grid-template-columns: repeat(2, minmax(10px, 2fr));
          }
        `}
      >
        <div className="pos-relative h-100vh d-flex ai-center jc-center p-32">
          <div
            className="d-flex ai-center"
            css={css`
              filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
            `}
          >
            {" "}
            <Image src="/logo.png" width={62} height={62} className="mr-16" />
            <h1 className="md:fsz-64 d-inline-block ml-16" css={style.title}>
              Frontenders
            </h1>
          </div>
        </div>

        <div className="pos-relative h-100vh d-flex fxd-column ai-start jc-center p-32">
          <h3>
            You're interested by the front-end world and you want to find cool
            people to talk with?
          </h3>

          <h3>
            You're super-active and create tons of projects and wants to
            hang-out with people with the same interest?
          </h3>

          <h3>Then this community is for you!</h3>
        </div>

        <div className="pos-relative h-100vh d-flex fxd-column ai-center jc-center p-32">
          <p>You'll have access to</p>
          <ul
            className="d-grid lis-none tt-upper p-16 ggap-16 ta-center"
            css={css`
              @media (min-width: 960px) {
                grid-template-columns: repeat(2, minmax(10px, 2fr));
              }
            `}
          >
            <li className="p-16 bgc-white">
              <h5 css={style.title}>Cool chats</h5>
            </li>
            <li className="p-16 bgc-white">
              <h5 css={style.title}>Development related channels</h5>
            </li>
            <li className="p-16 bgc-white">
              <h5 css={style.title}>
                Bots ( Sidebar.io, Caniuse, Mdn and more )
              </h5>
            </li>
            <li className="p-16 bgc-white">
              <h5 css={style.title}>
                A place to share your projects and get feedback
              </h5>
            </li>
          </ul>
        </div>

        <div className="pos-relative h-100vh d-flex ai-center jc-center p-32">
          <div className="d-flex bdw-1 bds-solid bdc-white bdr-4">
            <a
              href="https://nextjs.org/docs"
              className="d-block tt-upper h-100p w-100p ph-16"
            >
              <h3>Join us on Discord</h3>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
