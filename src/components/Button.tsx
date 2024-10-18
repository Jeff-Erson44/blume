import Link from "next/link"

interface ButtonProps {
    text : string,
    link? : string
}

export const Button = ({text, link='/'} : ButtonProps) => {
    return (
        <Link
            className="py-4 px-8 text-white bg-black rounded text-xs"
            href={`${link}`}
        >
            {text}
        </Link>
    )
}