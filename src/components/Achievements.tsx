import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Star, Award, Medal, Crown } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Eco Warrior",
      description: "Complete 50 green trips",
      icon: <Trophy className="h-5 w-5" />,
      progress: 47,
      total: 50,
      unlocked: false,
      rarity: "gold"
    },
    {
      id: 2,
      title: "Bike Champion",
      description: "Cycle 100km this month",
      icon: <Medal className="h-5 w-5" />,
      progress: 100,
      total: 100,
      unlocked: true,
      rarity: "platinum"
    },
    {
      id: 3,
      title: "Public Transport Hero",
      description: "Use public transport 25 times",
      icon: <Star className="h-5 w-5" />,
      progress: 18,
      total: 25,
      unlocked: false,
      rarity: "silver"
    },
    {
      id: 4,
      title: "Carbon Saver",
      description: "Save 50kg of CO₂",
      icon: <Award className="h-5 w-5" />,
      progress: 23.4,
      total: 50,
      unlocked: false,
      rarity: "gold"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'platinum':
        return 'bg-gradient-to-r from-gray-300 to-gray-100 text-gray-800';
      case 'gold':
        return 'bg-gradient-to-r from-yellow-300 to-yellow-100 text-yellow-800';
      case 'silver':
        return 'bg-gradient-to-r from-gray-400 to-gray-200 text-gray-700';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const currentLevel = 12;
  const levelProgress = 650;
  const nextLevelTarget = 1000;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Crown className="h-5 w-5" />
          Achievements
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Level Progress */}
        <div className="p-4 bg-gradient-eco-light rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-primary">Level {currentLevel}</span>
            <span className="text-sm text-primary/80">{levelProgress}/{nextLevelTarget} XP</span>
          </div>
          <Progress 
            value={(levelProgress / nextLevelTarget) * 100} 
            className="h-2"
          />
          <p className="text-xs text-primary/70 mt-1">
            {nextLevelTarget - levelProgress} XP to next level
          </p>
        </div>

        {/* Recent Achievements */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-muted-foreground">Recent Progress</h4>
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-3 border rounded-lg transition-all ${
                achievement.unlocked 
                  ? 'border-eco-primary bg-eco-secondary/30' 
                  : 'border-border hover:bg-muted/50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${
                    achievement.unlocked 
                      ? 'bg-eco-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h5 className="font-medium text-sm">{achievement.title}</h5>
                      {achievement.unlocked && (
                        <Badge className={getRarityColor(achievement.rarity)}>
                          {achievement.rarity}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    {!achievement.unlocked && (
                      <div className="mt-2">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>{achievement.progress}/{achievement.total}</span>
                        </div>
                        <Progress 
                          value={(achievement.progress / achievement.total) * 100} 
                          className="h-1"
                        />
                      </div>
                    )}
                  </div>
                </div>
                {achievement.unlocked && (
                  <div className="text-eco-success">
                    <Target className="h-4 w-4" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Achievements;