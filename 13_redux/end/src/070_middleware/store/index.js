import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/counter";
import logger from "./middleware/logger"

// middlewareをreduxに追加するには、以下のように記載する必要あり。
export default configureStore({
  reducer: {
    counter: reducer
  },
  // getDefaultMiddleware: 
    // ここには、予めredux-thunkなどのmiddlewareが追加されている。
  // そこに、新しいmiddlewareを追加する形にして、それを返す。
    // concatにて、配列同士を結合する。
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
