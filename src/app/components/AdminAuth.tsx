"use client";
import { validateAdminPassword } from "@/app/actions/validateAdmin.actions";
import { setAdmin, useAppDispatch, useAppSelector } from "@/store/index.js";
import { useRouter } from "next/navigation";
import { useState } from "react";


const AdminAuth = ({ setAdminButton }: any) => {
    // define states
    const router = useRouter();
    const dispatch = useAppDispatch();
    const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);
    const [password, setPassword] = useState('');
    const adminPassword = process.env.ADMIN_PASSWORD;
    const [hideAdminAuht, setHideAdminAuth] = useState(false);

    // define functions
    const handleAdminClick = async () => {
        const isPasswordValid = await validateAdminPassword(password);

        if (isPasswordValid) {
            dispatch(setAdmin(true));
            router.push('/welcome');
        } else {
            alert('Invalid password');
            router.push('/');
        }
    };

    return (
        <div className={`${hideAdminAuht ? "opacity-0" : "opacity-100"}
        flex flex-col items-center justify-center w-fit bg-primary-foreground p-4 rounded-md shadow-sm`}>
            <span className="text-2xl mb-4 font-bold text-center w-full block cursor-pointer"
                onClick={() =>{ setHideAdminAuth(!hideAdminAuht); setAdminButton(false) }}
            >X</span>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 p-2 border border-blue-700 rounded"
                placeholder="Enter Admin Password"
            />
            <button
                onClick={handleAdminClick}
                className="bg-primary text-white py-2 px-4 rounded-lg hover:opacity-[.85] transition duration-300"
            >
                Submit
            </button>
        </div>
    );
}

export default AdminAuth;
