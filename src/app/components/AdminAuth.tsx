"use client";
import { validateAdminPassword } from "@/app/actions/validateAdmin.actions";
import { setAdmin, useAppDispatch, useAppSelector } from "@/store/index.js";
import { useRouter } from "next/navigation";
import { useState } from "react";


const AdminAuth = () => {
    // define states
    const router = useRouter();
    const dispatch = useAppDispatch();
    const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);
    const [password, setPassword] = useState('');
    const adminPassword = process.env.ADMIN_PASSWORD;

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-main mb-4">Welcome to My Portfolio</h1>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 p-2 border border-gray-300 rounded"
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
