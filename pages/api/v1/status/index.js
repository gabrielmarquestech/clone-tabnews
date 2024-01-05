import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 'Hello World' as result;");
  console.log(result.rows);
  response.status(200).json({
    status: "OK",
  });
}

export default status;
