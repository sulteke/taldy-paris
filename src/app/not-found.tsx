import { Button } from "@/components/Button";
import { SectionDivider } from "@/components/SectionDivider";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center">
      <div className="container-page text-center">
        <p className="font-serif text-6xl font-bold text-teal-900">404</p>
        <SectionDivider className="my-6" />
        <h1 className="text-2xl font-bold sm:text-3xl">Страница не найдена</h1>
        <p className="mx-auto mt-3 max-w-md text-charcoal-900/70">
          Возможно, страница была перемещена. Вернитесь на главную или загляните
          в меню.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary">
            На главную
          </Button>
          <Button href="/menu" variant="outline">
            Смотреть меню
          </Button>
        </div>
      </div>
    </section>
  );
}
