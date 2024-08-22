import { Layout, LegacyCard } from '@shopify/polaris'
import React from 'react'

export function Card({title, data, product}) {
  return (
    <>
        <Layout.Section oneThird>
            <LegacyCard title={title} sectioned>
               <h1 className='"total_count'>
                {product && data}
               </h1>
            </LegacyCard>
        </Layout.Section>
    </>
  )
}