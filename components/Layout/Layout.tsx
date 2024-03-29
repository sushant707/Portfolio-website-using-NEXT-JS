import Head from 'next/head'
import React from 'react'
import { ScrollToTop } from '../ScrollToTop'
import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='relative'>
            <Head>
                <title>Sushant chavan | Portfolio</title>
            </Head>
            <Header />
            <main className='min-h-screen bg-gray-200'>
                {children}
            </main>
            <ScrollToTop />
        </div>
    )
}
