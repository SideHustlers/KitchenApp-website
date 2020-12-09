import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import GroceryListItem from './GroceryListItem';
import { BsPlus } from 'react-icons/bs';


const GroceryList = ({ list }) => {

  const styles = StyleSheet.create({
    mainContainer: {
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: 20,
      borderBottom: '1px solid lightgray'
    },
    listNameTxt: {
      marginBottom: 0,
      color: 'red',
      fontSize: 18,
    },
    listContainer: {
      height: 'calc(100%-40px)',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 20,
      // marginBottom: 20
    },
    roundedIcon: {
      width: 35,
      height: 35,
      backgroundColor: 'white',
      marginRight: 10,
      borderRadius: 40,
      color: 'red',
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      ":hover": {
        backgroundColor: 'red',
        color: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      }
    }
  });

  const onItemCheck = (item, checked) => {
    console.log(item, checked);
  }

  return (
    <div className={css(styles.mainContainer)}>
      <div className={css(styles.header)}>
        <p className={css(styles.listNameTxt)}>{list.name}</p>
        <div>
          <div className={css(styles.roundedIcon)}>
            <BsPlus size={30} />
          </div>
        </div>
      </div>
      <div className={css(styles.listContainer)}>
        {
          list.items.map(item => (
            <GroceryListItem item={item} onCheck={onItemCheck} />
          ))
        }
      </div>
    </div>
  )
}

export default GroceryList;