import Link from "next/link"

interface ButtonProps {
    text : string,
    link? : string
}

export const Button = ({text, link='/'} : ButtonProps) => {
    return (
        <Link
            className="py-4 px-4 text-white bg-black rounded text-xs lg:px-8"
            href={`${link}`}
        >
            {text}
        </Link>
    )
}