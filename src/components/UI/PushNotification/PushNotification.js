import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const PushNotification = props => {

    // FOR TOAST AUTO
    // const toastId = React.useRef(null);
    // const notify = () => toastId.current = toast("Hello", { autoClose: false });
    // const update = () => toast.update("TEST", { type: toast.TYPE.SUCCESS, autoClose: 10000 });

    const primary_toast = () => {
        toast("TEST", {
            ...props.onTsst,
            autoClose: 10000
        });

        console.log(props.onTsst)
    }

    return (
        <div>
            {/* <button onClick={notify}>Notify</button> */}
            <ToastContainer onClick={primary_toast} />
        </div>
    );
}

export default PushNotification;