import EcoScore from "@/components/EcoScore";
import JourneyPlanner from "@/components/JourneyPlanner";
import CommunityMap from "@/components/CommunityMap";
import Achievements from "@/components/Achievements";
import CommunityChallenge from "@/components/CommunityChallenge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, MapPin, Zap, Calendar, BarChart3 } from "lucide-react";
import heroImage from "@/assets/sustainable-hero.jpg";

const Index = () => {
  const stats = [
    {
      label: "CO₂ Saved Today",
      value: "156.7 kg",
      change: "+12%",
      icon: <TrendingUp className="h-4 w-4" />,
      positive: true
    },
    {
      label: "Active Users",
      value: "2,847",
      change: "+8%",
      icon: <Users className="h-4 w-4" />,
      positive: true
    },
    {
      label: "Green Routes",
      value: "34",
      change: "+3",
      icon: <MapPin className="h-4 w-4" />,
      positive: true
    },
    {
      label: "EV Stations",
      value: "127",
      change: "+5",
      icon: <Zap className="h-4 w-4" />,
      positive: true
    }
  ];

  const quickActions = [
    {
      label: "Plan Route",
      icon: <MapPin className="h-4 w-4" />,
      color: "bg-eco-primary"
    },
    {
      label: "Join Challenge",
      icon: <Calendar className="h-4 w-4" />,
      color: "bg-eco-accent"
    },
    {
      label: "View Stats",
      icon: <BarChart3 className="h-4 w-4" />,
      color: "bg-eco-success"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="h-64 bg-cover bg-center bg-gradient-hero"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})` }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">
                Transform Your Travel, <span className="text-eco-secondary">Transform Our Planet</span>
              </h1>
              <p className="text-lg mb-6 text-white/90">
                Join thousands of eco-conscious travelers making sustainable transportation choices. 
                Plan smarter journeys, earn rewards, and help build a greener future.
              </p>
              <div className="flex gap-3">
                <Button size="lg" className="bg-white text-eco-primary hover:bg-white/90">
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="p-1 bg-eco-secondary rounded">
                    {stat.icon}
                  </div>
                  <Badge variant={stat.positive ? "default" : "destructive"} className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex gap-4 mb-8">
          {quickActions.map((action, index) => (
            <Button 
              key={index} 
              variant="outline" 
              className="flex items-center gap-2 px-6"
            >
              <div className={`p-1.5 rounded ${action.color} text-white`}>
                {action.icon}
              </div>
              {action.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <JourneyPlanner />
            <CommunityMap />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <EcoScore />
            <Achievements />
          </div>
        </div>

        {/* Community Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CommunityChallenge />
          <Card>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-eco rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Join Our Community</h3>
                <p className="text-muted-foreground">
                  Connect with fellow eco-travelers, share tips, and participate in local sustainability events.
                </p>
                <Button className="bg-gradient-eco hover:opacity-90">
                  Explore Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;