"use client";

import { useState } from "react";
import { Clock } from "lucide-react";

export type Job = {
  id: string;
  empregador: string;
  freelancer: string | null;
  valor: number;
  tipo: "TRANSCRICAO" | "TRADUCAO" | "AULA";
  status: string;
  descricao: string;
};

const SkillTag: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
    {skill}
  </span>
);

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const [aplicando, setAplicando] = useState(false);
  const [concluido, setConcluido] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6 last:border-b-0">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-gray-900 hover:text-purple-700 transition-colors cursor-pointer">
          Trabalho: {job.tipo}
        </h3>
      </div>

      <p className="mt-2 text-gray-600 leading-relaxed line-clamp-2">
        {job.descricao}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <SkillTag skill={job.tipo} />
      </div>

      <div className="mt-4 flex flex-wrap items-center space-x-4 text-sm text-gray-600">
        <span className="font-semibold text-purple-700">
          R$ {job.valor.toFixed(2)}
        </span>

        <span className="text-gray-500">•</span>
        <span>{job.tipo}</span>

        <span className="text-gray-500">•</span>

        <span>Status: {job.status}</span>

        <span className="text-gray-500">•</span>

        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4 text-gray-500" />
          <span>Recentemente</span>
        </div>
      </div>

      {concluido && (
        <div className="mt-4 text-center text-green-600 font-semibold text-lg">
          Trabalho concluído
        </div>
      )}

      {!aplicando && !concluido && (
        <div className="mt-4 flex justify-center">
          <button
            className="rounded-lg bg-purple-600 px-4 py-2 text-white font-medium hover:bg-purple-700 transition"
            onClick={() => setAplicando(true)}
          >
            Aplicar para vaga
          </button>
        </div>
      )}

      {aplicando && !concluido && (
        <div className="mt-4 flex justify-center gap-3">
          <button
            className="rounded-md bg-red-700 px-12 py-2 text-white font-medium hover:bg-red-600 transition"
            onClick={() => setAplicando(false)}
          >
            Desistir
          </button>

          <button
            className="rounded-md bg-green-700 px-12 py-2 text-white font-medium hover:bg-green-600 transition"
            onClick={() => {
              setConcluido(true);
              setAplicando(false);
            }}
          >
            Concluir
          </button>
        </div>
      )}
    </div>
  );
};

export default JobCard;
