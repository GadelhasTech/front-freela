"use client";

import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

import JobForm from "@/src/components/form/JobForm";
import JobCreateCard from "@/src/components/JobCreatedCard";
import SuccessAlert from "@/src/components/alerts/SuccesAlert"
import { useState } from "react";

export default function CriarTrabalhoPage() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (job: any) => {
    try {
      const response = await fetch("http://localhost:3001/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });

      await response.json();

      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Erro ao salvar job:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow flex justify-center py-10 px-4">
        <div className="w-full max-w-2xl">
          {success && (
            <SuccessAlert message="Trabalho criado com sucesso!" />
          )}

          <JobCreateCard>
            <JobForm onSubmit={handleSubmit} />
          </JobCreateCard>
        </div>
      </main>

      <Footer />
    </div>
  );
}
