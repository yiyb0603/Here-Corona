import AdminStore from "./Admin/AdminStore";
import BoardStore from './Board/BoardStore';

const stores = {
  AdminStore: new AdminStore(),
  BoardStore: new BoardStore()
};

export default stores;
