import React from 'react';
import moment from 'moment';
import { StyleSheet, css } from 'aphrodite';

const AllListItem = ({ item, index, onListClick, selected }) => {

  const styles = StyleSheet.create({
    itemContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      padding: 20,
      borderBottom: '1px solid lightgray',
      backgroundColor: selected ? '#fedfe0': 'white',
      cursor: 'pointer',
    },
    dateRange: {
      marginBottom: 0,
      fontSize: 14,
      color: '#808080',
    }
  });

  return (
    <div className={css(styles.itemContainer)} onClick={() => onListClick(index)}>
      {item.name}
      <p className={css(styles.dateRange)}>{
        moment(item.start_date).format('MMM D') + " - " + moment(item.end_date).format('MMM D')}</p>
    </div>
  )
}

export default AllListItem;