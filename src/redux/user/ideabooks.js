import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast"

const initialState = {
  items: []
};

const ideabookSlice = createSlice({
  name: "ideabook",
  initialState,
  reducers: {
    clearItems: (state) => {
        state.items = []
      },
      addToFavItems: (state, action) => {
        let newProduct=action.payload
        let items=state.items
        let found=items.find(item=>item._id===newProduct._id)
        if(found){
        toast.success("item already in ideabook")
        }
        else{
          toast.success("item added to Ideabook")
          state.items.push(newProduct);
        }
      },  
        removeItem: (state, action) => {
        let newItems = state.items.filter(
          (item) => item._id !== action.payload
        );
  
        state.items = newItems;
      },
    }
});

export const {
  clearItems,
  addToFavItems,
  removeItem

} = ideabookSlice.actions;

export default ideabookSlice.reducer;
