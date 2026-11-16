import Link from "next/link";

export default function About(){
    return(
        <main className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold">
                о TaskBoard
            </h1>
            <p className="mt-4">
                Это приложение для изучения 
            </p>

            <Link className="mt-6 inline-block text-blue-600" 
            href="/">
                Вернуться в главную
            </Link>
        </main>
    )
}