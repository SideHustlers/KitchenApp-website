import { gql } from "@apollo/client";

export const RECIPES_QUERY = gql`
  query {
    recipes {
      recipe_id
      name
      prep_time
      cook_time
      difficulty
      rating
      author
      description
      media {
        url
      }
    }
  }
`;

export const FULL_RECIPE_QUERY = (recipe_id) =>  gql`
  query {
    recipe(id:"${recipe_id}") {
      recipe_id
      name
      description
      prep_time
      cook_time
      serving_size
      difficulty
      author
      tags
      media {
        url
      }
      ingredients {
        name
        raw
        quantity
      }
      steps {
        description
      }
      nutrition {
        calories
        total_fat
        trans_fat
        saturated_fat
        total_carbohydrates
        fiber
        sodium
        sugar
        cholesterol
        vitamins {
          name
          value
        }
      }
    }
  } 
`;