import { useEffect, useState } from "react";
import req from "./req";

const emptyCallBack = () => { };

export default function useUser() {
    const [user, setUser] = useState(null);
    const [isLoasding, setisLoading] = useState(true);

    useEffect(() => {
        setisLoading(true);
        const abrCtrl = new AbortController();
        req({ uri: 'me', signal: abrCtrl.signal })
            .then(({ data }) => {
                setUser(data);
            })
            .catch((err) => console.error(err))
            .finally(() => setisLoading(false));

        return () => abrCtrl.abort();
    }, [isLoasding]);


    function signIn({
        data = {},
        successCallback = emptyCallBack,
        errCallback = emptyCallBack
    }) {
        setisLoading(true);
        req({ method: 'POST', uri: 'signin', data })
            .then(({ data }) => {
                setUser(data);
                successCallback();
            })
            .catch((err) => {
                console.err(err);
                errCallback();
            })
            .finally(() => setisLoading(false));
    }

    function signUp({
        data = {},
        successCallback = emptyCallBack,
        errCallback = emptyCallBack
    }) {
        setisLoading(true);
        req({ method: 'POST', uri: 'signup', data })
            .then(({ data }) => {
                setUser(data);
                successCallback();
            })
            .catch((err) => {
                console.error(err);
                errCallback();
            })
            .finally(() => setisLoading(false));
    }

    function signOut({
        successCallback = emptyCallBack,
        errCallback = emptyCallBack
    }) {
        setisLoading(true);
        req({ method: 'POST', uri: 'signout' })
            .then(() => {
                setUser(null);
                successCallback();
            })
            .catch((err) => {
                console.error(err);
                errCallback();
            })
            .finally(() => setisLoading(false));
    }

    function updateOwn({
        data = {},
        successCallback = emptyCallBack,
        errCallback = emptyCallBack
    }) {
        req({ method: 'PATCH', uri: 'me', data })
            .then(({ data }) => {
                setUser((prev) => ({ ...prev, ...data }));
                successCallback();
            })
            .catch((err) => {
                console.error(err);
                errCallback();
            })
    }

    return {
        user,
        isLoasding,
        setUser,
        setisLoading,
        signIn,
        signUp,
        signOut,
        updateOwn
    };
}