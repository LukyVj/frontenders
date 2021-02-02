/** @jsx jsx */
/** @jsxRuntime classic */
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { css, jsx } from "@emotion/react";
import DiscordSvg from "../components/DiscordSvg/DiscordSvg.js";
import { getDiscordData } from "./api/discord";
import { getRandom } from "../scripts/helpers.js";

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

const DiscordEmbed = ({ data }) => {
  return (
    <div
      css={css`
        background-color: #7289da;
      `}
      className="p-16 pv-32 color-white bdr-6 bxs-default"
    >
      <DiscordSvg color="currentColor" width={294 / 2} height={50} />
      <div className="d-grid g-2 ggap-16">
        <div>
          <h4 className="m-0">{data.members} members</h4>
        </div>
        <div>
          <h4 className="m-0">{data.channels.length} channels, among them:</h4>
          <ul className="lis-none m-0 p-0 pv-8">
            {getRandom(data.channels, 4).map((channel) => {
              return (
                <li className="p-4">
                  <span
                    css={css`
                      background: rgba(0, 0, 0, 0.2);
                    `}
                    className="d-inline-block h-100p ph-4 bdr-4"
                  >
                    {channel.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4 className="m-0">
            {data.categories.length} channels, among them:
          </h4>
          <ul className="lis-none m-0 p-0 pv-8">
            {getRandom(data.categories, 4).map((channel) => {
              return (
                <li className="p-4">
                  <span
                    css={css`
                      background: rgba(0, 0, 0, 0.2);
                    `}
                    className="d-inline-block h-100p ph-4 bdr-4"
                  >
                    {channel.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4 className="m-0">{data.bots.length - 1} bots</h4>
          <ul className="lis-none m-0 p-0 pv-8">
            {data.bots.map((channel) => {
              return (
                <li className="p-4">
                  <span
                    css={css`
                      background: rgba(0, 0, 0, 0.2);
                    `}
                    className="d-inline-block h-100p ph-4 bdr-4"
                  >
                    {channel.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Home = (props) => {
  const [catchPhrase, setCatchPhrase] = useState("");
  useEffect(() => {
    [...document.querySelectorAll("main > div:not(:first-child)")].map(
      (div) => {
        const color = randomColor();

        div.style.backgroundColor = `${color}`;
        div.style.color = `${color}`;
      }
    );
    // document.querySelector("main > div:last-of-type").style.color = color;
    setCatchPhrase(catchPhrases[randomCatch]);
  }, []);

  console.log(props);

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
        <div className="pos-relative h-100vh d-flex ai-center jc-center ph-24 pv-64 md:ph-48 lg:ph-64">
          <div className="marker" />
          <div
            className="d-flex ai-center pos-relative z-1"
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

        <div className="pos-relative h-100vh d-flex fxd-column ai-start jc-center ph-24 pv-64 md:ph-48 lg:ph-64">
          <div className="marker" />
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

        <div className="pos-relative h-100vh d-flex fxd-column ai-center jc-center ph-24 pv-64 md:ph-48 lg:ph-64">
          <div className="marker" />
          <div className="color-white pos-relative z-2">
            <p>You'll have access to</p>
            <ul className="d-flex fxd-column lis-none tt-upper ta-center p-0 w-100p">
              {perks.map((perk) => {
                return (
                  <li className="p-16 bgc-white d-flex ai-start jc-start ta-left bdr-6 bxs-default mb-16">
                    <span className="pr-16">{perk.icon}</span>
                    <h4 className="p-0 m-0 color-black" css={style.title}>
                      {perk.value}
                    </h4>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pos-relative h-100vh d-flex ai-center jc-center ph-24 pv-64 md:ph-48 lg:ph-64">
          <div className="marker" />
          <div className="d-flex fxd-column color-current pos-relative z-1 w-90p h-auto ">
            <DiscordEmbed data={props.discordApiData} />
          </div>
        </div>

        <div className="pos-relative h-100vh d-flex ai-center jc-center ph-24 pv-64 md:ph-48 lg:ph-64">
          <div className="marker" />
          <div className="d-flex fxd-column color-current bgc-white pos-relative z-1 w-90p h-auto pv-32">
            <div className="d-flex ai-start jc-between h-100p">
              <div className="as-end d-flex ai-center jc-center w-100p p-16">
                <a
                  href="https://nextjs.org/docs"
                  className="d-inline-block tt-upper ph-16 bdw-2 bdr-4 bds-solid bdc-current"
                >
                  <h3 className="m-0 pv-8 d-flex ai-center jc-between fxd-column md:fxd-row">
                    <span className="d-inline-block mb-16 md:mr-8 md:mb-0">
                      Join us on
                    </span>
                    <span>
                      <DiscordSvg
                        color="currentColor"
                        width={294 / 2}
                        height={50}
                      />
                    </span>
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pos-relative h-100vh d-flex ai-center jc-center ph-24 pv-64 md:ph-48 lg:ph-64">
          <div className="marker" />
          <div className="d-flex fxd-column color-current bgc-white pos-relative z-1 w-90p h-auto pv-32">
            <div className="d-flex ai-start jc-between h-100p">
              <div className="as-end d-flex ai-center jc-center w-100p p-16">
                <a
                  href="https://nextjs.org/docs"
                  className="d-inline-block tt-upper ph-16 bdw-2 bdr-4 bds-solid bdc-current"
                >
                  <h3 className="m-0 pv-8 d-flex ai-center jc-between fxd-column md:fxd-row">
                    <span className="d-inline-block mb-16 md:mr-8 md:mb-0">
                      Join us on
                    </span>
                    <span>
                      <DiscordSvg
                        color="currentColor"
                        width={294 / 2}
                        height={50}
                      />
                    </span>
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps(ctx) {
  const discordApiData = await getDiscordData();
  return {
    props: {
      discordApiData,
    }, // will be passed to the page component as props
  };
}

export default Home;
