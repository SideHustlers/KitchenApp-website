import React, { useState, useEffect } from "react";
import { StyleSheet, css } from 'aphrodite';
import { message, Spin } from 'antd';
import { Container } from 'reactstrap';
import { useRouter } from 'next/router';
import { useQuery } from "@apollo/client";

import { FULL_MEAL_QUERY } from '../../gql/queries/meals';

const Meal = props => {
  const router = useRouter();
  const { loading, error, data } = useQuery(FULL_MEAL_QUERY(router.query.id));
  console.log('data', data);


    if (!loading) {
      if (error) {
        console.log(error)
        message.error("Unable to fetch meal");
        return null;
      } else {
        return (
          <Container>
            <p>{data.meal.name}</p>
          </Container>
        )
      }
    } else {
      return (
        <Spin spinning={loading} delay={0} size="large" />
      )
    }
}


export default Meal;