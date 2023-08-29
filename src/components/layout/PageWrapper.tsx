import {ReactNode, useEffect} from "react";
import {useAppDispatch} from "../../redux/store";
import {setAppState} from "../../redux/features/appStateSlice";

type Props = {
    state?: string,
    children: ReactNode;
}

function PageWrapper(props: Props) {
    // When entering a page, PageWrapper component will load.
    // We will update the redux appState here.
    // Children prop of the page wrapper will be the actual page that we need to show!
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (props.state) {
            dispatch(setAppState(props.state))
        }
    }, [dispatch, props])

    return (
        <>
            {props.children}
        </>
    )
}

export default PageWrapper;