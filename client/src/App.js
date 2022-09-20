import React from 'react'; 
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material"; 
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import logo from './images/logo.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles(); 
    
    return(
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">MyGamingList</Typography>
                <img className={classes.image} src={logo} alt="logo" height="60"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid> 
                </Container>
            </Grow>
        </Container>
    );
}

export default App; 