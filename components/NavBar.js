import React, { useState, useEffect } from 'react';
import { Menu, Dropdown } from 'antd';
import { useRouter } from 'next/router';
import { Container, Row } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  textDecoration: 'none'
`

const NavBar = props => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const hideList = ['login', 'register'];

  const gotToLogin = () => {
    router.push('/login');
  };

  const goToRegister = () => {
    router.push('/register');
  }

  const goToHomePage = () => {
    router.push('/');
  }

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    router.push('/');
  }

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [router]);

  const profileDropdown = () => (
    <Menu style={{padding: 10}}>
      <Menu.Item>
        <p className={css(styles.link)} onClick={() => logout()}>Logout</p>
      </Menu.Item>
    </Menu>
  )

  useEffect(() => {
    var prefix = window.location.pathname.slice(1).split('/')[0];
    console.log(prefix);
    if (prefix) {
      setSelectedKey(prefix);
    } else {
      setSelectedKey("home");
    }
  }, [router.pathname]);

  if (hideList.includes(selectedKey)) {
    return null;
  } else {
    return (
      <Container style={{flexDirection: 'row', display: 'flex', marginTop: 5, marginBottom: 5}}>
        <h4 className={css(styles.logo)} onClick={() => goToHomePage()}>Kitchen App</h4>
        <Menu theme="light" mode="horizontal" selectedKeys={[selectedKey]}>
          <Menu.Item key="home"><StyledLink href="/">Home</StyledLink></Menu.Item>
          <Menu.Item key="recipes"><StyledLink href="/recipes" style={{textDecoration:'none'}}>Recipes</StyledLink></Menu.Item>
        </Menu>
        <div className={css(styles.rightContainer)}>
          { isLoggedIn ? (
            <Dropdown overlay={profileDropdown()} overlayStyle={{zIndex: 10000}} placement="bottomLeft">
              <img className={css(styles.profileDropdown)} src={"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"} />
            </Dropdown>
          ): (
            <>
              <p className={css(styles.link)} onClick={() => gotToLogin()}>Login</p>
              <p className={css(styles.link)}>/</p>
              <p className={css(styles.link)} onClick={() => goToRegister()}>Register</p>
            </>
          )}
          
        </div>
      </Container>
    )
  }
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    color: '#F43445',
    marginRight: 50,
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'Sansita Swashed',
    fontSize: 28,
    cursor: 'pointer'
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginTop: 5
  },
  link: {
    color: '#808080',
    marginBottom: 0,
    marginRight: 10,
    fontSize: 14,
    cursor: 'pointer',
    ":hover": {
      color: '#F43445'
    }
  },
  profileDropdown: {
    border: '1px solid #dddddd',
    height: 35,
    width: 35,
    borderRadius: 30,
    objectFit: 'cover',
    alignSelf: 'center',
    cursor: 'pointer'
  }
})


export default NavBar;