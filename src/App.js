import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Ideas from './Ideas';
import Login from './auth/login';
import { AuthProvider } from './auth/Auth';
import {
    AppBar,
    Box,
    IconButton,
    Link,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core';
import history from './history';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    login: {
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();
    return (
        <AuthProvider>
            <AppBar position="static">
                <Toolbar>
                    <Link href="/" color="inherit">
                        <Typography className={classes.title}>
                            {' '}
                            <Box
                                fontWeight="fontWeightBold"
                                m={1}
                                textAlign="center"
                            >
                                Welcome
                            </Box>
                        </Typography>
                    </Link>
                    <Link href="/login" color="inherit">
                        <Typography className={classes.login}>Login</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Router>
                <Route path="/" exact component={Ideas} />
                <Route path="/login" component={Login} />
            </Router>
        </AuthProvider>
    );
}

export default App;
