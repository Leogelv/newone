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

// Базовая информация об игроке
export type PlayerData = {
    id: string;
    name: string;
    avatar: string;
    ltv: number;
    lastSeen: string;
    churnRisk: 'Низкий' | 'Средний' | 'Высокий';
    status: 'Активен' | 'Спящий' | 'Отток';
};

// Основная информация игрока
export type PlayerMainInfo = {
    id: string;
    nickname: string;
    country: string;
    geo: string;
    language: string;
    registrationDate: Date;
    trafficSource: {
        utm: string;
        referral: string;
        affiliate?: string;
        streamer?: string;
    };
    platform: 'desktop' | 'mobile' | 'iOS' | 'Android';
    kycStatus: 'unverified' | 'pending' | 'verified' | 'rejected';
    sourceChannel: 'web' | 'affiliate' | 'streamer' | 'organic' | 'other';
};

// Финансовая активность
export type PlayerFinancialActivity = {
    totalDeposit: number;
    totalWithdrawal: number;
    currentBalance: number;
    depositFrequency: string;
    averageDeposit: number;
    averageTimeBetweenDeposits: string;
    lastDepositDate: Date;
    firstDepositAmount: number;
    timeToFirstDeposit: string;
    reDepositsCount: number;
    reDepositFrequency: string;
    accountCurrency: string;
    depositHistory: Transaction[];
    withdrawalHistory: Transaction[];
    successfulTransactions: number;
    failedTransactions: number;
    paymentMethods: string[];
};

// Транзакция
export type Transaction = {
    id: string;
    date: Date;
    amount: number;
    currency: string;
    status: 'pending' | 'completed' | 'failed' | 'cancelled';
    method: string;
    processor: string; // Платежный процессор (CloudPayments, PayOP, Paysafe и т.д.)
    type: 'deposit' | 'withdrawal';
    commission?: number; // Комиссия в валюте транзакции
    commissionRate?: number; // Процент комиссии
};

// Игровая активность
export type PlayerGameActivity = {
    favoriteGames: string[];
    favoriteProviders: string[];
    totalWagered: number;
    averageBetSize: number;
    sessionCount: number;
    averageSessionDuration: string;
    lastSessionDuration: string;
    lastPlayTime: Date;
    sessionFrequency: string;
    peakActivityTime: string;
    winHistory: GameWin[];
    playerRTP: number;
    gameTypes: {
        live: boolean;
        slots: boolean;
        table: boolean;
        aviator: boolean;
        other: string[];
    };
    engagementLevel: 'active' | 'sleeping' | 'at_risk' | 'churned';
    // Новые метрики времени на сайте
    totalTimeOnSite: string; // Общее время на сайте
    averageTimePerDay: string; // Среднее время в день
    activityByDayOfWeek: {
        monday: number; // минуты
        tuesday: number;
        wednesday: number;
        thursday: number;
        friday: number;
        saturday: number;
        sunday: number;
    };
    activityByHour: { [hour: number]: number }; // активность по часам (0-23)
    mostActiveDay: string; // День недели с максимальной активностью
    mostActiveTimeSlot: string; // Время суток с максимальной активностью
};

// Выигрыш в игре
export type GameWin = {
    id: string;
    date: Date;
    game: string;
    amount: number;
    multiplier: number;
};

// Маркетинговая активность
export type PlayerMarketingActivity = {
    bonusParticipation: boolean;
    bonusActivations: number;
    bonusUtilization: number;
    bonusTypes: string[];
    campaignMetrics: {
        openRate: number;
        clickRate: number;
        conversionRate: number;
    };
    communicationHistory: CommunicationEvent[];
    reactivationHistory: ReactivationAttempt[];
    usedPromocodes: string[];
    lastPromoActivity: Date;
    vipStatus: boolean;
    vipLevel?: number;
    participatesIn: {
        tournaments: boolean;
        cashback: boolean;
        referral: boolean;
    };
};

// Событие коммуникации
export type CommunicationEvent = {
    id: string;
    date: Date;
    type: 'email' | 'sms' | 'push' | 'inapp';
    campaign: string;
    status: 'sent' | 'opened' | 'clicked' | 'converted';
};

