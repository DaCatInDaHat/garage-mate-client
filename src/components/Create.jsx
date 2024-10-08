import { Container } from '@mui/system'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('active')
    const navigateTo = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        fetch('https://garage-mate-server.onrender.com/tasks', {
            method: 'POST',
            body: JSON.stringify({ title, description, status }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        }).then(() => { navigateTo('/') })
    }

    return (
        <Container size='sm'>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Task
            </Typography>
            <Box
                component='form'
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                display='flex'
                flexDirection='column'
                gap='5px'
                width='50%'
            >
                <TextField
                    required
                    label="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Descrition"
                    multiline
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <FormControlLabel control={<Checkbox
                    onChange={() => status === 'active' ? setStatus('done') : setStatus('active')} />}
                    label="Status (done if checked)" />
                <Button
                    type="submit"
                    variant='outlined'
                >
                    Create
                </Button>
            </Box>
        </Container>
    )
}

export default Create