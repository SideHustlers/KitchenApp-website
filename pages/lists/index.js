import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Container } from 'reactstrap';
import GroceryList from '../../components/GroceryList';
import AllLists from '../../components/AllLists';
import Loader from "../../components/Loader";

import { GROCERY_LIST_QUERY } from '../../gql/queries/grocery_lists';
import { useQuery } from "@apollo/client";
import { message } from 'antd';

const Lists = props => {

  // const [lists, setLists] = useState([
  //   {
  //     'name': 'Weekly groceries',
  //     'start_date': '2020-12-08T00:00:00.000Z',
  //     'end_date': '2020-12-13T00:00:00.000Z',
  //     'items': [
  //       {
  //         'name': '12oz Hershey Kisses chocolate',
  //         'checked': false
  //       },
  //       {
  //         'name': '24oz All purpose flour',
  //         checked: false
  //       },
  //       {
  //         'name': '2 sticks Salted Butter',
  //         'checked': true
  //       },
  //       {
  //         'name': '12oz Hershey Kisses chocolate',
  //         'checked': false
  //       },
  //       {
  //         'name': '24oz All purpose flour',
  //         checked: false
  //       },
  //       {
  //         'name': '2 sticks Salted Butter',
  //         'checked': true
  //       },
  //       {
  //         'name': '12oz Hershey Kisses chocolate',
  //         'checked': false
  //       },
  //       {
  //         'name': '24oz All purpose flour',
  //         checked: false
  //       },
  //       {
  //         'name': '2 sticks Salted Butter',
  //         'checked': true
  //       },
  //       {
  //         'name': '12oz Hershey Kisses chocolate',
  //         'checked': false
  //       },
  //       {
  //         'name': '24oz All purpose flour',
  //         checked: false
  //       },
  //       {
  //         'name': '2 sticks Salted Butter',
  //         'checked': true
  //       }
  //     ]
  //   },
  //   {
  //     'name': 'Christmas groceries',
  //     'start_date': '2020-12-24T00:00:00.000Z',
  //     'end_date': '2020-12-29T00:00:00.000Z',
  //     'items': [
  //       {
  //         'name': '12oz Hershey Kisses chocolate',
  //         'checked': false
  //       },
  //       {
  //         'name': '24oz All purpose flour',
  //         checked: false
  //       },
  //       {
  //         'name': '2 sticks Salted Butter',
  //         'checked': true
  //       },
  //     ]
  //   },
  // ]);
  
  const { loading, error, data } = useQuery(GROCERY_LIST_QUERY);
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const styles = StyleSheet.create({
    titleContainer: {
      marginBottom: 40,
      marginTop: 30
    },
    splitContainer: {
      width: '100%',
      height: '70vh',
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      border: '1px solid #d5d5d5',
    },
    leftContainer:{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid #d5d5d5'
    },
    rightContainer: {
      flex: 2,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fbfafa'
    }
  });

  const onListClick = index => {
    setSelectedIndex(index);
  }

  if (!loading) {
    if (error) {
      message.error("Unable to fetch meals");
    }
    return (
      <Container>
        <div className={css(styles.titleContainer)}>
          <h3>Grocery Lists</h3>
        </div>
        {/* <hr style={{marginBottom: 30}}/> */}
        <div className={css(styles.splitContainer)}>
          <div className={css(styles.leftContainer)}>
            <AllLists lists={data.grocery_lists} selectedList={selectedIndex} onListClick={onListClick} />
          </div>
          <div className={css(styles.rightContainer)}>
            <GroceryList list={data.grocery_lists[selectedIndex]} />
          </div>
        </div>
      </Container>
    );
  } else {
    return (
      <Loader overlay={false} hasHeader={true} />
    )
  }
}

export default Lists;