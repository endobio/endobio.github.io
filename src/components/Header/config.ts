import {
  BeakerIcon,
  SparklesIcon,
  CpuChipIcon,
  CloudIcon,
} from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/20/solid'
import { ForwardRefExoticComponent, SVGProps, RefAttributes } from 'react'

type IconType = ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & { title?: string; titleId?: string; } & RefAttributes<SVGSVGElement>>

interface Product {
  name: string
  description: string
  href: string
  icon: IconType
}

interface CallToAction {
  name: string
  href: string
  icon?: IconType
}

interface NavItem {
  name: string
  type: 'dropdown' | 'link'
  href?: string
  items?: Product[]
  callsToAction?: CallToAction[]
}

export const platformPillars: Product[] = [
  {
    name: 'Scientific Discovery Engine',
    description: 'AI-powered literature mining to identify biological signals linked to crop health',
    href: '#',
    icon: BeakerIcon
  },
  {
    name: 'Distributed Soil Intelligence',
    description: 'Low-cost sensor networks designed for real-world agricultural deployment',
    href: '#',
    icon: SparklesIcon
  },
  {
    name: 'Molecular Biosensing',
    description: 'Scalable detection of metabolites and microbial signals directly in-field',
    href: '#',
    icon: CloudIcon
  },
  {
    name: 'Edge AI Infrastructure',
    description: 'Local farm intelligence for context-aware disease prediction and response',
    href: '#',
    icon: CpuChipIcon
  },
]

export const platformCTA: CallToAction[] = [
  { name: 'Learn more', href: '#' },
  { name: 'View architecture', href: '#' },
]

export const authActions: CallToAction[] = [
  { name: 'Contact us', href: 'mailto:keshav@endobio.ai', icon: EnvelopeIcon },
]

export const primaryActions: CallToAction[] = [
  { name: 'Join Pilot', href: '/#/farmers' },
]

export const logo = {
  alt: 'EndoBio AI',
  src: './endobio.svg',
  href: '#'
}

export const mainNavItems: NavItem[] = [
  {
    name: 'Platform',
    type: 'link',
    href: '#platform',
    items: platformPillars,
    callsToAction: platformCTA,
  },
  {
    name: 'Detection Window',
    type: 'link',
    href: '#detection',
  },
  {
    name: 'Progress',
    type: 'link',
    href: '#progress',
  },
  {
    name: 'Founder',
    type: 'link',
    href: '#/founder',
  },
]
