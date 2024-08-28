import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

const Task = ({ task }) => {
    const navigate = useNavigate()

    const handleClick = () => navigate(`/edit/${task._id}`)
    return (
        <Card>
            <CardActionArea
                onClick={handleClick}
            >
                <CardHeader
                    title={task.title}
                    subheader={task.status}
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        {task.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    )
}

export default Task