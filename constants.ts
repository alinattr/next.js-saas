import {Code, ImageIcon, Bot, Disc3, Dna} from "lucide-react";

export const MAX_FREE_COUNTS = 30;

export const tools = [
  {
    label: 'Чат-бот',
    icon: Bot,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Создать Изображение',
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  {
    label: 'Генератор Кода',
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
];