// Попытка реактивации
export type ReactivationAttempt = {
    id: string;
    date: Date;
    method: string;
    offer: string;
    result: 'success' | 'failed' | 'pending';
};

// Поведенческие метрики
export type PlayerBehaviorMetrics = {
    retentionRate: {
        d7: number;
        d14: number;
        d30: number;
        d60: number;
        d90: number;
    };
    churnRisk: number; // 0-100%
    ltv: number;
    arpu: number;
    arppu: number;
    ngr: number;
    acquisitionROI: number;
    customerSegment: string; // RFM или ML сегмент
    nps?: number;
    csat?: number;
    predictedCLV: number;
    fraudRisk: 'low' | 'medium' | 'high';
};

// AI показатели и рекомендации
export type PlayerAIInsights = {
    mlSegment: string;
    behaviorProfile: string;
    recommendedGames: string[];
    recommendedBonuses: string[];
    reDepositProbability: number;
    recommendedReactivationOffer: string;
    churnProbability: number;
    autoTriggers: string[]; // ["Ждёт кэшбэк", "Играет каждый вторник", и т.д.]
};

// Журнал действий
export type PlayerActionLog = {
    loginHistory: LoginEvent[];
    supportRequests: SupportTicket[];
    complaints: Complaint[];
    managerNotes: ManagerNote[];
    manualInterventions: Intervention[];
};

// События входа
export type LoginEvent = {
    id: string;
    date: Date;
    ip: string;
    device: string;
    location: string;
};

// Тикет в поддержку
export type SupportTicket = {
    id: string;
    date: Date;
    subject: string;
    status: 'open' | 'in_progress' | 'resolved' | 'closed';
    priority: 'low' | 'medium' | 'high' | 'critical';
};

// Жалоба
export type Complaint = {
    id: string;
    date: Date;
    type: string;
    description: string;
    status: string;
};

// Заметка менеджера
export type ManagerNote = {
    id: string;
    date: Date;
    author: string;
    content: string;
    type: 'info' | 'warning' | 'action';
};

// Вмешательство
export type Intervention = {
    id: string;
    date: Date;
    type: string;
    description: string;
    performedBy: string;
};

// VIP и high-risk дополнения
export type PlayerVIPInfo = {
    personalManager?: string;
    chatHistory?: ChatMessage[];
    limits?: {
        depositLimit?: number;
        lossLimit?: number;
        sessionLimit?: string;
        selfExclusion?: {
            active: boolean;
            until?: Date;
        };
    };
    legalStatus?: string;
    responsibleGambling: {
        score: number;
        flags: string[];
        lastAssessment: Date;
    };
};

// Сообщение в чате
export type ChatMessage = {
    id: string;
    date: Date;
    from: string;
    message: string;
};

// Полная карточка игрока
export type PlayerFullProfile = {
    mainInfo: PlayerMainInfo;
    financial: PlayerFinancialActivity;
    gaming: PlayerGameActivity;
    marketing: PlayerMarketingActivity;
    behavior: PlayerBehaviorMetrics;
    ai: PlayerAIInsights;
    actionLog: PlayerActionLog;
    vipInfo?: PlayerVIPInfo;
};

// Старые типы для совместимости
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

// Типы для системы фильтрации
export type SegmentType = 'all' | 'vip' | 'previp' | 'active' | 'dep1' | 'dep2' | 'dep3' | 'dep4' | 'dep5' | 'dep6' | 'dep7' | 'highroller' | 'prechurn' | 'deepprechurn' | 'churn' | 'deepchurn' | 'reactivation' | 'deepreactivation' | 'sleeping';
export type ChannelType = 'sms' | 'email' | 'telegram' | 'whatsapp' | 'push';
export type VipLevel = 'previp1' | 'previp2' | 'previp3' | 'vip';

