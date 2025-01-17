import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios.get("");
      return res.data;
    },
  }),
});

export const totalNotificationsSelector = selector({
  key: "totalNotificationsSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);

    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
