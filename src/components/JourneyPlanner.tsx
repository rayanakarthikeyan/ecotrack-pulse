import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock, Leaf, Bike, Bus, Car } from "lucide-react";
import { useState } from "react";

const JourneyPlanner = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const routeOptions = [
    {
      id: 1,
      type: "bike",
      icon: <Bike className="h-4 w-4" />,
      duration: "22 min",
      co2: "0 kg",
      calories: "180",
      cost: "Free",
      eco: true,
    },
    {
      id: 2,
      type: "bus",
      icon: <Bus className="h-4 w-4" />,
      duration: "18 min",
      co2: "0.8 kg",
      cost: "$2.50",
      eco: true,
    },
    {
      id: 3,
      type: "car",
      icon: <Car className="h-4 w-4" />,
      duration: "12 min",
      co2: "3.2 kg",
      cost: "$8.40",
      eco: false,
    },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Navigation className="h-5 w-5" />
          Plan Your Journey
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button className="w-full bg-gradient-eco hover:opacity-90 transition-opacity">
            Find Routes
          </Button>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-sm text-muted-foreground">Suggested Routes</h4>
          {routeOptions.map((route) => (
            <div
              key={route.id}
              className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${route.eco ? 'bg-eco-secondary' : 'bg-muted'}`}>
                  {route.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium capitalize">{route.type}</span>
                    {route.eco && (
                      <Badge variant="secondary" className="bg-eco-secondary text-eco-primary">
                        Eco
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {route.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Leaf className="h-3 w-3" />
                      {route.co2}
                    </span>
                    {route.calories && (
                      <span className="text-eco-success">
                        {route.calories} cal
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{route.cost}</div>
                <div className="text-sm text-muted-foreground">cost</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default JourneyPlanner;