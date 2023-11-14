const uri =
  process.env.ENVIRONMENT === "local"
    ? "http://localhost:4000/"
    : "http://graphql:4000/";

async function performQuery(
  query: string,
  args: { [key: string]: string },
): Promise<{ data: any }> {
  const result = await fetch(uri, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query,
      variables: {
        ...args,
      },
    }),
  });
  const res = await result.json();
  return res;
}

export default { query: performQuery };
