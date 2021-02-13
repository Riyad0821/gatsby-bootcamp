import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      <h2>I'm Riyad, a React developer living in beautiful Mohammadpur.</h2>
       <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
    </Layout>
  )
  // return (
  //   <div>
  //     <h1>Hello.</h1>
  //     <h2>I'm Andrew, a full-stack developer living in beautiful Philadelphia.</h2>
  //     <p>Need a developer? <a href="https://www.facebook.com">Contact me.</a></p>
  //     <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
  //   </div>
  // )
}

export default IndexPage