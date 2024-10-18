import { Button } from "./Button"

export const  Navbar = () => {
    return(
        <nav className="col-span-full py-4">
            <ul className="flex justify-between">
                <li>
                    <a className="text-2xl">
                        blume
                    </a>
                </li>
                <li>
                    <Button
                        text='Book a demo'
                    />
                </li>
            </ul>
        </nav>
    )
}