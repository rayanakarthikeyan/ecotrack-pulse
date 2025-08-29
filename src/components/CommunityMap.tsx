import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, Bike, TreePine, Users } from "lucide-react";

const CommunityMap = () => {
  const mapFeatures = [
    {
      id: 1,
      type: "charging",
      icon: <Zap className="h-4 w-4" />,
      title: "EV Charging Station",
      location: "Downtown Plaza",
      distance: "0.3 km",
      status: "available",
    },
    {
      id: 2,
      type: "bike",
      icon: <Bike className="h-4 w-4" />,
      title: "Bike Share Hub",
      location: "Central Park",
      distance: "0.5 km",
      status: "7 bikes available",
    },
    {
      id: 3,
      type: "eco",
      icon: <TreePine className="h-4 w-4" />,
      title: "Green Route",
      location: "Riverside Path",
      distance: "1.2 km",
      status: "low pollution",
    },
    {
      id: 4,
      type: "carpool",
      icon: <Users className="h-4 w-4" />,
      title: "Carpool Meetup",
      location: "Tech District",
      distance: "2.1 km",
      status: "3 spots left",
    },
  ];

  const getStatusColor = (type: string) => {
    switch (type) {
      case "charging":
        return "bg-eco-success/20 text-eco-success";
      case "bike":
        return "bg-eco-accent/20 text-eco-accent";
      case "eco":
        return "bg-eco-secondary text-eco-primary";
      case "carpool":
        return "bg-eco-primary/20 text-eco-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Eco Map
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Interactive Map Placeholder */}
        <div className="h-48 bg-gradient-eco-light rounded-lg flex items-center justify-center text-primary">
          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm font-medium">Interactive Map</p>
            <p className="text-xs opacity-80">Eco-friendly routes & stations</p>
          </div>
        </div>

        {/* Nearby Features */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-muted-foreground">Nearby Eco Features</h4>
          {mapFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${getStatusColor(feature.type)}`}>
                  {feature.icon}
                </div>
                <div>
                  <div className="font-medium text-sm">{feature.title}</div>
                  <div className="text-xs text-muted-foreground">{feature.location}</div>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="text-xs">
                  {feature.distance}
                </Badge>
                <div className="text-xs text-muted-foreground mt-1">
                  {feature.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityMap;