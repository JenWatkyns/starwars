import React from 'react';
import InitialScreen from '../initial-screen/connected';
import SecondScreen from '../second-screen';
import ErrorScreen from '../error-screen';


/**
 * This component is used to determine which screen is showed and fetch the first api
 * 
 */
const App = ({ fetchFilms, failure }) => {
    const [id, setId] = React.useState();

    React.useEffect (() => {
        if (!failure) {
            fetchFilms();
        }
    });

    return (
        <div>
            {!id && !failure && (
                <InitialScreen setId={setId} />
            )}
            {!!id && !failure && (
                <SecondScreen setId={setId} id={id} />
            )}
            {failure && (<ErrorScreen />)}
        </div>
    )
}
   
  export default App;
