import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `SC360 || ${title}`;
    },[title])
}

export default useTitle;