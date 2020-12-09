import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import { Container } from 'reactstrap';
import { BsCalendar, BsViewList } from 'react-icons/bs'
import Calendar from "../../components/Calendar";
import { message } from "antd";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";

// import { MEALS_QUERY } from '../../gql/queries/meals';

const Meals = props => {
  const router = useRouter();
  const [meals, setMeals] = useState([
    {
      'meal_id': "ABC123",
      'date': '2020-12-10T00:00:00.000Z',
      'name': 'Pre-christmas family meal'
    },
    {
      'meal_id': "ABC1234",
      'date': '2020-12-13T00:00:00.000Z',
      'name': 'Chocolate Cake Time'
    },
    {
      'meal_id': "ABC12345",
      'date': '2020-12-15T00:00:00.000Z',
      'name': 'Gingerbread house'
    },
    {
      'meal_id': "ABC123456",
      'date': '2020-12-21T00:00:00.000Z',
      'name': 'Gingerbread house 2'
    }
  ]);

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      localStorage.setItem('redirectUr', '/meals');
      router.push('/login');
    }
  })

  const onMealClick = meal => {
    console.log('meal clicked', meal);
    message.success('meal clicked');
  }

  const onMealDragged = (source, destination, mealId) => {
    console.log(source);
    console.log(destination);
    console.log(mealId);
  }


  return (
    <Container>
      <div className={css(styles.titleContainer)}>
        <h3>Meal Planner</h3>
        {/* <div className={css(styles.rightContainer)}>
          <div onClick={() => setActiveTab('calendar')} className={activeTab === 'calendar' ? css(styles.roundedIconActive) : css(styles.roundedIcon)}>
            <BsCalendar size={20} />
          </div>
          <div onClick={() => setActiveTab('list')} className={activeTab === 'list' ? css(styles.roundedIconActive) : css(styles.roundedIcon)}>
            <BsViewList size={22} />
          </div>
        </div> */}
      </div>
      {/* <hr style={{marginBottom: 30}}/> */}
      <Calendar meals={meals} onClick={onMealClick} onDrag={onMealDragged} />
    </Container>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 30
  },
  cardContainer: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat( auto-fit, minmax(250px, max-content) )',
    rowGap: '10px',
    columnGap: '30px'
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  roundedIcon: {
    padding: 10,
    backgroundColor: 'white',
    marginRight: 10,
    borderRadius: 40,
    color: 'pink',
    cursor: 'pointer',
    ":hover": {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: '0 0 25px rgba(0, 0, 0, 0.2)',
    }
  },
  roundedIconActive: {
    padding: 10,
    backgroundColor: 'white',
    marginRight: 10,
    borderRadius: 40,
    color: 'red',
    cursor: 'pointer',
    // ":hover": {
    //   backgroundColor: 'red',
    //   color: 'white',
    //   boxShadow: '0 0 25px rgba(0, 0, 0, 0.2)',
    // }
  }
});

export default Meals;