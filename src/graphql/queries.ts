import { gql } from "@apollo/client";

export const GET_FEED = gql`
  mutation getFeed {
    getPageFeed(fnArgs: { pageId: "kanbon.at" })
  }
`;
