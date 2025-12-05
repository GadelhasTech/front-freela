"use client";

import { ReactNode } from "react";

export default function JobCreateCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white shadow-md border rounded-2xl p-8 w-full max-w-2xl">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Criar Novo Trabalho
      </h1>

      {children}
    </div>
  );
}
