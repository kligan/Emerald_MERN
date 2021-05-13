import React from 'react';
import Box from '@material-ui/core/Box';

function Home(){
    return(
    <Box color="text.primary" clone>
    <div className="App" data-testid="Home" title="Home component">
        <h2>Home</h2>
        <p>Please login to Create, update and delete articles</p>
        <p>Press Login and then click on contents</p>
    </div>
    </Box>
    )
}

export default Home;