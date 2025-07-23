import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sun,
  DollarSign,
  FileText,
  TrendingUp,
  Users,
  Battery,
  Zap,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  Plus,
  ArrowRight,
  CreditCard,
  Receipt,
  BarChart3,
  MapPin,
} from "lucide-react";

export default function Index() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const stats = [
    {
      title: "Total Revenue",
      value: "$142,850",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Customers",
      value: "89",
      change: "+5",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Pending Invoices",
      value: "12",
      change: "-2",
      trend: "down",
      icon: FileText,
      color: "text-orange-600",
    },
    {
      title: "Energy Generated",
      value: "2.3 MWh",
      change: "+8.2%",
      trend: "up",
      icon: Zap,
      color: "text-yellow-600",
    },
  ];

  const recentInvoices = [
    {
      id: "INV-001",
      customer: "Johnson Residence",
      amount: "$2,450",
      status: "paid",
      date: "Dec 15, 2024",
    },
    {
      id: "INV-002",
      customer: "Green Valley Corp",
      amount: "$8,900",
      status: "pending",
      date: "Dec 14, 2024",
    },
    {
      id: "INV-003",
      customer: "Smith Solar Farm",
      amount: "$15,200",
      status: "overdue",
      date: "Dec 10, 2024",
    },
    {
      id: "INV-004",
      customer: "Eco Home Solutions",
      amount: "$3,850",
      status: "paid",
      date: "Dec 8, 2024",
    },
  ];

  const upcomingProjects = [
    {
      name: "Residential Installation - Davis",
      progress: 75,
      status: "In Progress",
      dueDate: "Dec 20",
    },
    {
      name: "Commercial Solar Array - TechCorp",
      progress: 45,
      status: "In Progress",
      dueDate: "Jan 15",
    },
    {
      name: "Maintenance - Green Valley",
      progress: 0,
      status: "Scheduled",
      dueDate: "Dec 18",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "overdue":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "overdue":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg">
                  <Sun className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent">
                    SolarFlow
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Solar Service Management
                  </p>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium text-primary">
                Dashboard
              </Link>
              <Link
                to="/invoices"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Invoices
              </Link>
              <Link
                to="/payments"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Payments
              </Link>
              <Link
                to="/customers"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Customers
              </Link>
              <Link
                to="/reports"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Reports
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                This Month
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-yellow-500 to-blue-500 hover:from-yellow-600 hover:to-blue-600"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Invoice
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-800/60"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p
                  className={`text-xs ${stat.trend === "up" ? "text-green-600" : "text-red-600"} flex items-center`}
                >
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Invoices */}
            <Card className="border-0 shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-800/60">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Receipt className="h-5 w-5" />
                      Recent Invoices
                    </CardTitle>
                    <CardDescription>
                      Latest billing and payment activity
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/invoices">
                      View All
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInvoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between p-4 rounded-lg border bg-white/50 dark:bg-gray-700/50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(invoice.status)}
                          <div>
                            <p className="font-medium">{invoice.id}</p>
                            <p className="text-sm text-muted-foreground">
                              {invoice.customer}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{invoice.amount}</p>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant="secondary"
                            className={getStatusColor(invoice.status)}
                          >
                            {invoice.status}
                          </Badge>
                          <p className="text-sm text-muted-foreground">
                            {invoice.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-800/60">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    className="h-20 flex-col space-y-2"
                    asChild
                  >
                    <Link to="/invoices/new">
                      <FileText className="h-6 w-6" />
                      <span className="text-sm">Create Invoice</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col space-y-2"
                    asChild
                  >
                    <Link to="/payments">
                      <CreditCard className="h-6 w-6" />
                      <span className="text-sm">Process Payment</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col space-y-2"
                    asChild
                  >
                    <Link to="/customers/new">
                      <Users className="h-6 w-6" />
                      <span className="text-sm">Add Customer</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col space-y-2"
                    asChild
                  >
                    <Link to="/reports">
                      <BarChart3 className="h-6 w-6" />
                      <span className="text-sm">View Reports</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Status */}
            <Card className="border-0 shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-800/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Battery className="h-5 w-5" />
                  Active Projects
                </CardTitle>
                <CardDescription>
                  Installation and maintenance status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingProjects.map((project, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm">{project.name}</p>
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{project.progress}% complete</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Due {project.dueDate}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/projects">View All Projects</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* System Status */}
            <Card className="border-0 shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-800/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Payment Gateway</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Energy Monitoring</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Invoice Generation</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600">Ready</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
