import React, { Component } from 'react';
import { Breadcrumb } from 'semantic-ui-react'

const breadCrumbHolder = {
    Explore : [{ key: 'Home', content: 'Home /', active: true }],
    Cart : [
        { key: 'Home', content: 'Home', link: true },
        { key: 'Cart', content: 'Cart', active: true },
      ]
}
export default ({bType})=>(
    <Breadcrumb icon='right angle' sections={breadCrumbHolder[bType]} />
)