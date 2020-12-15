import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { BsPencil } from 'react-icons/bs';

const GroceryListItem = ({item, onCheck}) => {
  const styles = StyleSheet.create({
    itemContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      // boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
      alignItems: 'center',
      width: 'calc(100%-20px)',
      padding: 20,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      borderRadius: 10,
    },
    itemTxt: {
      marginBottom: 0,
      textDecoration: item.checked ? 'line-through' : 'none'
    }
  });
  return (
    <div className={css(styles.itemContainer)}>
      <p className={css(styles.itemTxt)}>{item.name}</p>
      <div>
        <BsPencil style={{marginRight: 20, cursor: 'pointer'}} />
        <Checkbox defaultChecked={item.is_fulfilled} onChange={(e) => onCheck(item, e.target.checked)} />
      </div>
    </div>
  )
}

export default GroceryListItem;