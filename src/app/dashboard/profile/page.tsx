import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { H1, P } from "@/components/ui/typography";
import { User, Mail, Calendar, MapPin } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Profile",
    description: "Manage your profile information",
  };
}

export default function ProfilePage() {
  // Mock user data - in a real app this would come from an API
  const user = {
    name: "Shaswat Raj",
    email: "shaswat@example.com",
    bio: "Full-stack developer passionate about creating beautiful, functional web applications.",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    avatar: "/avatars/shaswat.jpg",
  };

  return (
    <div className="container py-8">
      <H1 className="mb-8">Profile</H1>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
              <CardDescription>
                Update your profile picture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="rounded-full w-32 h-32 object-cover mb-4"
                  />
                ) : (
                  <div className="bg-muted rounded-full w-32 h-32 flex items-center justify-center mb-4">
                    <User className="h-16 w-16" />
                  </div>
                )}
                <Button variant="outline">Upload New</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={user.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user.email} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" defaultValue={user.bio} />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="location" className="pl-10" defaultValue={user.location} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="joinDate">Member Since</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="joinDate" className="pl-10" defaultValue={user.joinDate} disabled />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}