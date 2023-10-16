export default function Button({content, onClick}) {
    return (
        <button className="text-white font-bold bg-red py-4 px-10 rounded-full lg:mx-0 mx-auto" onClick={onClick}>
            {content}
        </button>
    )
}