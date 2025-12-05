"use client";

import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

type JobFormData = {
  tipo: string;
  valor: number;
  descricao: string;
};

const TIPOS = ["TRANSCRICAO", "TRADUCAO", "AULA"];

export default function JobForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const { register, handleSubmit, reset } = useForm<JobFormData>();

  const handleFormSubmit = (data: JobFormData) => {
    const job = {
      id: uuid(),
      empregador: uuid(),
      freelancer: null,
      valor: data.valor,
      tipo: data.tipo,
      status: "ABERTO",
      descricao: data.descricao,
    };

    onSubmit(job);
    
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Tipo *</label>
        <select
          {...register("tipo", { required: true })}
          className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        >
          <option value="">Selecione...</option>
          {TIPOS.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0) + t.slice(1).toLowerCase()}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Valor (R$) *</label>
        <input
          type="number"
          step="0.01"
          {...register("valor", { required: true, valueAsNumber: true })}
          placeholder="Ex: 150.00"
          className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Descrição *</label>
        <textarea
          rows={5}
          {...register("descricao", { required: true })}
          placeholder="Descreva o trabalho de forma detalhada..."
          className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
      >
        Criar Trabalho
      </button>
    </form>
  );
}
