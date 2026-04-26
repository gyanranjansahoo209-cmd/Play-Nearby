"use client";

import { useState, useTransition } from "react";
import { X, Camera, Save, Loader2 } from "lucide-react";
import { updateProfileAction } from "../../app/actions/user";


interface EditProfileModalProps {
  user: {
    id: string;
    name: string;
    bio: string | null;
    profileImageUrl: string | null;
  };
}

export default function EditProfileModal({ user }: EditProfileModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await updateProfileAction(formData);
      if (result?.error) {
        setError(result.error);
      } else {
        setSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
          setSuccess(false);
        }, 1500);
      }
    });
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand hover:bg-brand-hover transition-colors text-white font-medium"
      >
        <Camera size={18} /> Edit Profile
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0f172a] border border-white/10 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  Profile updated successfully!
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Display Name</label>
                <input 
                  required
                  name="name"
                  defaultValue={user.name}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Bio</label>
                <textarea 
                  name="bio"
                  defaultValue={user.bio || ""}
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Profile Image URL</label>
                <input 
                  name="profileImageUrl"
                  defaultValue={user.profileImageUrl || ""}
                  placeholder="https://example.com/photo.jpg"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                />
                <p className="text-[10px] text-slate-500 mt-1">Paste a URL to an image file (PNG, JPG).</p>
              </div>

              <button 
                type="submit"
                disabled={isPending}
                className="w-full flex items-center justify-center gap-2 py-4 bg-brand hover:bg-brand-hover disabled:opacity-50 text-white font-bold rounded-2xl transition-all shadow-lg shadow-brand/20 mt-4"
              >
                {isPending ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
                {isPending ? 'Saving...' : 'Save Changes'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
