import React from 'react'
import Departments from '../components/Departments'
import Layout from '../components/Layout'
import MainHome from '../components/MainHome'
import NewArrival from '../components/NewArrival'

export default function Home() {
    return (
        <Layout>
            <MainHome/>
            <Departments/>
            <NewArrival/>
        </Layout>
    )
}