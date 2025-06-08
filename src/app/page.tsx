import type React from "react";
import Image from "next/image";
import { Github, Linkedin, Heart, ArrowUpRight } from "lucide-react";
import { Button } from "@/_components/ui/Button";
import { cn } from "@/_lib/utils";
import { XLogo } from "@/_components/XLogo";
import Link from "next/link";

function FloatingOrb({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-xl opacity-20 animate-pulse",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

function AnimatedBackground() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <FloatingOrb
          className="w-96 h-96 bg-emerald-500 -top-48 -left-48"
          delay={0}
        />
        <FloatingOrb
          className="w-80 h-80 bg-purple-500 top-1/3 -right-40"
          delay={2}
        />
        <FloatingOrb
          className="w-64 h-64 bg-blue-500 bottom-1/4 left-1/4"
          delay={4}
        />
        <FloatingOrb
          className="w-72 h-72 bg-pink-500 -bottom-36 -right-36"
          delay={1}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </>
  );
}

function ProfileImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
      <div className="relative size-64 lg:size-96 rounded-full overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5 shadow-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
      </div>
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full animate-bounce opacity-80" />
      <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-60" />
    </div>
  );
}

function HeroTitle({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) {
  return (
    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
      <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 text-transparent bg-clip-text">
        {firstName}{" "}
      </span>
      <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
        {lastName}
      </span>
    </h1>
  );
}

function Subtitle({ title }: { title: string }) {
  return (
    <div className="space-y-2">
      <p className="text-2xl sm:text-3xl text-slate-300 font-light">{title}</p>
      <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full mx-auto lg:mx-0" />
    </div>
  );
}

function HeroDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
      {children}
    </p>
  );
}

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Button
      variant="outline"
      size="lg"
      asChild
      className={cn(
        "group relative overflow-hidden",
        "border-white/10 bg-white/5 backdrop-blur-md text-slate-200",
        "hover:bg-white/10 hover:border-white/20 hover:text-white",
        "transition-all duration-300 ease-out",
        "rounded-xl px-6 py-3",
        "hover:scale-105 hover:shadow-lg hover:shadow-white/10"
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3"
      >
        <span className="transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
        <span className="font-medium">{label}</span>
      </a>
    </Button>
  );
}

function SocialLinks({
  links,
}: {
  links: Array<{
    href: string;
    icon: React.ReactNode;
    label: string;
  }>;
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
      {links.map((link) => (
        <SocialButton
          key={link.label}
          href={link.href}
          icon={link.icon}
          label={link.label}
        />
      ))}
    </div>
  );
}

function CTAButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-4">
      <Button
        asChild
        size="lg"
        className="group bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105"
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Button>
    </div>
  );
}

function Footer({ name }: { name: string }) {
  return (
    <div className="mt-24 text-center">
      <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <span>
          © {new Date().getFullYear()} {name}.
        </span>
      </div>
    </div>
  );
}

function HeroContent({
  firstName,
  lastName,
  subtitle,
  description,
  socialLinks,
  ctaHref,
}: {
  firstName: string;
  lastName: string;
  subtitle: string;
  description: React.ReactNode;
  socialLinks: Array<{
    href: string;
    icon: React.ReactNode;
    label: string;
  }>;
  ctaHref: string;
}) {
  return (
    <div className="flex-1 text-center lg:text-left space-y-8">
      <div className="space-y-4">
        <HeroTitle firstName={firstName} lastName={lastName} />
        <Subtitle title={subtitle} />
      </div>
      <HeroDescription>{description}</HeroDescription>
      <SocialLinks links={socialLinks} />
      <CTAButton href={ctaHref}>
        <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
        Sponsor
        <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </CTAButton>
    </div>
  );
}

export default function Home() {
  const socialLinks = [
    {
      href: "https://x.com/gabrielbrunodev",
      icon: <XLogo className="w-5 h-5" />,
      label: "X.com",
    },
    {
      href: "https://linkedin.com/in/gabrielbrunoop",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/gabrielbrunop",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="max-w-6xl w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <ProfileImage src="/avatar.png" alt="Gabriel Bruno" />
            <HeroContent
              firstName="Gabriel"
              lastName="Bruno"
              subtitle="Software Engineer"
              description={
                <>
                  Computer enthusiast. Creator of{" "}
                  <Link
                    href="https://tenda.dev"
                    className="text-emerald-400 font-semibold"
                  >
                    Tenda
                  </Link>
                  , a programming language designed for Portuguese speakers.
                </>
              }
              socialLinks={socialLinks}
              ctaHref="https://github.com/sponsors/gabrielbrunop"
            />
          </div>
          <Footer name="Gabriel Bruno" />
        </div>
      </div>
    </main>
  );
}
