import {
  categoryItem, contentItem,
  contentParam,
  galleryInterface,
  generalInterface,
  settingItem,
} from "@/interfaces/generalTypesInterfaces";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  settings: [],
  gallery: {
    id: 0,
    name: "",
    photo: "",
    photos: [],
    status: 0,
    translations: [],
  },
  language:'az',
  sessionData:''
} as generalInterface;
const General = createSlice({
  initialState,
  name: "General",
  reducers: {
    setSettings: (state, action) => {
      state.settings = [...action.payload];
    },
    setCurrentGallery: (state, action) => {
      state.gallery = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.chatRoom,
      };
    },
  },
});

export default General.reducer;

export const {setSettings, setCurrentGallery,setLanguage } = General.actions;

export const getSettingState = (state: any) =>
  state.General.settings as settingItem[];

export const getLanguage = (state: any) =>
    state.General.language  as 'en' | 'az' | 'ru';




export const getGalleryState = (state: any) =>
  state.General.gallery as galleryInterface;


