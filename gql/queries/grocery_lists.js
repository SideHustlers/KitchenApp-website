import { gql } from "@apollo/client";

export const GROCERY_LIST_QUERY = gql`
  query {
    grocery_lists {
      name
      start_date
      end_date
      items {
        name
        is_fulfilled
      }
    }
  }
`;