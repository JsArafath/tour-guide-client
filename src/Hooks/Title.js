import { useEffect } from "react";

const Tilte = title => {
    useEffect(() => {
        document.title = `${title}`;
    }, [title])
}
export default Tilte;