export type FilterConfig = {
  // Основные фильтры
  casinoName?: string;          // Название казино
  casinoLogo?: string;          // Логотип казино (URL или base64)
  projectBrand?: string;        // Выбор проекта/бренда
  dateRange?: {                 // Период
    from: Date;
    to: Date;
  };
  datePreset?: 'today' | 'yesterday' | 'week' | 'month' | 'custom'; // Быстрые периоды
  
  // Фильтр по сегментам
  segments?: SegmentType[];     // Все сегменты из списка
  
  // Фильтр по кампаниям
  campaigns?: string[];         // Выбранные кампании
  
  // Фильтры по источнику
  sourceType?: 'url' | 'streamer' | 'organic' | 'promo' | 'other'; // Тип источника
  sourceUrl?: string;           // URL источника
  trid?: string;                // Tracking ID
  streamerName?: string;        // Имя стримера
  promoCode?: string;           // Промокод
  
  // Прочие фильтры
  device?: 'desktop' | 'mobile' | 'tablet' | 'all'; // Устройство
  gender?: 'male' | 'female' | 'all';              // Пол
  countries?: string[];         // Гео (страны)
  language?: string;            // Язык
  currency?: string;            // Валюта
  emailVerified?: boolean;      // Верифицирован ли email
  email?: string;               // Email
  phoneNumber?: string;         // Номер телефона
  
  // Фильтры по поведению на платформе
  depositAmount?: {             // Сумма депозита
    min?: number;
    max?: number;
  };
  registrationDate?: {          // Дата регистрации
    from: Date;
    to: Date;
  };
  lastPlayDate?: {              // Дата последней игры
    from: Date;
    to: Date;
  };
  lastDepositDate?: {           // Дата последнего депозита
    from: Date;
    to: Date;
  };
  playedGames?: string[];       // Игры в которые играет (с ограничением)
  
  // Legacy поля для совместимости
  vertical?: string;
  games?: string[];
  playerId?: string;
  trackingId?: string;
  minDeposit?: number;
  sources?: string[];
  channels?: ChannelType[];
  lastInteractionChannel?: ChannelType;
  vipLevels?: VipLevel[];
};

export type FilterOption<T = string> = {
  value: T;
  label: string;
  icon?: React.ElementType;
  count?: number;
};

export type FilterGroup = {
  id: string;
  label: string;
  type: 'select' | 'multiselect' | 'range' | 'daterange' | 'text' | 'number';
  options?: FilterOption[];
  placeholder?: string;
  min?: number;
  max?: number;
};

// Типы для расширенной системы метрик ретеншена
export type RetentionMetric = {
  id: string;
  name: string;
  description: string;
  value: string | number;
  unit?: '%' | '$' | '€' | 'days' | 'times' | 'hours' | 'min' | '/5' | '';
  category: 'retention' | 'revenue' | 'engagement' | 'conversion' | 'satisfaction';
  frequency: 'daily' | 'weekly' | 'monthly';
  targetValue?: string | number;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
};

export type SegmentMetrics = {
  segmentName: string;
  segmentId: string;
  metrics: {
    retentionRate: string;
    averageDepositAmount: string;
    depositFrequency: string;
    ltv: string;
    conversionRate?: string;
    bonusActivationRate?: string;
    activePlayersRatio?: string;
    referralRate?: string;
  };
  recommendations: string[];
};

export type MonitoringSchedule = {
  daily: string[];
  weekly: string[];
  monthly: string[];
};

export type AlertThresholds = {
  [metricName: string]: {
    critical?: number;
    warning?: number;
    criticalDrop?: number;
  };
};

// Типы для KPI Summary
export type KPIMetric = {
  id: string;
  name: string;
  currentValue: string | number;
  previousValue?: string | number;
  unit?: string;
  change?: number; // В процентах
  status: 'green' | 'yellow' | 'red'; // Светофор
  benchmark?: string | number; // Целевое значение
  description?: string;
};

// Типы для селектора метрик
export type AvailableMetric = {
  id: string;
  name: string;
  category: 'retention' | 'revenue' | 'engagement' | 'conversion' | 'satisfaction';
  description: string;
  unit?: string;
  defaultEnabled?: boolean;
};

// Типы для графиков
export type ChartMetric = {
  metricId: string;
  metricName: string;
  data: ChartData[];
  color?: string;
  showPrediction?: boolean;
};

// Типы для Customer.io интеграции
export type CustomerIOConfig = {
  siteId: string;
  apiKey: string;
  trackingApiKey?: string;
  region?: 'us' | 'eu';
};
