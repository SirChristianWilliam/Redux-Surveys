import { useHistory } from 'react-router-dom';
// PAGE 6
function Success() {
    const history = useHistory();
    function handleSubmit() {
        history.push('/'); //Back to the home page! :)
    }
    return (
        <>
            <h1 className='newSurveyBtn'>Survey submitted successfully!</h1>
            <button
                class="makeSpaceSurvey"
               
                onClick={handleSubmit}
            >Take a new survey!</button>
        </>
    )
}

export default Success;