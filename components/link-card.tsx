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
  ExternalLink,
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

interface LinkCardProps {
  href: string
  title: string
  icon: IconName
  description?: string
}

export function LinkCard({ href, title, icon, description }: LinkCardProps) {
  const Icon = iconMap[icon]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors duration-200 group"
    >
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full mr-3">
          <Icon size={20} />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-blue-800 group-hover:text-blue-900">{title}</h3>
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
        <ExternalLink size={16} className="text-blue-400 group-hover:text-blue-600" />
      </div>
    </a>
  )
}

