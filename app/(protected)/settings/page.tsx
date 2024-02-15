"use client"

import { logout } from "@/actions/logout"
import { useCurrentUser } from "@/hooks/use-current-user"

const SettingsPage = () => {
    const user = useCurrentUser()

    const onClick = () => {
        logout()
    }
    return (
        <>
            <div>
                <button type="submit" onClick={onClick}
                    className="bg-white p-10 rounded">
                    Sign Out
                </button>
            </div>
        </>
    )
}

export default SettingsPage