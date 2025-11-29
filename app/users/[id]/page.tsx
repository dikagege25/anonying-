type UserPageProps = {
  params: {
    id: string;
  };
};

export default function UserPage({ params }: UserPageProps) {
  const { id } = params;

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-md w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-xl font-semibold text-slate-900">
          Setuju dan lanjutkan
        </h1>
        <p className="mb-2 text-sm text-slate-600">
          Terima kasih sudah menekan tombol{" "}
          <span className="font-medium">“Setuju dan lanjut kan”</span> di bot
          Telegram.
        </p>
        <p className="mb-4 text-sm text-slate-600">
          ID Telegram kamu yang terdeteksi:
          <span className="ml-1 rounded bg-slate-100 px-2 py-0.5 text-xs font-mono">
            {id}
          </span>
        </p>
        <p className="text-xs text-slate-500">
          Di sini kamu bisa melanjutkan proses sesuai kebutuhan (misalnya
          verifikasi, pengisian form, atau langkah berikutnya yang ingin kamu
          buat).
        </p>
      </div>
    </main>
  );
}

