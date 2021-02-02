// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fetch = require("node-fetch");
const guildId = "804299555297296389";

export const getDiscordData = async () => {
  const dataPreview = await fetch(
    `https://discord.com/api/v8/guilds/${guildId}/preview`,
    {
      method: "GET",
      headers: {
        Authorization: process.env.NEXT_PUBLIC_DISCORD_API_AUTH,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  const dataChannels = await fetch(
    `https://discord.com/api/v8/guilds/${guildId}/channels`,
    {
      method: "GET",
      headers: {
        Authorization: process.env.NEXT_PUBLIC_DISCORD_API_AUTH,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  const dataBots = await fetch(`https://discord.com/api/v8/guilds/${guildId}`, {
    method: "GET",
    headers: {
      Authorization: process.env.NEXT_PUBLIC_DISCORD_API_AUTH,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const bots = data.roles.filter((role) => role?.tags);
      return bots;
    });

  if (dataPreview && dataChannels && dataBots) {
    const apiResponse = {
      name: dataPreview.name,
      members: dataPreview.approximate_member_count,
      channels: [...dataChannels]
        .filter((channel) => channel.parent_id !== "804772888376639510")
        .filter((channel) => channel.type !== 4)
        .map((channel) => {
          return {
            name: channel.name,
            topic: channel.topic ? channel.topic : "",
            id: channel.id,
            type: channel.type === 0 ? "channel" : "unknown",
          };
        }),
      categories: [...dataChannels]
        .filter((channel) => channel.type === 4)
        .map((channel) => {
          return {
            name: channel.name,
            topic: channel.topic ? channel.topic : "",
            id: channel.id,
            type: "category",
          };
        }),
      bots: dataBots,
    };

    return apiResponse;
  }
};
export default async (req, res) => {
  try {
    const discordData = await getDiscordData();
    res.status(200).send(discordData);
  } catch (error) {
    res.setHeader("content-type", "application/json");
    res.status(422).send(
      JSON.stringify({
        error: error.message,
      })
    );
  }
};
