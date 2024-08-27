import React from 'react'
import { Button } from '@mui/material'
// import { useNavigate } from 'react-router-dom'

const Panel = () => {
    // const navigateTo = useNavigate()

    return (
        <Button
            variant='outlined'
            sx={{ m: 1 }}
            href='/create'
        >
            Create
        </Button>
    )
}

export default Panel