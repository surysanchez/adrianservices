import  {useState}  from 'react';
import './App.css';

import { AboutUs, FindUs, Footer, Gallery, Header, SpecialMenu } from './container';
import { Navbar,CreateReviews } from './components';
import ReviewsPage from './container/ReviewsPage/ReviewsPage';
import AuthPage from './components/AuthPage/AuthPage';

// import Contact from './container/Contact/Contact';

export default function App() {
  const [user, setUser] = useState(null)
  return (
  <main className='App'>
    <>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Gallery />
    {/* <Intro /> */}
    <FindUs />
    {/* <ReviewsPage/> */}
    {/* { user ?
    <CreateReviews/>
    : 
    <AuthPage />
    } */}
     <CreateReviews/>
    {/* <Contact/> */}
    <Footer/>
    </>
  </main>
)};




