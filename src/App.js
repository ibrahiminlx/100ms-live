import './App.css';
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";
import SignIn from "./components/SignIn";
import Conferences from "./components/Conferences";
import Footer from "./components/Footer";
import {useEffect} from "react";

function App() {

  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if(isConnected) {
        hmsActions.leave();
      }
    }
  }, [hmsActions, isConnected]);
  return (
      <div className="App">
        {isConnected ? (
            <>
              <Conferences />
              <Footer />
            </>
        ):(
            <SignIn />
        )}
      </div>
  );
}

export default App;
