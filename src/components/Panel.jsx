import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Panel = () => {
    const navigate = useNavigate()

    return (
        <Button
            variant='outlined'
            sx={{ m: 1 }}
            onClick={() => navigate('create')}
        >
            Create
        </Button >

    )
}

export default Panel