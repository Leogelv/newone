"use client";

import { useEffect, useState } from "react";
import { FullMetricsDashboard } from "@/components/dashboard/full-metrics-dashboard";
import { RisksAndWarnings } from "@/components/dashboard/risks-and-warnings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, TrendingUp, AlertCircle, Lightbulb, BarChart3, Users } from "lucide-react";
import Link from "next/link";
import type { FilterConfig } from "@/lib/types";
import { verticalsData, type VerticalKey } from "@/lib/verticals-data";

export default function CommandCenterPage() {
  const [savedFilters, setSavedFilters] = useState<FilterConfig | null>(null);

  useEffect(() => {
    // Загружаем сохраненные фильтры из localStorage
    const filters = localStorage.getItem('analyticsFilters');
    if (filters) {
      setSavedFilters(JSON.parse(filters));
    }
  }, []);

  const getFilterSummary = (filters: FilterConfig): string => {
    const parts = [];
    
    if (filters.vertical) {
      parts.push(`Вертикаль: ${verticalsData[filters.vertical as VerticalKey]?.label}`);
    }
    if (filters.games && filters.games.length > 0) {
      parts.push(`${filters.games.length} игр`);
    }
    if (filters.segments && filters.segments.length > 0) {
      parts.push(`${filters.segments.length} сегментов`);
    }
    if (filters.dateRange?.from && filters.dateRange?.to) {
      parts.push('Период задан');
    }
    
    return parts.length > 0 ? parts.join(', ') : 'Фильтры не заданы';
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Центр аналитики казино</h1>
        </div>
        <p className="text-muted-foreground">
          Полный мониторинг 25 ключевых метрик эффективности ретеншена и AI-рекомендации
        </p>
      </div>

      {/* Полный дашборд метрик - главный блок */}
      <FullMetricsDashboard />

      {/* AI Инсайты и быстрые действия */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <CardTitle>AI Рекомендации</CardTitle>
            </div>
            <CardDescription>
              Персонализированные советы на основе метрик
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium mb-1">
                  Срочно: Запустить кампанию реактивации
                </p>
                <p className="text-xs text-muted-foreground">
                  Retention Rate упал ниже 65% - требуются меры
                </p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium mb-1">
                  Оптимизировать бонусную программу
                </p>
                <p className="text-xs text-muted-foreground">
                  Bonus Utilization Rate 71% - есть потенциал роста
                </p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium mb-1">
                  Усилить работу с VIP-сегментом
                </p>
                <p className="text-xs text-muted-foreground">
                  VIP Conversion Rate 8.3% ниже целевых 10%
                </p>
              </div>
              <Button variant="default" size="sm" className="w-full" asChild>
                <Link href="/builder">
                  Создать сценарий
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Фильтры и настройки</CardTitle>
            </div>
            <CardDescription>
              Активные фильтры аналитики
            </CardDescription>
          </CardHeader>
          <CardContent>
            {savedFilters ? (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {getFilterSummary(savedFilters)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {savedFilters.vertical && (
                    <Badge variant="secondary">
                      {verticalsData[savedFilters.vertical as VerticalKey]?.label}
                    </Badge>
                  )}
                  {savedFilters.games && savedFilters.games.slice(0, 3).map((game) => (
                    <Badge key={game} variant="outline">
                      {savedFilters.vertical && 
                        verticalsData[savedFilters.vertical as VerticalKey]?.games.find(g => g.value === game)?.label || game
                      }
                    </Badge>
                  ))}
                  {savedFilters.games && savedFilters.games.length > 3 && (
                    <Badge variant="outline">+{savedFilters.games.length - 3}</Badge>
                  )}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/analytics">
                    Изменить фильтры
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="text-center py-2">
                <p className="text-sm text-muted-foreground mb-3">
                  Настройте фильтры для персонализации
                </p>
                <Button asChild variant="default" size="sm" className="w-full">
                  <Link href="/analytics">
                    Настроить
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              <CardTitle>Быстрые действия</CardTitle>
            </div>
            <CardDescription>
              Рекомендуемые действия
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/segments">
                  <Users className="mr-2 h-4 w-4" />
                  Управление сегментами
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/builder">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Создать кампанию
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/reports">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Экспорт отчетов
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI предупреждения и риски */}
      <RisksAndWarnings />
    </div>
  );
}