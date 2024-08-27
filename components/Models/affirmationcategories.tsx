import { View, Text } from 'react-native'
export interface affarmationP{
    title:string,
    data:GalleryPreviewData[];
}



export interface GalleryPreviewData{
    id:number;
    text:string;
    image:any
}