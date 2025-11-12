'use client';

import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { designConfig } from '@/lib/config';
import { useRouter } from 'next/navigation';

export default function ApplyPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit handling can be added here
  };

  return (
    <div className={`${designConfig.colors.background.main} min-h-screen`}>
      <Header />

      <main className="pt-28 pb-16">
        <div className={`${designConfig.spacing.container}`}>
          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              <div className="flex items-center justify-between mb-6">
                <h1 className={`${designConfig.typography.heading.md} ${designConfig.colors.text.primary}`}>
                  Apply
                </h1>
                <Button
                  variant="outline"
                  className={`${designConfig.colors.background.white} ${designConfig.colors.text.black} hover:bg-gray-100`}
                  onClick={() => router.back()}
                >
                  ← Back
                </Button>
              </div>

              <form
                onSubmit={handleSubmit}
                className={`space-y-5 ${designConfig.colors.background.dark} ${designConfig.border.radius.lg} p-6 md:p-8 border ${designConfig.colors.border.light}`}
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className={`${designConfig.colors.text.primary}`}>Full name</Label>
                  <Input id="name" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className={`${designConfig.colors.text.primary}`}>Email</Label>
                  <Input id="email" type="email" placeholder="jane@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className={`${designConfig.colors.text.primary}`}>Company</Label>
                  <Input id="company" placeholder="Company name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="about" className={`${designConfig.colors.text.primary}`}>About your company</Label>
                  <Textarea id="about" rows={5} placeholder="Tell us about what you're building..." />
                </div>

                <div className="pt-2 flex justify-end">
                  <Button className={`${designConfig.colors.accent.primary} ${designConfig.colors.text.primary} hover:opacity-90 hover:scale-105`}>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


