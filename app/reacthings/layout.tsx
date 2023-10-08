"use client"

import { Typography } from "@material-tailwind/react";

export default function AlgoLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="w-full h-full flex flex-col">
      <Typography className="ring-2 p-2 pl-4 h-12 ring-gray-500 bg-gradient-to-r from-white to-blue-400" variant="h4">REACTHINGS! - SHOWING SOLUTIONS FOR BASIC PROBLEMS</Typography>
      {children}
    </section>
  )
}