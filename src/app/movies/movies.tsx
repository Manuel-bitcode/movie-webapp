import { Card, GlobalCounter } from "@/components"

export const Movies = () => {
  return (
    <div className="flex flex-col gap-5">
      <GlobalCounter />
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  )
}