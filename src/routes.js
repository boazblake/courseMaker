import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import AboutPage from './components/about/aboutPage';
import HomePage from './components/home/homePage';
import coursesPage from './components/course/CoursesPage';
import manageCoursePage from './components/course/ManageCoursePage';


export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={coursesPage} />
    <Route path="course" component={manageCoursePage} />
    <Route path="course/:id" component={manageCoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);