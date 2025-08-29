import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Leaf, Zap, Users } from "lucide-react";

const EcoScore = () => {
  const currentScore = 785;
  const monthlyTarget = 1000;
  const co2Saved = 23.4;
  const greenTrips = 47;

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

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-sm text-primary-foreground/90">
              <Zap className="h-4 w-4" />
              <span>CO₂ Saved</span>
            </div>
            <div className="text-lg font-semibold text-primary-foreground">{co2Saved} kg</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-sm text-primary-foreground/90">
              <Users className="h-4 w-4" />
              <span>Green Trips</span>
            </div>
            <div className="text-lg font-semibold text-primary-foreground">{greenTrips}</div>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
            Eco Champion
          </Badge>
          <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
            Cyclist
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default EcoScore;