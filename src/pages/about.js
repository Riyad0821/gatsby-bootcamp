import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>About Us will show up here later on.</p>
            <Link to='/contact'>Contact Me</Link>
        </Layout>
    )
}

export default AboutPage