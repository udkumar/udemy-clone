# PairClasses
<a href="#">Live link</a>

## What is PairClasses?

PairClasses is a web application for learning. PairClasses is intended to be a source of education where the instructors are self-motivated and passionate for the courses they create. Courses are created by those knowledgeable in a subject, and others enroll in the class if they are interested in the subject. This project was built in ~60 hours, but more features will be added as time allows.

## PairClasses Features

 * Courses
   * Each course can be individually viewed to see additional data and course information.
   * After selecting a course to view, a list of suggested similar courses is populated.
   * Videos can be played while viewing a course.
 
 ![carousel movement](images/arrow_click.gif)
  
 * Searching/ Browsing
   * Users have access to a search feature that allows quick navigation of matching courses.
   * Courses can additionally be browsed by clicking on arrow buttons in a row of similar courses.
   * Results of searches can be sorted by multiple factors.
  
 ![search results](images/search.png)
 
 * Reviews
   * Courses have reviews that are written by students of the course.
   * Users are able to provide text-based reviews as well as a 1-5 rating.

## Technologies Used

 * Backend
   * Database: PostgreSQL
   * Data models, controllers, and routing: Ruby/2.5.7 on Rails/5.2
   * Authentication: BCrypt
  
 * Frontend
   * Framework: React
   * State Management: Redux
   * CSS3

## Upcoming Features

 * Expand search to match additional fields of courses (instructor, description, subtitle).
 * Implement fuzzy-matching on searches to provide results for typos.
 * Bookmark feature to let users save courses for the future.
 * User profile
 * Payment gateway
 
