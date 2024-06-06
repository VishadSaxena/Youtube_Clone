import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import VideoContainer from './components/VideoContainer';
import ButtonList from './components/ButtonList';

function App() {

  const appRoute = createBrowserRouter([{
    path : "/",
    element : <Body />,
    children: [
      {
        path: "/",
        element: <div className="">
                    <div className="flex flex-wrap">
                       <ButtonList/>
                     </div>
                     <VideoContainer />
                 </div>
      },
      {
        path : "/watch",
        element : <WatchPage />,
      },
    ]
  }]);

  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRoute}/>  
      </div>
    </Provider>
  );
}

export default App;
