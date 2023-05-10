"use client";
import { BrowserRouter } from 'react-router-dom'

import styles from './page.module.css'
import Router from './router/Router';
import Header from './components/Header';
export default function Home() {
  return (
    <main>
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>,
    </main>
  )
}
