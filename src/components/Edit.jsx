import { Container } from '@mui/system'
import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('active')
    const navigateTo = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const fetchTask = async () => {
            const response = await fetch(`https://garage-mate-server.onrender.com/tasks/${id}`)
            const json = await response.json()
            if (response.ok) {
                setTitle(json.title)
                setDescription(json.description)
                setStatus(json.status)
            }
        }
        fetchTask()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        fetch(`https://garage-mate-server.onrender.com/tasks/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ title, description, status }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        }).then(() => { navigateTo('/') })
    }

    const handleDelete = async () => {
        await fetch(`https://garage-mate-server.onrender.com/tasks/${id}`, {
            method: 'DELETE'
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
                Edit a Task
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Descrition"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <FormControlLabel control={<Checkbox
                    checked={status === 'done' ? true : false}
                    value={status}
                    onChange={() => status === 'active' ? setStatus('done') : setStatus('active')} />}
                    label="Status (done if checked)" />
                <Button
                    type="submit"
                    variant='outlined'
                >
                    Update
                </Button>
                <Button
                    variant='outlined'
                    color='error'
                    onClick={handleDelete}>
                    Delete
                </Button>
            </Box>
        </Container>
    )
}

export default Edit