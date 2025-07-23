import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sun, ArrowLeft, Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  features?: string[];
}

export default function PlaceholderPage({
  title,
  description,
  features = [],
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg">
                  <Sun className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent">
                    SolarFlow
                  </h1>
                  <p className="text-sm text-muted-foreground">{title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-800/60">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-yellow-100 to-blue-100 dark:from-yellow-900/20 dark:to-blue-900/20 rounded-full w-fit">
                <Construction className="h-12 w-12 text-yellow-600" />
              </div>
              <CardTitle className="text-2xl">{title}</CardTitle>
              <CardDescription className="text-lg">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  This feature is currently under development. The page will
                  include advanced functionality to help you manage your solar
                  service business efficiently.
                </p>

                {features.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Planned Features:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-center gap-2"
                        >
                          <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-4">
                    Would you like me to implement this page? Just let me know
                    what specific functionality you need!
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-yellow-500 to-blue-500 hover:from-yellow-600 hover:to-blue-600"
                  >
                    <Link to="/">Return to Dashboard</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
