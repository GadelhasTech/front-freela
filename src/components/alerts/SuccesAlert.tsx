"use client";

type SuccessAlertProps = {
  message: string;
};

export default function SuccessAlert({ message }: SuccessAlertProps) {
  return (
    <div className="w-full p-4 mb-4 text-green-800 bg-green-100 border border-green-300 rounded-lg">
      <p className="font-medium">{message}</p>
    </div>
  );
}
