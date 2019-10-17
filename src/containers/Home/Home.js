import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

function Home(props) {
    const classes = useStyles();

    function handleClick() {
        props.history.push('/create');
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Lorem Ipsum Dolor Sit Amet</h1>
            <p className={classes.desc}>Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis sem, magna dapibus tortor blandit congue et suscipit vivamus, parturient nisl erat vestibulum nascetur vitae faucibus dictumst.</p>
            <Button onClick={handleClick} variant="contained" className={classes.button}> Start now</Button>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '40%',
        height: 400,
        padding: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title: {
        margin: 0,
        marginTop: 100,
        padding: 15,
        color: theme.palette.primary.main,
        fontSize: 40,
        fontWeight: 'bolder'
    },
    desc: {
        margin: 0,
        marginTop: 1,
        padding: 15,
        color: theme.palette.primary.contrastText,
        fontSize: 20,
        textAlign: 'justify'
    },
    button: {
        width: '20%',
        margin: 10,
        padding: 5,
        color: 'white',
        background: 'linear-gradient(45deg, #4d888f 30%, #acf999 90%)'
    },
}));

export default Home;