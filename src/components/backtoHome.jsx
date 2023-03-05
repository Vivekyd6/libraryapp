import { useHistory } from 'react-router-dom';

const  HomeButton=()=> {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <button type="button" onClick={handleClick}>
      Back to Home
    </button>
  );
}


export default HomeButton;