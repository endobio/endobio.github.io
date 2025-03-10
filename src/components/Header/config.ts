import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
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

export const products: Product[] = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

export const callsToAction: CallToAction[] = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export const authActions: CallToAction[] = [
  { name: 'Sign in', href: '#' },
]

export const primaryActions: CallToAction[] = [
  { name: 'Schedule a demo', href: '#', icon: CalendarIcon },
]

export const logo = {
  alt: 'EndoBio AI',
  src: './endobio.svg',
  href: '#'
}

export const mainNavItems: NavItem[] = [
  {
    name: 'Products',
    type: 'dropdown',
    items: products,
    callsToAction: callsToAction,
  },
  {
    name: 'Solutions',
    type: 'link',
    href: '#',
  },
  {
    name: 'Research',
    type: 'link',
    href: '#',
  },
  {
    name: 'Resources',
    type: 'link',
    href: '#',
  },
  {
    name: 'Company',
    type: 'link',
    href: '#',
  },
]