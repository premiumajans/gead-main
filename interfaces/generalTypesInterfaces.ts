export interface generalInterface {
    settings: settingItem[];
    gallery: galleryInterface,
    sessionData:any,
    language:'en' | 'az' | 'ru'
}

export interface contentParam {
    cat_id:string,
    alt_id:string,
    sub_id:string
}

type langs = 'en' | 'az' | 'ru';

export interface settingItem {
    id: number;
    name: string;
    link: string;
    status: number;
}

interface translations {
    id: number;
    sub_category_id: number;
    locale: langs;
    name: string;
}

interface subCategory {
    id: number;
    alt_category_id: number;
    slug: string;
    name: string;
    translations: translations[];
}

interface categoryAlt {
    id: number;
    category_id: number;
    slug: string;
    name: string;
    sub: subCategory[];
    translations: [
        {
            id: number;
            alt_category_id: number;
            locale: langs;
            name: string;
        },
        {
            id: number;
            alt_category_id: number;
            locale: langs;
            name: string;
        },
        {
            id: number;
            alt_category_id: number;
            locale: langs;
            name: string;
        }
    ];
}

export interface categoryItem {
    id: number;
    slug: string;
    status: number;
    name: string;
    alt: categoryAlt[];
    translations: translations[];
}

export interface usefulLink {
    id: number;
    link: string | null;
    photo: string;
    status: number;
}

export interface aboutResponse {
    id: 6;
    photo: string;
    status: number;
    title: string;
    description: string;
    translations: aboutTranslatinon[];
}

interface aboutTranslatinon {
    id: number;
    about_id: number;
    locale: string;
    title: string;
    description: string;
}

export interface galleryInterface {
    id: number;
    photo: string;
    status: number;
    name: string;
    photos: photoItem[],
    translations: galleryTranslationsItem[]
}

interface galleryTranslationsItem {
    id: number;
    gallery_id: number;
    locale: string;
    name: string;
}

interface photoItem {
    id: number;
    gallery_id: number;
    photo: string;
}


export interface mainSliderInterface {
    alt: string
    id: number
    order: number
    photo: string
    status: number
    title: string
    translations: mainSliderTranslation[]

}

interface mainSliderTranslation {
    id: number,
    slider_id: number,
    locale: string,
    title: string
}


export interface contentItem {
    register:string,
    photos:photosItem[],
    id: number,
    photo: string,
    view: number,
    category_id: string,
    created_at:string,
    alt_id: string,
    sub_id: string,
    pdf: string,
    status: number,
    name: string,
    content: string,
    translations: contentItemTranslation[]
}

interface  photosItem {
    "id": number,
    "content_id": number,
    "photo": string
}


interface contentItemTranslation {
    id: number,
    content_id: number,
    locale: string,
    name: string,
    content: string,
    description?:string
}

export interface searchItem {
    id: number,
    photo: string,
    view: number,
    category_id: string,
    created_at:string,
    alt_id: string,
    sub_id: string,
    pdf: string,
    status: number,
    name: string,
    content: string,
    translations: searchItemTranslation[]
}


interface searchItemTranslation {
    id: number,
    content_id: number,
    locale: string,
    name: string,
    content: string,
}

export interface  videoItem {
    "id": number,
    "link": string,
}