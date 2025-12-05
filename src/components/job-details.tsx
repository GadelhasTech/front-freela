import { Job } from "./job-card";

export default function JobDetails({ job }: { job: Job }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Tipo: {job.tipo}
      </h1>

      <div className="mt-4 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Descrição do Projeto
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">{job.descricao}</p>

        <h3 className="mt-6 font-semibold text-gray-900">Detalhes</h3>

        <div className="mt-4 space-y-3 text-sm text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span>Valor:</span>
            <strong className="text-purple-700">R$ {job.valor.toFixed(2)}</strong>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>Tipo:</span>
            <strong>{job.tipo}</strong>
          </div>

          <div className="flex justify-between">
            <span>Status:</span>
            <strong>{job.status}</strong>
          </div>
        </div>

        <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition">
          Enviar Proposta
        </button>
      </div>
    </div>
  );
}
