import { RecoilRoot, useRecoilValue } from "recoil";
import "./App.css";
import {
  josbsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(josbsAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationsAtom);

  return (
    <>
      <button>Home ()</button>
      <button>
        My network (
        {networkNotificationCount > 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsCount > 100 ? "99+" : jobsCount})</button>
      <button>Messaging ({messageCount > 100 ? "99+" : messageCount})</button>
      <button>
        Notifications ({notificationCount > 100 ? "99+" : notificationCount})
      </button>

      <button>Me</button>
    </>
  );
}

export default App;
