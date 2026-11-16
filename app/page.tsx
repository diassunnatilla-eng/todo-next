import Link from "next/link";
import TaskBoard from "@/components/taskboard";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-4 text-3xl font-bold">
        taskBoard
      </h1>
      <p className="mb-6 text-gray-600">
        менеджер задач на Next JS и typeScript 
      </p>
      <Link href='/about'className="text-blue-600 underline">
      О приложении
      </Link>
      <TaskBoard/>
    </main>
  );
}
