import React from 'react'
import Categories from '../components/category/Categories'
import Products from '../components/product/Products'
import CampaignSingle from '../components/campaignSingle/CampaignSingle'
import Policy from '../components/policy/Policy'

const ShopPage: React.FC = () => {
  return (
    <>
        <Categories />
        <Products />
        <CampaignSingle />
        <Products />
        <Policy />
    </>
  )
}

export default ShopPage