import { nanoid } from 'nanoid';

const size = 7;

const getBasicToken = (): string => {
  const randomHash = nanoid(size);

  return btoa(`${randomHash}:${process.env.CLIENT_SECRET}`);
};

export default getBasicToken;
