import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';

const handler: NextApiHandler = async (
  _: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { publicRuntimeConfig } = getConfig();
    const result = await fetch(
      `${publicRuntimeConfig.API_BASE_URL}/endpoint`,
      {
        method: 'POST',
        headers: {
          'X-Subscription-Key': publicRuntimeConfig.API_SECRET_KEY,
        },
      }
    );

    if (result.status === 200) {
      const data = await result.json();

      res.status(200).json(data.value);
    } else {
      const body = await result.text();

      res.status(500).end(body);
    }
  } catch (e) {
    res.status(500).end(e.message);
  }
};

export default handler;