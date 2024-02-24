import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getApi } from '../../redux/reducers/common';

export default function Api() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getApi())
    })
    return (
        <div>

        </div>
    )
}
