import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile, initialComments } from '../mock';
import {
  Send,
  Linkedin,
  Instagram,
  Github,
  Mail,
  Heart,
  MessageCircle,
  User
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { SectionLabel } from './About';

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [commentForm, setCommentForm] = useState({ name: '', message: '' });
  const [comments, setComments] = useState(initialComments);

  const handleSend = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: 'Missing fields', description: 'Please fill in all fields.' });
      return;
    }
    toast({
      title: 'Message sent!',
      description: `Thanks ${form.name}, I'll get back to you shortly.`
    });
    setForm({ name: '', email: '', message: '' });
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!commentForm.name || !commentForm.message) {
      toast({ title: 'Add a name & message', description: 'Both fields are required.' });
      return;
    }
    const newC = {
      id: Date.now(),
      name: commentForm.name,
      admin: false,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      message: commentForm.message,
      liked: false
    };
    setComments([newC, ...comments]);
    setCommentForm({ name: '', message: '' });
    toast({ title: 'Comment posted', description: 'Thanks for your feedback!' });
  };

  const toggleLike = (id) => {
    setComments((cs) => cs.map((c) => (c.id === id ? { ...c, liked: !c.liked } : c)));
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="Contact Me" />
        <p className="text-center text-gray-400 mt-3 mb-14 max-w-2xl mx-auto">
          Planning an AI/ML project, research collaboration, or a full-stack build? Send a message and I'll get back to you soon.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: form + socials */}
          <div className="glass-card glow-border p-8">
            <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Need help with AI/ML systems, web apps, backend, or coursework collabs? Reach out.
            </p>

            <form onSubmit={handleSend} className="mt-6 space-y-4">
              <Input label="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Input label="Your Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <TextArea label="Message" value={form.message} onChange={(v) => setForm({ ...form, message: v })} />
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={16} /> Send Message
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-purple-900/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
                <span className="font-semibold text-white">Connect With Me</span>
              </div>
              <div className="space-y-3">
                <SocialLink icon={Linkedin} color="text-sky-400"     title="Let's Connect" sub={`${profile.firstName} ${profile.lastName}`} href={profile.socials.linkedin} />
                <SocialLink icon={Instagram} color="text-pink-400"  title="Instagram"      sub="@tanishsingh"                                href={profile.socials.instagram} />
                <SocialLink icon={Github} color="text-gray-200"     title="Github"         sub="@tanishsingh"                                href={profile.socials.github} />
                <SocialLink icon={Mail} color="text-emerald-400"   title="Email"          sub={profile.email}                              href={`mailto:${profile.email}`} />
              </div>
            </div>
          </div>

          {/* Right: comments */}
          <div className="glass-card glow-border p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle size={20} className="text-purple-300" />
              <h3 className="text-2xl font-bold text-white">Comments ({comments.length})</h3>
            </div>

            <form onSubmit={handlePostComment} className="space-y-3">
              <Input label="Name *" value={commentForm.name} onChange={(v) => setCommentForm({ ...commentForm, name: v })} />
              <TextArea label="Message *" rows={3} value={commentForm.message} onChange={(v) => setCommentForm({ ...commentForm, message: v })} />
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={16} /> Post Comment
              </button>
            </form>

            <div className="mt-6 space-y-3 max-h-[420px] overflow-y-auto pr-1">
              {comments.map((c) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-[#0a0717] border border-purple-900/30 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                      <User size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{c.name}</span>
                          {c.admin && (
                            <span className="text-[10px] font-mono bg-purple-500/20 border border-purple-400/40 text-purple-200 px-1.5 py-0.5 rounded">
                              Admin
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{c.date}</span>
                      </div>
                      <p className="mt-1.5 text-gray-300 text-sm">{c.message}</p>
                      <button
                        onClick={() => toggleLike(c.id)}
                        className={`mt-2 inline-flex items-center gap-1.5 text-xs transition-colors ${
                          c.liked ? 'text-pink-400' : 'text-gray-500 hover:text-pink-400'
                        }`}
                      >
                        <Heart size={12} fill={c.liked ? 'currentColor' : 'none'} />
                        {c.liked ? 'Liked' : 'Like'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Input = ({ label, value, onChange, type = 'text' }) => (
  <label className="block">
    <span className="block text-xs text-gray-400 mb-1.5 font-medium">{label}</span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#0a0717] border border-purple-900/40 rounded-md px-3 py-2.5 text-white outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 transition-colors"
    />
  </label>
);

const TextArea = ({ label, value, onChange, rows = 4 }) => (
  <label className="block">
    <span className="block text-xs text-gray-400 mb-1.5 font-medium">{label}</span>
    <textarea
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#0a0717] border border-purple-900/40 rounded-md px-3 py-2.5 text-white outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 transition-colors resize-none"
    />
  </label>
);

const SocialLink = ({ icon: Icon, color, title, sub, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0717] border border-purple-900/30 hover:border-purple-500/50 hover:bg-purple-500/5 transition-colors"
  >
    <div className={`w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center ${color}`}>
      <Icon size={16} />
    </div>
    <div>
      <div className="text-white text-sm font-semibold">{title}</div>
      <div className="text-gray-400 text-xs">{sub}</div>
    </div>
  </a>
);

export default Contact;
