export default function AlgoLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <h1 className="text-9xl">Algorithms!</h1>
      {children}
    </section>
  )
}