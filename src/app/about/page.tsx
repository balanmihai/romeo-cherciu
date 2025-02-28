import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
  BuyIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import PdfList from '@/components/Pdflist'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target='_blank'
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Romeo Cherciu. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Despre ceea ce fac și despre ce înțeleg din ceea ce fac.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            Despre psihoterapie pot vorbi ore bune iar asta probabil fiindcă ceea ce fac presupune să ascult. Pentru mine e ce adevărat impresionant acest proces. Aceste conversații în care vorbești și vorbind, afli lucruri despre tine. Paradoxal fiindcă tu știi totul despre tine, nu? Și ce clipe sunt mai de trăit decât acelea în care rămâi surprins, de ceea ce spui, de ceea ce simți, reconturând cine credeai că ești!

            </p>
            <p>
            ”O viață care nu este explorată, nu merită traită” spunea Socrate. Este unul dintre crezurile care îmi ghidează gândurile și care mă ajută să îmi găsesc sensul chiar și atunci când el nu pare să fie. Și nu este orice viață și nu este orice om. Este viața unui om care are intenția de a se cunoaște pe sine. Ce-o fi însemnând și acest sine... Iar asta e o călătorie în care oricare dintre noi are nevoie de cineva alături. Cineva de încredere care să fie acolo în caz de... în caz de orice. 

            </p>
            <p>
            Gânduri, idei, fantezii, secrete de care ori uitasei, ori te minunezi că sunt acolo. Frici, temeri, mici bucurii și mici picanterii, toate într-o viață de om. Într-o viață de om… Fiindcă despre asta este, despre o viață de om. Viața omului din fața mea. Nu este ușor să descriu ce înțeleg când mă gândesc la un om dar complexitatea fiecăruia din noi este un spațiu ce mă face să fiu curios. Complexitatea vieților noastre a devenit atât de mare încât e greu de imaginat că putem să trăim și să contemplăm ceea ce trăim în același timp. Viața se întâmplă cu o rapiditate enormă iar pe mine mă interesează să înțeleg ceva din această experiență umană.

            </p>
            <p>
            Conversațiile din cabinet sunt asemeni unor demersuri arheologice. E ca și cum descoperi ceva nou. Ceva nou care nu e tocmai nou fiindcă e foarte vechi dar în același timp te întâmpină ca un lucru pe care îl credeai pierdut dar pe care l-ai regăsit din întâmplare. Ceva nou care a fost tot timpul alături de tine. Hmm… cum sună asta… Să descoperi ceva nou care a fost tot timpul alături de tine… Ceva nou care, paradoxal, se crează în timp ce povestești despre experiența vieții pe care o trăiești.

            </p>
            <p>
            Ce înțelegi din experiența umană pe care ai avut-o până acum?
Ce din prezentul tău descrie viața pe care îți dorești s-o trăiești?
Dacă ar fi un singur aspect al vieții tale prezente pe care l-ai putea lua cu tine într-o viață viitoare, care ar fi acesta?

            </p>
            <p>Numele meu este Romeo Cherciu. Dacă simți că gândurile de mai sus te-au făcut curios, scrie-mi.</p>
          </div>
        </div>
        {/* <div className="container mx-auto p-6">
          <PdfList/>
          </div> */}
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.facebook.com/profile.php?id=100090279185875" icon={FacebookIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/mr.cherciu" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/romeo-cherciu-858591290/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://buymeacoffee.com/mr.cherciu" icon={BuyIcon} className="mt-4">
              Buy me a Coffee
            </SocialLink>
            <SocialLink
              href="mailto:cherciu.romeo@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              cherciu.romeo@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
