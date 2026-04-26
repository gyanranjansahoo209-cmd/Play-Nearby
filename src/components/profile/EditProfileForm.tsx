"use client";

import { useState, useTransition } from "react";
import { ArrowLeft, Save, Loader2, Camera, MapPin, Clock, Calendar, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { updateProfileAction } from "@/app/actions/user";
import Link from "next/link";

interface EditProfileFormProps {
  user: any;
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIMES = ["Morning", "Afternoon", "Evening", "Night"];

export default function EditProfileForm({ user }: EditProfileFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(user.profileImageUrl);

  const parsedAvailability = user.availability ? JSON.parse(user.availability) : { days: [], times: [] };
  const [selectedDays, setSelectedDays] = useState<string[]>(parsedAvailability.days);
  const [selectedTimes, setSelectedTimes] = useState<string[]>(parsedAvailability.times);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Create an image to resize
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 400;
          const MAX_HEIGHT = 400;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          
          // Get compressed Base64
          const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
          setPreviewImage(dataUrl);
        };
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    
    const formData = new FormData(e.currentTarget);
    // Explicitly add arrays
    selectedDays.forEach(day => formData.append('availabilityDays', day));
    selectedTimes.forEach(time => formData.append('availabilityTimes', time));
    
    // Add the Base64 image if it was changed
    if (previewImage && previewImage.startsWith('data:image')) {
      formData.set('profileImageUrl', previewImage);
    }

    startTransition(async () => {
      const result = await updateProfileAction(formData);
      if (result?.error) {
        setError(result.error);
      } else {
        setSuccess(true);
        setTimeout(() => {
          router.push('/profile');
          router.refresh();
        }, 1500);
      }
    });
  };

  const toggleDay = (day: string) => {
    setSelectedDays(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
  };

  const toggleTime = (time: string) => {
    setSelectedTimes(prev => prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]);
  };

  return (
    <div className="max-w-3xl mx-auto w-full px-4 py-8">
      <Link href="/profile" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={20} /> Back to Profile
      </Link>

      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md">
        <div className="p-8 border-b border-white/5 bg-gradient-to-r from-brand/10 to-transparent">
          <h1 className="text-3xl font-bold">Edit Your Profile</h1>
          <p className="text-slate-400 mt-2">Update your information to get better matches.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-10">
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-400 font-medium flex items-center gap-3 animate-in zoom-in duration-300">
              <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                <Check size={14} />
              </div>
              Profile updated successfully! Redirecting...
            </div>
          )}

          {/* Section 1: Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-brand">
              <Camera size={20} />
              <h2 className="text-xl font-bold text-white">Identity</h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Picture Upload */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-white/10 overflow-hidden flex items-center justify-center relative group">
                  {previewImage ? (
                    <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-brand flex items-center justify-center text-4xl font-bold text-white uppercase">
                      {user.name.charAt(0)}
                    </div>
                  )}
                  <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    <Camera size={24} className="text-white" />
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                <span className="text-xs text-slate-500">Click to change photo</span>
              </div>

              <div className="flex-1 w-full space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Display Name</label>
                  <input 
                    required
                    name="name"
                    defaultValue={user.name}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Bio</label>
                  <textarea 
                    name="bio"
                    defaultValue={user.bio || ""}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors resize-none"
                    placeholder="Tell other players about yourself..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Location */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-brand">
              <MapPin size={20} />
              <h2 className="text-xl font-bold text-white">Location & Privacy</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Base Address / Area</label>
                <input 
                  name="address"
                  defaultValue={user.address || ""}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                  placeholder="e.g. Downtown, New York"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Discovery Radius (meters)</label>
                <input 
                  type="number"
                  name="privacyRadius"
                  defaultValue={user.privacyRadius}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Availability */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-brand">
              <Clock size={20} />
              <h2 className="text-xl font-bold text-white">Playing Preferences</h2>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                <Calendar size={16} /> Preferred Days
              </label>
              <div className="flex flex-wrap gap-2">
                {DAYS.map(day => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => toggleDay(day)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${selectedDays.includes(day) ? 'bg-brand border-brand text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'}`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                <Clock size={16} /> Preferred Times
              </label>
              <div className="flex flex-wrap gap-2">
                {TIMES.map(time => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => toggleTime(time)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${selectedTimes.includes(time) ? 'bg-brand border-brand text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <button 
              type="submit"
              disabled={isPending}
              className="w-full flex items-center justify-center gap-3 py-5 bg-brand hover:bg-brand-hover disabled:opacity-50 text-white font-bold rounded-2xl transition-all shadow-xl shadow-brand/20 text-lg"
            >
              {isPending ? <Loader2 size={24} className="animate-spin" /> : <Save size={24} />}
              {isPending ? 'Saving Your Profile...' : 'Save All Settings'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
