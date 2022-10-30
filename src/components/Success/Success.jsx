import { useHistory } from 'react-router-dom';
// PAGE 6
function Success() {
    const history = useHistory();
    function handleSubmit() {
        history.push('/'); //Back to the home page! :)
    }
    return (
        <>
            <h1 className='makeSpaceSurvey'>Survey submitted successfully!</h1>
            <button
                onClick={handleSubmit}
            >Take a new survey!</button>
        </>
    )
}

export default Success;