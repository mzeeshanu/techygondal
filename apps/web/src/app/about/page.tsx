import type { Metadata } from "next";
import { TgMark } from "@/components/TgMark";
import { SocialLinks } from "@/components/Socials";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <TgMark size={96} />
      <h1 className="font-display mt-6 text-4xl font-black italic">About techyGondal</h1>
      <p className="mt-4 text-lg text-muted">
        I&apos;m Zeeshan, a software engineer who builds backend systems for a living and races in the sim for fun.
        The &quot;techy&quot; is where it started; the racing is where the channel grew.
      </p>
      <p className="mt-4 text-lg text-muted">
        Here you&apos;ll find my videos, rig builds and write ups on code and tech. If you want to race with me, join{" "}
        <a href={site.links.team} className="text-racing underline">
          Team Gondal
        </a>
        .
      </p>
      <div className="mt-8">
        <SocialLinks />
      </div>
    </div>
  );
}
