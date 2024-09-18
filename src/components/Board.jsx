import React, { useState, useEffect } from 'react'
import Panel from './Panel'
import Task from './Task'
import Masonry from '@mui/lab/Masonry'
import { Box } from '@mui/system'
import CircularProgress from '@mui/material/CircularProgress'

const Board = () => {
    const [tasks, setTasks] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('https://garage-mate-server.onrender.com/tasks')
            const json = await response.json()

            if (response.ok) {
                setTasks(json)
                setIsPending(false)
            }
        }

        fetchTasks()
    }, [])

    return (
        <Box>
            <Panel />

            {isPending && (<Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'50vh'}>
                <CircularProgress />
            </Box>)}

            {!isPending && (<Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={{ xs: 1, sm: 2, md: 3 }}>
                {tasks && tasks.map(task => (
                    <React.Fragment key={task._id}>
                        <Task task={task} />
                    </React.Fragment>
                ))}
            </Masonry>)}
        </Box>
    )
}

export default Board