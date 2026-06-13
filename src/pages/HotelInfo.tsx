
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Wifi, Coffee, Dumbbell, Car, Utensils, GlassWater } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function HotelInfo() {
  const amenities = [
    { icon: Wifi, label: 'Free High-Speed WiFi' },
    { icon: Utensils, label: 'In-house Restaurant' },
    { icon: GlassWater, label: 'Rooftop Bar' },
    { icon: Dumbbell, label: '24/7 Fitness Center' },
    { icon: Coffee, label: 'Premium Coffee Bar' },
    { icon: Car, label: 'Valet Parking' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-full pb-8"
    >
      {/* Header Image */}
      <div className="relative h-[250px] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        <img 
          src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="Runway1331 Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 z-20">
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none mb-2">Boutique Experience</Badge>
          <h1 className="text-3xl font-light text-white">Runway1331</h1>
        </div>
      </div>

      <div className="px-6 -mt-2 z-20 relative space-y-8">
        
        {/* About */}
        <section>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Inspired by the golden age of aviation and modern industrial design, Runway1331 offers a premium, seamless stay for the modern traveler. Experience luxury at altitude, grounded in the heart of the city.
          </p>
        </section>

        {/* Contact & Location */}
        <section className="space-y-3">
          <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Essential Info</h3>
          
          <Card className="bg-secondary/30 border-white/5">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-white/5 rounded-full text-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">1331 Aviation Blvd</p>
                <p className="text-xs text-muted-foreground">Metropolis, NY 10001</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <Card className="bg-secondary/30 border-white/5">
              <CardContent className="p-4 flex flex-col items-center justify-center gap-2 text-center">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-xs text-white">+1 (555) 133-1000</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30 border-white/5">
              <CardContent className="p-4 flex flex-col items-center justify-center gap-2 text-center">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-xs text-white">stay@runway1331.com</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* Amenities */}
        <section>
          <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Amenities</h3>
          <div className="grid grid-cols-2 gap-4">
            {amenities.map((amenity, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-1.5 bg-secondary rounded-md text-muted-foreground">
                  <amenity.icon className="w-4 h-4" />
                </div>
                <span className="text-xs text-white/80">{amenity.label}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
}
