import React from "react";
import { Upload, Home, Info, MapPin, CheckCircle2 } from "lucide-react";

export default function SubmitPropertyPage() {
  return (
    <div className="pt-24 min-h-screen bg-muted/30">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold font-heading mb-4">List Your Property for Free</h1>
            <p className="text-white/60 max-w-xl mx-auto">Reach thousands of buyers and tenants across Mumbai. Quick, easy, and completely verified.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                
                {/* Progress Steps */}
                <div className="flex items-center justify-between w-full max-w-2xl mb-12">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                        <span className="text-[10px] font-bold text-primary uppercase">Basic Info</span>
                    </div>
                    <div className="h-0.5 flex-1 bg-primary/20 mx-4"></div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 bg-muted text-muted-foreground rounded-full flex items-center justify-center font-bold">2</div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">Photos</span>
                    </div>
                    <div className="h-0.5 flex-1 bg-primary/20 mx-4"></div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 bg-muted text-muted-foreground rounded-full flex items-center justify-center font-bold">3</div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">Verification</span>
                    </div>
                </div>

                {/* Form Card */}
                <div className="w-full bg-white rounded-[40px] premium-shadow border border-border p-8 md:p-12 space-y-10">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                            <Home className="w-6 h-6 text-secondary" /> Property Details
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Property Type</label>
                                <select className="w-full bg-muted px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-secondary/50 focus:outline-none">
                                    <option>Apartment / Flat</option>
                                    <option>Villa / Row House</option>
                                    <option>Commercial Office</option>
                                    <option>Land / Plot</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Purpose</label>
                                <div className="flex gap-4">
                                    <button className="flex-1 py-4 rounded-2xl bg-primary text-white font-bold text-sm">Sell</button>
                                    <button className="flex-1 py-4 rounded-2xl bg-muted text-primary font-bold text-sm">Rent</button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Location in Mumbai</label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input type="text" placeholder="Locality, Building Name..." className="w-full bg-muted pl-10 pr-4 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-secondary/50 focus:outline-none" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                             {["BHK", "Bathrooms", "Floor"].map(field => (
                                <div key={field} className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">{field}</label>
                                    <input type="number" placeholder="0" className="w-full bg-muted px-6 py-4 rounded-2xl text-sm focus:outline-none" />
                                </div>
                             ))}
                        </div>
                    </div>

                    <div className="space-y-8 pt-10 border-t border-border">
                        <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                            <Upload className="w-6 h-6 text-secondary" /> Media & Photos
                        </h3>
                        <div className="w-full h-48 border-2 border-dashed border-border rounded-[32px] flex flex-col items-center justify-center gap-4 bg-muted/50 hover:bg-muted transition-colors cursor-pointer group">
                            <div className="p-4 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform">
                                <Upload className="w-6 h-6 text-primary" />
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">Drag and drop photos or <span className="text-primary font-bold">browse</span></p>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Max 10MB per file • JPG, PNG</p>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                        <button className="flex-1 bg-muted text-primary py-5 rounded-2xl font-bold hover:bg-border transition-colors">Save Draft</button>
                        <button className="flex-[2] bg-primary text-white py-5 rounded-2xl font-bold shadow-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                            Next Step <CheckCircle2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="mt-12 flex items-center gap-6 text-muted-foreground text-xs font-medium">
                     <div className="flex items-center gap-2"><Info className="w-4 h-4" /> 100% Secure</div>
                     <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> RERA Compliant</div>
                     <div className="flex items-center gap-2 text-primary font-bold">Trusted by 10k+ Mumbaikars</div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
