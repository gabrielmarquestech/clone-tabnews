import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    // host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    // port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();

  try {
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

export default {
  query: query,
};
