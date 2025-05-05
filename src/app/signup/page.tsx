'use client'

import { Card ,CardContent } from '@/components/ui/ card'
import { Button } from '@/components/ui/moving-border' // if using animated button
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign Up Data:', formData)
    // Add API call logic here
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-100 to-slate-200 dark:from-zinc-900 dark:to-slate-950 p-4">
      <Card className="w-full max-w-md shadow-xl border-none rounded-2xl bg-gray-400 dark:bg-zinc-900 dark:text-white placeholder:text-black">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username field (optional) */}
            {/* <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="john_doe"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div> */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                className='placeholder:text-black text-black'
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                className='placeholder:text-black text-black'
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
          <p className="text-center text-sm mt-4 text-zinc-500 dark:text-zinc-400">
            You Don&apos;t have an a Account? 
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
