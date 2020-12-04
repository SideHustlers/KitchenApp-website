import React, { useState } from "react";
import { StyleSheet, css } from 'aphrodite';
import { message, Spin, Steps } from 'antd';
import { Container } from 'reactstrap';

import RecipeCard from "../../components/RecipeCard";
import { useQuery } from "@apollo/client";

import {RECIPES_QUERY} from '../../gql/queries/recipes';

const { Step } = Steps;

const Recipes = props => {

  const { loading, error, data } = useQuery(RECIPES_QUERY);

  if (!loading) {
    if (error) {
      message.error("Unable to fetch recipes");
    }
    return (
      <Container>
        <h3 className={css(styles.title)}>All Recipes</h3>
        <hr style={{marginBottom: 30}}/>
        <div className={css(styles.cardContainer)}>
          {data && 
            data.recipes.map((recipe, index) => (
              <RecipeCard recipe={recipe} index={index} length={data.recipes.length} {...props} />
            ))
          }
        </div>
      </Container>
    );
  } else {
    return (
      <Spin spinning={loading} delay={0} size="large" />
    )
  }
}


const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    marginTop: 30
  },
  cardContainer: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat( auto-fit, minmax(250px, max-content) )',
    rowGap: '10px',
    columnGap: '30px'
  }
})

export default Recipes;