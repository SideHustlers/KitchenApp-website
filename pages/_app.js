// pages/_app.js
import '../assets/css/App.css';
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/override_header.css';
import '../assets/css/override_steps.css';
import { Layout } from 'antd';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../ApolloClient";

import NavBar from '../components/NavBar';
const { Header, Content } = Layout;

Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <html>
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Castoro"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
          <link href='https://fonts.googleapis.com/css?family=Sansita Swashed' rel='stylesheet'/>
          <title>React App</title>
        </head>
        <body>
          <div className="App">
            <Layout>
              <Header style={{backgroundColor: 'white', boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)', position: 'relative', zIndex: 100, height: 'auto'}}>
                <NavBar />
              </Header>
              <Content style={{backgroundColor: 'white'}}>
                <Component {...pageProps} />
              </Content>
            </Layout>
          </div>
        </body>
      </html>
    </ApolloProvider>
  );
}