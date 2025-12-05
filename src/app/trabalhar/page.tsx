"use client";

import { useState, useEffect } from "react";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import JobCard from "@/src/components/job-card";
import { Search } from "lucide-react";

export default function TrabalharPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  const filteredJobs = jobs.filter((job: any) => {
    const term = searchTerm.toLowerCase();
    return (
      job.descricao.toLowerCase().includes(term) ||
      job.tipo.toLowerCase().includes(term) ||
      job.status.toLowerCase().includes(term) ||
      job.empregador.toLowerCase().includes(term) ||
      job.valor.toString().includes(term)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-gray-900">Quero trabalhar</h1>
          <p className="mt-1 text-lg text-gray-600">
            Encontre seu próximo projeto e comece a ganhar
          </p>

          <div className="mt-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Procure por projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 p-6">
            {loading ? (
              <p className="text-center text-gray-600 py-6">
                Carregando projetos...
              </p>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job: any) => <JobCard key={job.id} job={job} />)
            ) : (
              <p className="text-center text-gray-600 py-6">
                Nenhum projeto encontrado.
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
