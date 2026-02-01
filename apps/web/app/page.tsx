import {client} from "@repo/db"

export default async function Page() {
    const user = await client.user.findFirst();
    return <div>Hello {user?.username}</div>  
}