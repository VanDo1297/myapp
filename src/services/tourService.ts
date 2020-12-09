import {firestore, storage} from './firebase';
import {ITourItem} from '../@types/tour.type';

export const addTour= async (tour: ITourItem, file: File)=>{
    console.log('ping');
    var storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    let imageUrl = await fileRef.getDownloadURL()
    tour.image = imageUrl;
    var tourRef = firestore.collection(`tour`)
    return tourRef.doc(`tour-${new Date().toISOString()}`).set({
        ...tour
    })
} 

export const addMyTour= async (userId: string, tour: ITourItem, file: File)=>{
    var storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    let imageUrl = await fileRef.getDownloadURL()
    tour.image = imageUrl;
    var tourRef = firestore.collection(`tour-${userId}`)
    return tourRef.doc(`tour-${new Date().toISOString()}`).set({
        ...tour
    })
} 

export const getMyTours=(userId: string)=>{
    var tourRef = firestore.collection(`tour-${userId}`)
    return tourRef.get()
}

export const getTours=()=>{
    var tourRef = firestore.collection(`tour`)
    return tourRef.get()
}

export const getMyTourDetail=(userId:string, tourId:string)=>{
    var tourRef= firestore.collection(`tour-${userId}`)
    return tourRef.where('id','==',tourId).get()
}

export const getTourDetailService = (tourId:string)=>{
    var tourRef= firestore.collection(`tour`)
    return tourRef.where('id','==',tourId).get()
}