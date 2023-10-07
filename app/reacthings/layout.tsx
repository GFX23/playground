export default function AlgoLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="w-full h-full flex flex-col">
      <h1 className="text-9xl">Reacthings!</h1>
      {children}
    </section>
  )
}