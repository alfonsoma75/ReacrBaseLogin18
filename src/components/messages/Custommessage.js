import { useEffect, useRef } from "react";

// PrimeReact UI
import { Messages } from "primereact/messages";

export default function Custommessage({ severity, message, sticky = true, closable = false}) {

    const msg = useRef(null)

    useEffect(() => {
        msg.current.show({
            severity: severity, sticky: sticky, closable: closable, content: (
                <>
                    {/*<img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" />*/}
                    <div className="p-ml-2">
                        {message}
                    </div>
                </>
            )
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Messages ref={msg} />
    )

}