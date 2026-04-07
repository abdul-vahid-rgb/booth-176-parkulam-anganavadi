import { useState } from 'react'
import Header from './components/Header'
import Table from './components/Table'

export default function App() {
  const [query, setQuery] = useState('')
  return (
    <>
    <Header setQuery={setQuery}/>
    <Table query={query}/>
    </>
  )
}
