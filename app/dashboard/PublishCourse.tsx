import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PublishCourse() {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-4">Publish Course</h2>
        <p className="mb-4">Make sure everything is correct before publishing your course!</p>
        <Button className="bg-[#ff385c]">Publish Course</Button>
      </CardContent>
    </Card>
  )
}
