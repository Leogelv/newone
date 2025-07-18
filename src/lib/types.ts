import type { LucideIcon } from "lucide-react";

export type KpiCardData = {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: string;
  aiHint: string;
};

export type ScenarioData = {
  name: string;
  category: string;
  frequency: "Регулярный" | "Разовый" | "Триггерный";
  channel: "Email" | "Push" | "SMS" | "InApp" | "Multi-channel";
  status: "Активен" | "Пауза" | "Завершён";
  segment: string;
  goal: string;
  deliveryRate: string;
  openRate: string;
  ctr: string;
  cr: string;
  churnImpact: string;
};

export type ChartData = {
  date: string;
  value: number | null;
  predictedValue?: number | null;
  [key: string]: number | string | null | undefined;
};

export type RiskData = {
    type: "critical" | "warning" | "info";
    title: string;
    date: string;
    details: string;
    recommendation: string;
    action: {
        text: string;
        link: string;
    };
}

export type SegmentData = {
  id: string;
  name: string;
  description: string;
  playerCount: number;
  createdAt: string;
  createdBy: 'AI' | 'Пользователь';
};

export type TemplateData = {
  id: string;
  name: string;
  description: string;
  category: string;
  performance: number; // 1-5 stars
  channel: "Email" | "Push" | "SMS" | "InApp" | "Multi-channel";
};

export type ReportData = {
  id: string;
  name: string;
  type: "Сценарий" | "Сегмент" | "Retention";
  createdAt: string;
  status: "Готов" | "В процессе";
  createdBy: string;
};

export type CampaignData = {
  id: string;
  name: string;
  date: string; // e.g. "2024-07-15"
  type: "Email" | "Push" | "Promo";
};

export type ScenarioNodeData = {
  id: string;
  type: 'trigger' | 'action' | 'logic';
  title: string;
  description?: string;
  icon: React.ElementType;
  position: { top: number; left: string; transform?: string };
  config?: any;
}

export type WebhookLogData = {
  id: string;
  timestamp: string;
  service: 'SendGrid' | 'Twilio' | 'Custom';
  event: string;
  status: 'Success' | 'Failed';
  requestId: string;
};

export type CampaignPerformanceData = {
  id: string;
  campaignName: string;
  segment: string;
  sent: number;
  delivered: number;
  openRate: string;
  ctr: string;
  cr: string;
  revenue: number;
};

export type PlayerData = {
    id: string;
    name: string;
    avatar: string;
    ltv: number;
    lastSeen: string;
    churnRisk: 'Низкий' | 'Средний' | 'Высокий';
    status: 'Активен' | 'Спящий' | 'Отток';
};

export type PlayerKpi = {
    title: string;
    value: string;
};

export type PlayerActivityEvent = {
    id: string;
    timestamp: string;
    type: 'deposit' | 'bet' | 'win' | 'session' | 'communication' | 'note';
    title: string;
    details: string;
    value?: string;
    icon: React.ElementType;
};

export type PlayerDetails = PlayerData & {
  demographics: {
      "ID клиента": string;
      "Пол": string;
      "Возраст": string;
      "Страна": string;
      "Язык": string;
      "Дата регистрации": string;
      "Устройство": string;
  };
  kpis: PlayerKpi[];
  activity: PlayerActivityEvent[];
  aiCharts: any[];
};
