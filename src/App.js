import WebSocketProvider from "./WebSocket";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { store, persistor } from "./store";

import Home from "./screens/Home";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WebSocketProvider>
          <Home />
        </WebSocketProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
