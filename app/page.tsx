import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Dumbbell, Search, TrendingUp, Users } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 mr-2 text-orange-500" />
            <h1 className="text-4xl font-bold">LionFire Group LLC</h1>
          </div>
          <nav>
            <Button variant="ghost" className="mr-4">Services</Button>
            <Button variant="ghost" className="mr-4">About</Button>
            <Button variant="ghost" className="mr-4">Contact</Button>
            <Button>Get Started</Button>
          </nav>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Boost Your Fitness Business with Expert SEO</h2>
          <p className="text-xl mb-6">
            Helping personal trainers and fitness instructors stand out online and attract more clients.
          </p>
          <Button size="lg" className="mr-4">
            <Search className="mr-2 h-4 w-4" /> Get Your Free SEO Audit
          </Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Why Choose LionFire Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Fitness Industry Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We understand the unique challenges of marketing fitness services online.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our clients see an average of 200% increase in organic traffic within 6 months.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tailored Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Custom SEO plans designed specifically for your fitness business goals.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Common Challenges We Solve</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 mr-2 text-green-500 flex-shrink-0" />
              <p>Struggling to stand out in a crowded fitness market</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 mr-2 text-green-500 flex-shrink-0" />
              <p>Difficulty attracting new clients through your website</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 mr-2 text-green-500 flex-shrink-0" />
              <p>Low visibility in local search results for fitness services</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 mr-2 text-green-500 flex-shrink-0" />
              <p>Inconsistent website traffic and lead generation</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is SEO and why is it important for my fitness business?</AccordionTrigger>
              <AccordionContent>
                SEO (Search Engine Optimization) is the process of improving your website to increase its visibility in search engines like Google. For fitness professionals, SEO is crucial because it helps potential clients find you when they're searching for fitness services online. With effective SEO, you'll attract more targeted traffic, leading to more clients and revenue for your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does it take to see results from SEO?</AccordionTrigger>
              <AccordionContent>
                While SEO is not an overnight solution, our clients typically start seeing improvements within 3-6 months. This includes higher rankings, increased organic traffic, and more inquiries. However, SEO is an ongoing process, and the most significant results often come after 6-12 months of consistent effort. We'll provide regular reports so you can track your progress every step of the way.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can SEO help me get more clients for my fitness business?</AccordionTrigger>
              <AccordionContent>
                SEO helps you get more clients by improving your visibility in local search results. When potential clients search for terms like "personal trainer near me" or "fitness classes in [your city]," effective SEO ensures your business appears at the top of the results. This increased visibility leads to more website visits, phone calls, and ultimately, more clients signing up for your services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What makes LionFire Group's SEO services different?</AccordionTrigger>
              <AccordionContent>
                At LionFire Group, we specialize exclusively in SEO for fitness professionals. This focused expertise allows us to create highly targeted strategies that address the unique challenges and opportunities in the fitness industry. We understand the competitive landscape, seasonal trends, and client behavior specific to fitness businesses. Our tailored approach ensures you get the most effective SEO strategy for your specific niche in the fitness world.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Is SEO better than paid advertising for my fitness business?</AccordionTrigger>
              <AccordionContent>
                While both SEO and paid advertising have their place in a comprehensive digital marketing strategy, SEO offers several unique advantages for fitness businesses. SEO provides long-term, sustainable results that continue to benefit your business even after you've stopped actively investing. It also tends to have a higher trust factor, as many users prefer clicking on organic search results over ads. Moreover, SEO typically has a lower cost per acquisition in the long run, making it an excellent investment for fitness professionals looking to grow their business steadily and sustainably.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Ready to Grow Your Fitness Business?</h2>
          <p className="mb-4">Take the first step towards dominating your local fitness market online.</p>
          <Button size="lg">
            <TrendingUp className="mr-2 h-4 w-4" /> Start Your SEO Journey
          </Button>
        </section>

        <footer className="text-center text-sm text-gray-500">
          <p>&copy; 2023 LionFire Group LLC. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}