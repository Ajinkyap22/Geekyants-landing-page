const hasuraSecret = process.env
  .NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET as string;

const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

export const getData = async (body: object) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": hasuraSecret,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
