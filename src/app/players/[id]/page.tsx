"use client";

import * as React from 'react';
import { useParams } from 'next/navigation';
import { getPlayerDetails } from "@/lib/mock-data";
import { PlayerProfileHeader } from "@/components/players/player-profile-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayerKpiGrid } from "@/components/players/player-kpi-grid";
import { PlayerActivityFeed } from "@/components/players/player-activity-feed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayerAiAnalytics } from "@/components/players/player-ai-analytics";
import { Bot, LineChart, List, Lock } from 'lucide-react';
import type { PlayerData, PlayerDetails } from '@/lib/types';

export default function PlayerProfilePage() {
    const params = useParams<{ id: string }>();
    const [playerDetails, setPlayerDetails] = React.useState<PlayerDetails | null>(null);

    React.useEffect(() => {
        if (params?.id) {
            const details = getPlayerDetails(params.id);
            setPlayerDetails(details);
        }
    }, [params]);


    if (!playerDetails) {
        return <div className="p-8">Loading player profile...</div>;
    }

    return (
        <div className="p-4 md:p-6 lg:p-8 space-y-6">
            <PlayerProfileHeader player={playerDetails} />
            
            <Tabs defaultValue="overview">
                <TabsList className="mb-4">
                    <TabsTrigger value="overview"><List className="mr-2 h-4 w-4" />Обзор</TabsTrigger>
                    <TabsTrigger value="activity"><LineChart className="mr-2 h-4 w-4" />Лента событий</TabsTrigger>
                    <TabsTrigger value="ai-analytics"><Bot className="mr-2 h-4 w-4" />AI Аналитика</TabsTrigger>
                    <TabsTrigger value="chat"><Lock className="mr-2 h-4 w-4" />Чат (скоро)</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Демография и контакты</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            {Object.entries(playerDetails.demographics).map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                    <span className="text-muted-foreground">{key}:</span>
                                    <span className="font-medium">{String(value)}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <PlayerKpiGrid kpis={playerDetails.kpis} />
                </TabsContent>
                
                <TabsContent value="activity">
                    <PlayerActivityFeed events={playerDetails.activity} />
                </TabsContent>

                <TabsContent value="ai-analytics">
                    <PlayerAiAnalytics charts={playerDetails.aiCharts} />
                </TabsContent>
                
                <TabsContent value="chat">
                    <Card>
                        <CardHeader>
                            <CardTitle>Чат с игроком</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center text-center h-64">
                            <Lock className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-xl font-semibold">Функционал в разработке</h3>
                            <p className="text-muted-foreground">Мы скоро добавим возможность вести чат с игроком прямо из этого интерфейса.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
