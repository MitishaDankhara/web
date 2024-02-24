import { RouterProvider } from 'react-router-dom';
import './App.scss';
import './style/index.scss'
import router from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </Provider>
  );
}

export default App;
