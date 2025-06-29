import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <div className="grid grid-cols-4 h-screen">
      <section className="bg-green-700 col-span-1">This is going to be the Sidebar</section>

      <section className="bg-green-400 col-span-3 grid grid-rows-8">
        <div className="bg-green-600 row-span-1">This will be the header</div>

        <div>This will be tha main chat Area

          <Card className="w-full max-w-sm">

            <CardContent>
              <form>
                <div className="flex flex-col gap-6">

                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="chatMessage">Message</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        What's on your mind?
                      </a>
                    </div>
                    <Input id="chatMessage" type="chatMessage" required />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>



      </section>

    </div>
  );
}
