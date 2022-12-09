import { useState } from 'react'

import './assets/styles/style.scss'

import Navbar from './components/Navbar/Navbar'
import PolicyList from './components/Policy/PolicyList'

export const MockedData = [
  {
    personName: 'Ann Liebmann',
    phone: '+27-61-453-5444',
    email: 'ann.lueb@sb.com',
    policyno: '00139833887',
  },
  {
    personName: 'Ann Summer',
    phone: '+27-61-453-6444',
    email: 'ann.summer@sb.com',
    policyno: '00139833887',
  },
  {
    personName: 'Anabella Samuel',
    phone: '+27-61-453-7444',
    email: 'ann.samuel@sb.com',
    policyno: '00139833887',
  },
  {
    personName: 'Nicola Tesla',
    phone: '+27-61-453-8444',
    email: 'nicola.tesla@sb.com',
    policyno: '24789872311',
  },
  {
    personName: 'Albert Eistein',
    phone: '+27-61-453-9444',
    email: 'albert.eistein@sb.com',
    policyno: '54689972311',
  },
  {
    personName: 'Mustafa Kemal',
    phone: '+27-61-453-1044',
    email: 'mustafa.kemal@sb.com',
    policyno: '15789842111',
  },
  {
    personName: 'John Wick',
    phone: '+27-61-453-1144',
    email: 'john.wick@sb.com',
    policyno: '14789712311',
  },
  {
    personName: 'John Doe',
    phone: '+27-61-453-1244',
    email: 'john.doe@sb.com',
    policyno: '13685772311',
  },
  {
    personName: 'Geralt of Rivia',
    phone: '+27-61-453-1344',
    email: 'the.witcher@sb.com',
    policyno: '25689732211',
  },
]

export const App = () => {
  const [searchedItem, setSearchedItem] = useState('')
  const onSearchHandler = (searchItem: string) => {
    setSearchedItem(searchItem)
  }
  return (
    <>
      <Navbar onSearch={onSearchHandler} />
      <PolicyList items={MockedData} search={searchedItem} />
    </>
  )
}
