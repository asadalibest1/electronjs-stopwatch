import {
    onSnapshot, orderBy, query, serverTimestamp, doc,
    collection,
    addDoc,
} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../connections/firebase'
import useUser from './useUser'

const useData = () => {

    const { uuid } = useUser();
    const [Data, setData] = useState([])
    const [Loading, setLoading] = useState(true)

    const getData = async () => {
        setLoading(true)
        const q = query(collection(db, "electron", uuid(), "Stopwatch"), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const payments = [];
            querySnapshot.forEach((doc) => {
                payments.push({ id: doc.id, ...doc.data() });
            });
            setData(payments)
            setLoading(false)
        });
        return () => unsubscribe()
    }

    useEffect(() => {
        getData();
    }, []);



    const addData = async () => {

        const h = document.querySelector('.h').innerText;
        const m = document.querySelector('.m').innerText;
        const s = document.querySelector('.s').innerText;
        const ms = document.querySelector('.ms').innerText;
        const date = new Date();


        const values = {
            watchTime: h + ":" + m + ":" + s + ":" + ms,
            time: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
            date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
            timestamp: serverTimestamp()
        }


        try {

            const docRef = doc(db, "electron", uuid());
            const colRef = collection(docRef, 'Stopwatch')
            const addUser = await addDoc(colRef, values);
            console.log('Successful data addition!');


        } catch (error) {
            console.log('failed data addition!');
        }
    }




    return (
        {
            Data,
            Loading,
            addData
        })
}

export default useData