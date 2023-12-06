import {
    aboutResponse,
    categoryItem,
    galleryInterface,
    mainSliderInterface,
    usefulLink
} from "@/interfaces/generalTypesInterfaces";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {HYDRATE} from "next-redux-wrapper";

const MAIN_PATH = process.env.NEXT_PUBLIC_MAIN_PATH;

export const generalQuery = createApi({
    baseQuery: fetchBaseQuery({baseUrl: MAIN_PATH}),
    extractRehydrationInfo(action, {reducerPath}) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (build) => ({
        settings: build.query<any, any>({
            query: () => ({
                method: "GET",
                url: "settings",
            }),
        }),
        categories: build.query<{categories:categoryItem[]}, any>({
            query: () => ({
                method: "GET",
                url: "categories",
            }),
        }),
        getUseFulLinks: build.mutation<{links:usefulLink[]}, any>({
            query: () => ({
                method: "GET",
                url: "useful-links",
            }),
        }),
        getAbout: build.mutation<{about:aboutResponse[] }, any>({
            query: () => ({
                method: "GET",
                url: "about",
            }),
        }),
        galery: build.mutation<{gallery:galleryInterface[]}, any>({
            query: () => ({
                method: "GET",
                url: "gallery",
            }),
        }),
        postContact: build.mutation<any, any>({
            query: (data: { email: string, name: string, subject: string, message: string, phone: string }) => ({
                method: "POST",
                url: "contact",
                body: data,
                headers: {
                    "Content-type": 'application/json'
                }
            }),
        }),
        slider: build.mutation<{sliders:mainSliderInterface[]}, any>({
            query: () => ({
                method: "Get",
                url: "slider",

            }),
        }),
        content: build.mutation<any, string>({
            query: (urlIds) => ({
                method: "GET",
                url: 'content' + urlIds,

            }),
        }),
        contentMail: build.mutation<any, {email:string,content_id:number | string}>({
            query: (data) => ({
                method: "POST",
                url: 'content-mail',
                body:data
            }),
        }),
    }),
    tagTypes: ['general'],
});

export const {
    useContentMailMutation,
    useCategoriesQuery,
    useSettingsQuery,
    useGetUseFulLinksMutation,
    useGetAboutMutation,
    useGaleryMutation,
    usePostContactMutation,
    useSliderMutation,
    useContentMutation
} = generalQuery;
