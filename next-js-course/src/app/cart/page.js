'use client'
import { usePathname } from "next/navigation";

export default function Cart() {

    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            <h1>Cart</h1>
            <p>Welcome to the cart page!</p>
        </div>
    )
}