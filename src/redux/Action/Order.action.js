import { addDoc, collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../firebase';
import * as ActionTypes from '../ActionTypes'


export const getOrderAction = (data) => async (dispatch) => {
    console.log("getOrderAction", data);
    try {
        const querySnapshot = await getDocs(collection(db, "Order"));
        let data = []
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });
        console.log(data);
        dispatch({ type: ActionTypes.GET_ORDER_DATA, payload: data })

    } catch (error) {
        console.log(error);
    }
}

export const addOrderAction = (data) => async (dispatch) => {
    console.log("addOrderAction", data);

    try {
        const rendomNum = Math.floor(Math.random() * 10000000).toString()
        const OrderRef = ref(storage, 'Order/' + rendomNum);

        uploadBytes(OrderRef, data.profile_img)
            .then((snapshot) => {
                console.log('Uploaded a blob or file!');
                getDownloadURL(ref(storage, snapshot.ref))
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "Order"), {
                            ...data,
                            profile_img: url,
                            fileName: rendomNum
                        });
                        dispatch({
                            type: ActionTypes.ADD_ORDER_DATA, payload:
                            {
                                id: docRef.id,
                                ...data,
                                profile_img: url,
                                fileName: rendomNum
                            }
                        })
                    })
            });

    } catch (error) {
        console.log(error);
    }
}