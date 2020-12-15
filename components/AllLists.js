import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { HiOutlineSearch } from 'react-icons/hi';
import AllListItem from './AllListItem';

const AllLists = ({ lists, selectedList, onListClick }) => {
  const [shownLists, setShownLists] = useState(lists);
  const [search, setSearch] = useState('');

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
      padding: 15,
      // borderBottom: '1px solid lightgray'
    },
    searchContainer: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'white',
      width: '100%',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 15,
      border: '1px solid lightgray',
      ":focus-within": {
        border: '1px solid red',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
      }
    },
    allListContainer: {
      height: '100%',
      overflow: 'auto'
    }
  });

  useEffect(() => {
    if (search != '') {
      let matchingList = [];
      matchingList.push(lists[selectedList]);
      lists.map(item => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          matchingList.push(item);
        }
      });
      setShownLists(matchingList);
    } else {
      setShownLists(lists);
    }
  }, [search]);

  return (
    <div className={css(styles.mainContainer)}>
      <div className={css(styles.header)}>
        <div className={css(styles.searchContainer)}>
            <span style={{marginRight: 10}}><HiOutlineSearch /></span>
            <form>
              <input type="text" placeholder="Search Lists" style={{border: 'none', outline: 'none', width: '100%'}} onChange={e => setSearch(e.target.value)} />
            </form>
          </div>
      </div>
      <div className={css(styles.allListContainer)}>
        {
          shownLists.map((list, index) => (
            <AllListItem item={list} index={index} selected={index === selectedList} onListClick={onListClick} />
          ))
        }
      </div>

    </div>
  )
}

export default AllLists;