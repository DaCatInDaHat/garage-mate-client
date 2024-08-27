import React from 'react'
import { Button } from '@mui/material'

const Panel = () => {
    return (
        <Button
            variant='outlined'
            sx={{ m: 1 }}
            href='./create'
        >
            Create
        </Button>
    )
}

export default Panel