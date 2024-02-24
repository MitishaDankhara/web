import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../shared/common/header'

export default function Default() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
