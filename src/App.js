import './App.scss';
import Star from './components/star';

const App = () => {
  return (
    <div className='App'>
      {
        [...Array(5).keys()].map(item => (
          <Star />
        ))
      }
    </div>
  );
}

export default App;
