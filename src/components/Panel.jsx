import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Panel = () => {
    const navigate = useNavigate()

    const handleClick = () => navigate('create')

    return (
        <Button
            variant='outlined'
            sx={{ m: 1 }}
            onClick={handleClick}
        >
            Create
        </Button >

    )
}

export default Panel