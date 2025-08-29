import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Leaf, Zap, Users } from "lucide-react";

const EcoScore = () => {
  const currentScore = 1247;
  const monthlyTarget = 1500;
  const co2Saved = 34.8;
  const greenTrips = 73;
  const moneySaved = 1420;

  return (
    <Card className="bg-gradient-eco shadow-eco border-0 text-primary-foreground">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-primary-foreground">
          <Leaf className="h-5 w-5" />
          Your Eco Score
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary-foreground">{currentScore}</div>
          <div className="text-sm text-primary-foreground/80">Current Score</div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-primary-foreground/90">
            <span>Progress to target</span>
            <span>{currentScore}/{monthlyTarget}</span>
          </div>
          <Progress 
            value={(currentScore / monthlyTarget) * 100} 
            className="h-2 bg-primary-foreground/20"
          />
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs text-primary-foreground/90">
              <Zap className="h-3 w-3" />
              <span>CO₂ Saved</span>
            </div>
            <div className="text-sm font-semibold text-primary-foreground">{co2Saved} kg</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs text-primary-foreground/90">
              <Users className="h-3 w-3" />
              <span>Trips</span>
            </div>
            <div className="text-sm font-semibold text-primary-foreground">{greenTrips}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs text-primary-foreground/90">
              <span>₹</span>
              <span>Saved</span>
            </div>
            <div className="text-sm font-semibold text-primary-foreground">₹{moneySaved}</div>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
            Metro Master
          </Badge>
          <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
            Hyd Eco Hero
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default EcoScore;