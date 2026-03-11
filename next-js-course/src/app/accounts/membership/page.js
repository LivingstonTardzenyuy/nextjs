import { redirect } from "next/navigation";
export default function Membership() {


    const userProfileInfo = null;
    if (userProfileInfo == null) redirect("/accounts/profile");
    return (
        <div>
            <h1>Membership</h1>
            <p>Welcome to the membership page!</p>
        </div>
    )
}