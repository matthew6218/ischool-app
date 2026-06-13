
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Wifi, Dumbbell, Users, Music, Palette, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function HotelInfo() {
  const amenities = [
    { icon: Palette, label: 'Art & Creative Studios' },
    { icon: Music, label: 'Music & Performance Spaces' },
    { icon: Dumbbell, label: 'Sports & Fitness Facilities' },
    { icon: Users, label: 'Youth Co-working Lounge' },
    { icon: Award, label: 'Workshop & Exhibition Hall' },
    { icon: Wifi, label: 'Free High-Speed WiFi & Events' },
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
          alt="Runway 1331 Kai Tak" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 z-20">
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none mb-2">Kai Tak • Est. 2025</Badge>
          <h1 className="text-3xl font-light text-white">Runway 1331</h1>
        </div>
      </div>

      <div className="px-6 -mt-2 z-20 relative space-y-8">
        
        {/* About */}
        <section>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Runway 1331 is a dynamic platform for youth development, integrating accommodation, art, culture, sports, and music. We revitalize the former Kai Tak community isolation facilities into a vibrant cultural and economic center.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mt-3">
            The name pays tribute to the legendary 13/31 runway of the former Kai Tak Airport. As 2025 marks the airport's centenary, Runway 1331 carries forward its spirit of exploration and aspiration — empowering a new generation of youth to pursue their dreams through creative collaboration, workshops, exhibitions, and public events.
          </p>
        </section>

        {/* Contact & Location */}
        <section className="space-y-3">
          <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Contact</h3>
          
          {/* Address */}
          <Card className="bg-secondary/30 border-white/5">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-white/5 rounded-full text-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Shing Fung Rd, Kai Tak</p>
                <p className="text-xs text-muted-foreground">Hong Kong</p>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs text-muted-foreground -mt-1 mb-2">
            Strategically located in Kai Tak, with easy access to Hong Kong's vibrant neighborhoods and attractions.
          </p>

          {/* Get in Touch */}
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-3 mb-2">Get in Touch</h4>

          {/* General Enquiries */}
          <div className="bg-secondary/30 border-white/5 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">General Enquiries</span>
            </div>
            <a href="mailto:info@runway1331.com.hk" className="text-sm text-white hover:underline">
              info@runway1331.com.hk
            </a>
          </div>

          {/* Reservations */}
          <div className="bg-secondary/30 border-white/5 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Reservations</span>
            </div>
            <div className="text-sm text-white space-y-0.5 leading-tight">
              <div>Tel: +852 5635 7131</div>
              <div>WhatsApp: +852 5635 7131</div>
              <a href="mailto:rsvn@runway1331.com.hk" className="hover:underline block">rsvn@runway1331.com.hk</a>
            </div>
          </div>

          {/* Leasing, Events, Media */}
          <div className="grid grid-cols-1 gap-2">
            <div className="bg-secondary/30 border-white/5 rounded-xl p-3">
              <div className="text-xs text-muted-foreground mb-0.5">Leasing Enquiries</div>
              <a href="mailto:leasing@runway1331.com.hk" className="text-sm text-white hover:underline">
                leasing@runway1331.com.hk
              </a>
            </div>
            <div className="bg-secondary/30 border-white/5 rounded-xl p-3">
              <div className="text-xs text-muted-foreground mb-0.5">Event Booking Enquiries</div>
              <a href="mailto:event@runway1331.com.hk" className="text-sm text-white hover:underline">
                event@runway1331.com.hk
              </a>
            </div>
            <div className="bg-secondary/30 border-white/5 rounded-xl p-3">
              <div className="text-xs text-muted-foreground mb-0.5">Media Enquiries</div>
              <a href="mailto:media@runway1331.com.hk" className="text-sm text-white hover:underline">
                media@runway1331.com.hk
              </a>
            </div>
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
