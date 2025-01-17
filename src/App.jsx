import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

import { notifications, totalNotificationsSelector } from "./atoms";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationsCount = useRecoilValue(totalNotificationsSelector);

  return (
    <>
      <button>Home ()</button>
      <button>
        My network ({networkCount.network > 100 ? "99+" : networkCount.network})
      </button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>
      <button>Me ({totalNotificationsCount})</button>
    </>
  );
}

export default App;
