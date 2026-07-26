import {
  useEffect,
  useState,
  type FormEvent,
} from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  ArrowLeft,
  Loader2,
  LockKeyhole,
  Mail,
} from "lucide-react";
import logo from "@/assets/iskra-logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCmsAuth } from "./AuthContext";

export default function CmsLogin() {
  const { user, loading, login } =
    useCmsAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] =
    useState("");
  const [password, setPassword] =
    useState("");
  const [submitting, setSubmitting] =
    useState(false);
  const [error, setError] =
    useState("");

  useEffect(() => {
    document.title =
      "Prijava | Iskra Svjetlosti";
  }, []);

  if (!loading && user) {
    return (
      <Navigate
        to="/iskra"
        replace
      />
    );
  }

  const from =
    (
      location.state as {
        from?: string;
      } | null
    )?.from || "/iskra";

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await login(email, password);
      navigate(from, {
        replace: true,
      });
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Prijava nije uspjela.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-4 py-8">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border bg-white shadow-xl lg:grid-cols-2">
        <section className="hidden bg-primary p-12 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
          <img
            src={logo}
            alt="Iskra Svjetlosti"
            className="h-24 w-auto object-contain"
          />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] opacity-70">
              Upravljanje sadržajem
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight">
              Sve objave udruge na jednom mjestu.
            </h1>

            <p className="mt-5 max-w-md text-lg leading-8 opacity-80">
              Upravljajte novostima,
              događajima, stranicama,
              fotografijama i korisnicima.
            </p>
          </div>

          <p className="text-sm opacity-60">
            Iskra Svjetlosti CMS
          </p>
        </section>

        <section className="flex min-h-[620px] items-center px-6 py-10 sm:px-12">
          <div className="mx-auto w-full max-w-md">
            <a
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Povratak na web stranicu
            </a>

            <img
              src={logo}
              alt="Iskra Svjetlosti"
              className="mb-8 h-20 w-auto object-contain lg:hidden"
            />

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Administracija
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Dobro došli
            </h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              Prijavite se svojim
              korisničkim podacima.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="cms-email">
                  Adresa e-pošte
                </Label>

                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    id="cms-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(
                        event.target.value,
                      )
                    }
                    placeholder="ime@iskrasvjetlosti.hr"
                    className="h-14 rounded-2xl pl-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cms-password">
                  Lozinka
                </Label>

                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    id="cms-password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) =>
                      setPassword(
                        event.target.value,
                      )
                    }
                    placeholder="Unesite lozinku"
                    className="h-14 rounded-2xl pl-12"
                    required
                  />
                </div>
              </div>

              {error ? (
                <div className="rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive">
                  {error}
                </div>
              ) : null}

              <Button
                type="submit"
                disabled={submitting}
                className="h-14 w-full rounded-full text-base font-bold"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Prijava…
                  </>
                ) : (
                  "Prijavi se"
                )}
              </Button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
