import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="pt-28 sm:pt-32">
      <section className="section py-20">
        <Container>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Trusted cleaning across the UK
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Percy Sparkle Cleaning Services
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Professional residential and commercial cleaning services, delivered
            with care, consistency, and attention to detail.
          </p>

          <a
            href="https://www.neohavilah.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Request a Free Quote
          </a>
        </Container>
      </section>
    </main>
  );
}