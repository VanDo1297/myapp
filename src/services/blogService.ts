import {firestore, storage} from './firebase';
import {IBlogItem} from '../@types/blog.type';

// export const addMyImage =(file: File)=>{
//     var storageRef = storage.ref();
//     const fileRef = storageRef.child(file.name);
//     return fileRef.put(file)
// }

export const addMyBlog= async (userId: string, data: IBlogItem, file: File)=>{
    var storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);

    let imageUrl = await fileRef.getDownloadURL()
    data.image = imageUrl;
    var blogRef = firestore.collection(`blogs-${userId}`)
    return blogRef.doc(`blogs-${new Date().toISOString()}`).set({
        ...data
    })
} 

export const getMyBlog=(userId: string)=>{
    var blogRef = firestore.collection(`blogs-${userId}`)
    return blogRef.get()
}