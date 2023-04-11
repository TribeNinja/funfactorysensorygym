import axios from "axios";
import { config } from "sanity";

async function postToWebhook(webhookURL, data) {
  try {
    const response = await axios.post(webhookURL, data);
  } catch (error) {
    console.error(error);
  }
}

export default async (req, res) => {
  const projectId = config.projectId;
  const dataset = config.dataset;
  const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;

  postToWebhook(process.env.ZAPIER_GIFTCARDS, {
    ...req.body,
  });

  const { data } = await axios.post(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
    {
      mutations: [
        {
          create: {
            _type: "giftcardOrders",
            ...req.body,
          },
        },
      ],
    },
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  );

  res.status(201).send(data.results[0]);
};
