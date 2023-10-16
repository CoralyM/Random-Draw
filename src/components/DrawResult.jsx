const genderPhrases = {
    "man": "Tu es le grand gagnant !",
    "woman": "Tu es la grande gagnante !"
}

export default function DrawResult({winner}) {
    return (
        <div className="bg-white flex flex-col items-center justify-center py-36 lg:w-2/3 w-4/5">
            {
                winner ? (
                    <>
                        <span className="font-bold text-lg">{winner.name} 🌸</span>
                        <p>{genderPhrases[winner.gender]}</p>
                    </>
                ) : (
                    <p>Personne n'a encore été selectionné actuellement 👀</p>
                )
            }

        </div>
    )
}