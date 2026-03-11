import { redirect } from "next/navigation";
export default function Accounts() {


    // assume that profile info is null.
    const useProfileInfo = null;
    if (userProfileInfo == null) redirect("/accounts/profile");


    return (
        <div>
            <h1>Accounts</h1>
            <p>Welcome to the accounts page!</p>
        </div>
    )
}