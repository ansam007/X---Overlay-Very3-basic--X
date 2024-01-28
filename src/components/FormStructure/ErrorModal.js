import ReactDOM from 'react-dom';

const Portal = (props) => {
    return (
        <div>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <button onClick={props.onConfirm}>Okay</button>
        </div>
    )
} 

const ErrorModal = (props) => {
    return (
        <div>
        {ReactDOM.createPortal(<Portal title={props.title} message={props.message} onConfirm={props.onConfirm}></Portal>, document.getElementById('correct'))}
        </div>
    );
  };
  
  export default ErrorModal;
  