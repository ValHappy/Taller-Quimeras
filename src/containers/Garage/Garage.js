import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import AppContext from '../../contexts/AppContext';
import Chimera from '../../components/Chimera/Chimera';

function Garage() {
    const classes = useStyles();
    const context = useContext(AppContext);

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                {context.chimeras.map((chimera) =>
                    <section className={classes.element}>
                        <Chimera head={chimera.head} ear={chimera.ear} body={chimera.body} />
                        <p className={classes.info}>{chimera.name}</p>
                    </section>
                )}
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        maxWidth: '100%',
        display: 'flex',
    },
    element: {
        width: 400,
        height: '100%',
        margin: 20,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #4d888f 30%, #acf999 90%)',
        transition: 'all .3s ease-in-out',
        borderRadius: 20,
        "&:hover": {
            cursor: 'pointer',
        }
    },
    info: {
        fontWeight: 'bolder',
        color: 'white',
        margin: 0,
        padding: 0,
        fontSize: 25,
    }
}));

export default Garage;