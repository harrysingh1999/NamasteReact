import { createContext } from "react";

 const userContext = createContext({
    data: 'Context Data',
    status: false,
})

export default userContext