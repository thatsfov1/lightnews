import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './components/redux/redux-store';
import StoreContext from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
let RenderNewTree =()=>{  
  
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
      <App state={store.getState()} 
      dispatch={store.dispatch.bind(store)}
      store={store}
       />
       </StoreContext.Provider>
    </React.StrictMode>
  );
  }



RenderNewTree(store.getState());
store.subscribe(()=>{
  let state = store.getState();
  RenderNewTree(state);
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
