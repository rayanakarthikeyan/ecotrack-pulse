import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Calendar, Trophy, TrendingUp } from "lucide-react";

const CommunityChallenge = () => {
  const activeChallenge = {
    title: "Green Week Challenge",
    description: "Community goal: 10,000 eco-friendly trips",
    progress: 7834,
    target: 10000,
    daysLeft: 3,
    participants: 2847,
    reward: "Plant 100 trees in the city park"
  };

  const leaderboard = [
    { rank: 1, name: "EcoRider Sarah", score: 145, avatar: "🚴‍♀️" },
    { rank: 2, name: "GreenCommuter", score: 132, avatar: "🚌" },
    { rank: 3, name: "WalkingWarrior", score: 128, avatar: "🚶‍♂️" },
    { rank: 4, name: "You", score: 87, avatar: "🌱", isUser: true },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Community Challenge
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Active Challenge */}
        <div className="p-4 bg-gradient-eco-light rounded-lg">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-primary">{activeChallenge.title}</h3>
              <p className="text-sm text-primary/80">{activeChallenge.description}</p>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {activeChallenge.daysLeft}d left
            </Badge>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-primary/80">Progress</span>
              <span className="font-medium text-primary">
                {activeChallenge.progress.toLocaleString()}/{activeChallenge.target.toLocaleString()}
              </span>
            </div>
            <Progress 
              value={(activeChallenge.progress / activeChallenge.target) * 100} 
              className="h-2"
            />
            <div className="flex items-center justify-between text-xs text-primary/70">
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {activeChallenge.participants.toLocaleString()} participants
              </span>
              <span>{Math.round((activeChallenge.progress / activeChallenge.target) * 100)}% complete</span>
            </div>
          </div>

          <div className="mt-3 p-2 bg-eco-secondary/50 rounded text-xs text-eco-primary">
            🌳 Reward: {activeChallenge.reward}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            This Week's Leaders
          </h4>
          {leaderboard.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                user.isUser 
                  ? 'bg-eco-secondary/30 border border-eco-primary/20' 
                  : 'hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                  user.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                  user.rank === 2 ? 'bg-gray-100 text-gray-700' :
                  user.rank === 3 ? 'bg-orange-100 text-orange-700' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {user.rank}
                </div>
                <span className="text-lg">{user.avatar}</span>
                <div>
                  <div className={`font-medium text-sm ${user.isUser ? 'text-eco-primary' : ''}`}>
                    {user.name}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {user.score} pts
                </Badge>
                {user.isUser && (
                  <TrendingUp className="h-4 w-4 text-eco-success" />
                )}
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full">
          View All Challenges
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommunityChallenge;