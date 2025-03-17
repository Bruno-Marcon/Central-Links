"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { LinkCard } from "./link-card"
import type { LucideIcon } from "lucide-react"
import {
  Ticket,
  CrossIcon as MedicalCross,
  Activity,
  Building,
  ClipboardList,
  HeartPulse,
  Calendar,
  BadgeIcon as IdCard,
  MessageCircle,
  FileText,
  Bed,
  Bell,
  Microscope,
  CreditCard,
  Landmark,
  MessageSquare,
  MoreHorizontal,
  Search,
  FlaskRoundIcon as Flask,
} from "lucide-react"

type IconName =
  | "ticket"
  | "medical-cross"
  | "activity"
  | "building"
  | "clipboard-list"
  | "heart-pulse"
  | "calendar"
  | "id-card"
  | "message-circle"
  | "file-text"
  | "bed"
  | "bell"
  | "microscope"
  | "credit-card"
  | "landmark"
  | "message-square"
  | "more-horizontal"
  | "search"
  | "flask"

const iconMap: Record<IconName, LucideIcon> = {
  ticket: Ticket,
  "medical-cross": MedicalCross,
  activity: Activity,
  building: Building,
  "clipboard-list": ClipboardList,
  "heart-pulse": HeartPulse,
  calendar: Calendar,
  "id-card": IdCard,
  "message-circle": MessageCircle,
  "file-text": FileText,
  bed: Bed,
  bell: Bell,
  microscope: Microscope,
  "credit-card": CreditCard,
  landmark: Landmark,
  "message-square": MessageSquare,
  "more-horizontal": MoreHorizontal,
  search: Search,
  flask: Flask,
}

interface Link {
  href: string
  title: string
  icon: IconName
  description?: string
}

interface LinkSectionProps {
  title: string
  icon?: IconName
  links: Link[]
  defaultOpen?: boolean
}

export function LinkSection({ title, icon, links, defaultOpen = false }: LinkSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const Icon = icon ? iconMap[icon] : null

  return (
    <section className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          {Icon && <Icon size={20} className="mr-2" />}
          <h2 className="text-xl font-medium">{title}</h2>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-sm bg-white text-blue-600 px-2 py-1 rounded-full">{links.length}</span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {isOpen && (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {links.map((link, index) => (
              <LinkCard
                key={index}
                href={link.href}
                title={link.title}
                icon={link.icon}
                description={link.description}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

