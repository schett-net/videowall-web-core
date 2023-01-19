import { client } from "../../../index";
import { GET_FEED } from "../../../graphql/queries";

export const getIdFromURL = () => {
  const url = window.location.href;
  const id = url.split("/").pop();

  return id;
};

export const getData = async () => {
  const id = getIdFromURL();

  const res = await client.mutate({
    mutation: GET_FEED,
    variables: { pageId: id },
  });

  console.log("RES", res);

  return res;
};
