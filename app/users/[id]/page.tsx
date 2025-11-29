import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type UserPageProps = {
  params: {
    id: string;
  };
};

export default function UserPage({ params }: UserPageProps) {
  const { id } = params;
  const isValidId = /^\d+$/.test(id);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <span className="text-lg">✓</span>
            </div>
            <div>
              <CardTitle className="text-lg">
                {isValidId ? "Validasi Berhasil" : "Terjadi Kesalahan"}
              </CardTitle>
              <CardDescription>
                {isValidId
                  ? "Akses dari bot Telegram sudah tervalidasi."
                  : "ID Telegram yang diterima tidak valid."}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Kamu datang ke halaman ini setelah menekan tombol{" "}
            <span className="font-medium">
              &quot;Setuju dan lanjut kan&quot;
            </span>{" "}
            di bot Telegram.
          </p>
          <p className="text-sm text-muted-foreground">
            ID Telegram yang terdeteksi:
            <span className="ml-2 inline-flex rounded-md bg-muted px-2 py-0.5 text-xs font-mono">
              {id}
            </span>
          </p>
          {isValidId && (
            <p className="text-xs text-muted-foreground">
              Selanjutnya kamu bisa melanjutkan proses onboarding atau mulai
              menggunakan fitur yang sudah disiapkan.
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button
            asChild
            size="lg"
            className="h-11 w-full rounded-lg text-base font-semibold"
            disabled={!isValidId}
          >
            <Link href="/">Get Started</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
