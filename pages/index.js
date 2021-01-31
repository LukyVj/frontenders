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
    `hsl(${randomInt(210, 225)},${randomInt(60, 90)}%,${randomInt(45, 55)}%)`,
    `hsl(${randomInt(210, 225)},${randomInt(60, 90)}%,${randomInt(45, 65)}%)`,
  ];
};

const randomColor = () => {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return `hsl(${randomInt(210, 225)},${randomInt(60, 90)}%,${randomInt(
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
        const color = randomColor();
        div.style.backgroundColor = `${color}`;
        div.style.color = `${color}`;
      }
    );

    setCatchPhrase(catchPhrases[randomCatch]);
  }, []);

  const perks = [
    { icon: "😎", value: "Cool chats" },
    { icon: "🛠", value: "Development related channels" },
    { icon: "🤖", value: "Bots ( Sidebar.io, Caniuse, Mdn and more )" },
    { icon: "📢", value: "A place to share your projects and get feedback" },
  ];

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
        className="d-grid color-white fsz-24 ggap-2"
        css={css`
          @media (min-width: 960px) {
            grid-template-columns: repeat(2, minmax(10px, 2fr));
          }
        `}
      >
        <div className="pos-relative h-100vh d-flex ai-center jc-center p-64">
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

        <div className="pos-relative h-100vh d-flex fxd-column ai-start jc-center p-64">
          <div className="color-white pos-relative z-2">
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
        </div>

        <div className="pos-relative h-100vh d-flex fxd-column ai-center jc-center p-64">
          <div className="color-white pos-relative z-2">
            <p>You'll have access to</p>
            <ul
              className="d-grid lis-none tt-upper p-16 ggap-16 ta-center"
              css={css`
                @media (min-width: 960px) {
                  grid-template-columns: repeat(2, minmax(10px, 2fr));
                }
              `}
            >
              {perks.map((perk) => {
                return (
                  <li className="p-16 bgc-white d-flex ai-start jc-start ta-left bdr-6 bxs-default">
                    <span className="pr-16">{perk.icon}</span>
                    <h5 className="p-0 m-0" css={style.title}>
                      {perk.value}
                    </h5>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pos-relative h-100vh d-flex ai-center jc-center p-64">
          <div className="d-flex bdw-1 bds-solid bdc-white bdr-4 color-white">
            <a
              href="https://nextjs.org/docs"
              className="d-block tt-upper h-100p w-100p ph-16"
            >
              <h3 className="d-flex ai-center jc-between">
                Join us on{" "}
                <Image src="/discord.svg" width={294 / 2} height={50} />
              </h3>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
