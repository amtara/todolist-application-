import React from 'react'
import { Grid, Typography, Fab} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

function Header(props) {
    return (
    
            <Grid 
            container justifyContent="space-between" 
            alignItems="center"
            style={{ marginTop:'3rem'}}
            >
                <Grid item>
                    <Typography variant="h3">
                        Todo
                    </Typography>
                </Grid>

                <Grid item>
                    <Fab 
                    size="medium" 
                    color="primary"
                    onClick={props.handleFabClick}
                    >
                        <AddIcon /> 
                    </Fab>
                </Grid>
            </Grid>
       
    )
}

export default Header
