import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Plus, 
  Filter,
  Download,
  CreditCard,
  DollarSign,
  TrendingUp,
  Calendar,
  Sun,
  ArrowLeft,
  CheckCircle,
  Clock,
  AlertCircle,
  Banknote
} from "lucide-react";

export default function Payments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const payments = [
    { id: "PAY-001", invoiceId: "INV-001", customer: "Johnson Residence", amount: 2450, method: "Credit Card", status: "completed", date: "2024-12-15", type: "automatic" },
    { id: "PAY-002", invoiceId: "INV-004", customer: "Eco Home Solutions", amount: 3850, method: "Bank Transfer", status: "completed", date: "2024-12-14", type: "manual" },
    { id: "PAY-003", invoiceId: "INV-002", customer: "Green Valley Corp", amount: 4450, method: "Check", status: "pending", date: "2024-12-13", type: "manual" },
    { id: "PAY-004", invoiceId: "INV-003", customer: "Smith Solar Farm", amount: 15200, method: "Wire Transfer", status: "failed", date: "2024-12-12", type: "automatic" },
    { id: "PAY-005", invoiceId: "INV-005", customer: "TechCorp Headquarters", amount: 6250, method: "Credit Card", status: "processing", date: "2024-12-11", type: "automatic" }
  ];

  const recurringPayments = [
    { id: "REC-001", customer: "Johnson Residence", amount: 150, frequency: "Monthly", nextDate: "2025-01-15", status: "active" },
    { id: "REC-002", customer: "Green Valley Corp", amount: 890, frequency: "Quarterly", nextDate: "2025-03-14", status: "active" },
    { id: "REC-003", customer: "Davis Family Home", amount: 200, frequency: "Monthly", nextDate: "2025-01-03", status: "paused" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "processing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "failed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "paused":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "processing":
        return <Clock className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "failed":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.invoiceId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || payment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalProcessed = payments.filter(p => p.status === "completed").reduce((sum, payment) => sum + payment.amount, 0);
  const totalPending = payments.filter(p => p.status === "pending" || p.status === "processing").reduce((sum, payment) => sum + payment.amount, 0);
  const totalFailed = payments.filter(p => p.status === "failed").reduce((sum, payment) => sum + payment.amount, 0);

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
                  <p className="text-sm text-muted-foreground">Payment Processing</p>
                </div>
              </div>
            </div>
            <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-blue-500 hover:from-yellow-600 hover:to-blue-600">
              <Plus className="h-4 w-4 mr-2" />
              Process Payment
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-800/60">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Processed</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalProcessed.toLocaleString()}</div>
              <p className="text-xs text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-800/60">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Payments</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalPending.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {payments.filter(p => p.status === "pending" || p.status === "processing").length} transactions
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-800/60">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Failed Payments</CardTitle>
              <AlertCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalFailed.toLocaleString()}</div>
              <p className="text-xs text-red-600">
                {payments.filter(p => p.status === "failed").length} failed transactions
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-800/60">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Recurring Revenue</CardTitle>
              <Banknote className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${recurringPayments.filter(r => r.status === "active").reduce((sum, r) => sum + r.amount, 0).toLocaleString()}/mo</div>
              <p className="text-xs text-muted-foreground">
                {recurringPayments.filter(r => r.status === "active").length} active subscriptions
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different payment views */}
        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-white/60 dark:bg-gray-800/60">
            <TabsTrigger value="transactions">Payment Transactions</TabsTrigger>
            <TabsTrigger value="recurring">Recurring Payments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="transactions">
            <Card className="border-0 shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-800/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Transactions
                </CardTitle>
                <CardDescription>Track and manage all payment transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search payments by customer, ID, or invoice..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full md:w-48">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>

                <div className="rounded-md border bg-white/50 dark:bg-gray-700/50">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Payment ID</TableHead>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPayments.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell className="font-medium">{payment.id}</TableCell>
                          <TableCell>
                            <Link to={`/invoices/${payment.invoiceId}`} className="text-blue-600 hover:underline">
                              {payment.invoiceId}
                            </Link>
                          </TableCell>
                          <TableCell>{payment.customer}</TableCell>
                          <TableCell className="font-semibold">${payment.amount.toLocaleString()}</TableCell>
                          <TableCell>{payment.method}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className={payment.type === "automatic" ? "text-blue-600" : "text-gray-600"}>
                              {payment.type}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(payment.status)}
                              <Badge variant="secondary" className={getStatusColor(payment.status)}>
                                {payment.status}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>{payment.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="recurring">
            <Card className="border-0 shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-800/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Recurring Payments
                </CardTitle>
                <CardDescription>Manage automated payment schedules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border bg-white/50 dark:bg-gray-700/50">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Subscription ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Frequency</TableHead>
                        <TableHead>Next Payment</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recurringPayments.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell className="font-medium">{payment.id}</TableCell>
                          <TableCell>{payment.customer}</TableCell>
                          <TableCell className="font-semibold">${payment.amount.toLocaleString()}</TableCell>
                          <TableCell>{payment.frequency}</TableCell>
                          <TableCell>{payment.nextDate}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className={getStatusColor(payment.status)}>
                              {payment.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
